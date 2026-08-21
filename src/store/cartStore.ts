import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { Product, ProductOption } from '@/types/product';
import { CartItem, SelectedOption } from '@/types/order';
import { calculateCartTotals } from '@/lib/utils';

interface CartState {
  items: CartItem[];
  promoCode: string | null;
  promoDiscountRatio: number;
  
  // Actions
  addItem: (product: Product, quantity?: number, selectedOptions?: SelectedOption[], specialInstructions?: string) => void;
  removeItem: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  clearCart: () => void;
  applyPromoCode: (code: string) => { success: boolean; message: string };
  removePromoCode: () => void;
  
  // Computed helpers
  getTotals: () => ReturnType<typeof calculateCartTotals>;
  getItemCount: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      promoCode: null,
      promoDiscountRatio: 0,

      addItem: (product, quantity = 1, selectedOptions = [], specialInstructions = '') => {
        // Calculate item base price + option price modifiers
        const optionsModifier = selectedOptions.reduce(
          (sum, sel) => sum + sel.option.priceModifier,
          0
        );
        const itemUnitPrice = product.price + optionsModifier;

        // Generate unique cart item ID based on product ID and selected option IDs
        const optionsKey = selectedOptions
          .map(so => `${so.groupId}:${so.option.id}`)
          .sort()
          .join('|');
        const cartItemId = `${product.id}_${optionsKey}`;

        set(state => {
          const existingIndex = state.items.findIndex(item => item.id === cartItemId);

          if (existingIndex > -1) {
            const updatedItems = [...state.items];
            const existingItem = updatedItems[existingIndex];
            const newQuantity = existingItem.quantity + quantity;
            updatedItems[existingIndex] = {
              ...existingItem,
              quantity: newQuantity,
              totalPrice: itemUnitPrice * newQuantity,
              specialInstructions: specialInstructions || existingItem.specialInstructions
            };
            return { items: updatedItems };
          } else {
            const newItem: CartItem = {
              id: cartItemId,
              product,
              quantity,
              selectedOptions,
              specialInstructions,
              itemPrice: itemUnitPrice,
              totalPrice: itemUnitPrice * quantity
            };
            return { items: [...state.items, newItem] };
          }
        });
      },

      removeItem: (cartItemId: string) => {
        set(state => ({
          items: state.items.filter(item => item.id !== cartItemId)
        }));
      },

      updateQuantity: (cartItemId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(cartItemId);
          return;
        }

        set(state => ({
          items: state.items.map(item => {
            if (item.id === cartItemId) {
              return {
                ...item,
                quantity,
                totalPrice: item.itemPrice * quantity
              };
            }
            return item;
          })
        }));
      },

      clearCart: () => {
        set({ items: [], promoCode: null, promoDiscountRatio: 0 });
      },

      applyPromoCode: (code: string) => {
        const cleanCode = code.trim().toUpperCase();
        if (cleanCode === 'PORTO10' || cleanCode === 'QUETTA10') {
          set({ promoCode: cleanCode, promoDiscountRatio: 0.10 });
          return { success: true, message: '10% discount applied to your order!' };
        } else if (cleanCode === 'WELCOMETOPORTO' || cleanCode === 'QUETTA15') {
          set({ promoCode: cleanCode, promoDiscountRatio: 0.15 });
          return { success: true, message: '15% welcome discount applied!' };
        } else {
          return { success: false, message: 'Invalid promo code. Try PORTO10' };
        }
      },

      removePromoCode: () => {
        set({ promoCode: null, promoDiscountRatio: 0 });
      },

      getTotals: () => {
        return calculateCartTotals(get().items, get().promoDiscountRatio);
      },

      getItemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      }
    }),
    {
      name: 'portos_cart_store_v1',
      storage: createJSONStorage(() => localStorage)
    }
  )
);
