import { useCartStore } from '@/store/cartStore';
import { useUIStore } from '@/store/uiStore';
import { Product } from '@/types/product';
import { SelectedOption } from '@/types/order';

export function useCart() {
  const cartStore = useCartStore();
  const showToast = useUIStore(s => s.showToast);
  const openCartDrawer = useUIStore(s => s.openCartDrawer);

  const handleAddToCart = (
    product: Product,
    quantity = 1,
    selectedOptions: SelectedOption[] = [],
    specialInstructions = '',
    openDrawerOnAdd = true
  ) => {
    cartStore.addItem(product, quantity, selectedOptions, specialInstructions);
    showToast(`Added ${quantity}x ${product.name} to cart!`, 'success');
    if (openDrawerOnAdd) {
      openCartDrawer();
    }
  };

  return {
    ...cartStore,
    addToCart: handleAddToCart,
    itemCount: cartStore.getItemCount(),
    totals: cartStore.getTotals(),
  };
}
