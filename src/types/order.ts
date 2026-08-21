import { Product, ProductOption } from './product';

export interface SelectedOption {
  groupId: string;
  groupTitle: string;
  option: ProductOption;
}

export interface CartItem {
  id: string; // Unique cart item ID (slug + serialized options)
  product: Product;
  quantity: number;
  selectedOptions: SelectedOption[];
  specialInstructions?: string;
  itemPrice: number; // Calculated unit price with options included
  totalPrice: number; // itemPrice * quantity
}

export type PaymentMethodType = 'cod' | 'easypaisa_jazzcash' | 'card_mock';

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  email: string;
  deliveryZone: string; // Restricted to Quetta neighborhoods
  streetAddress: string;
  nearestLandmark?: string;
  deliveryNotes?: string;
  paymentMethod: PaymentMethodType;
  promoCode?: string;
}

export interface Order {
  id: string; // e.g. "PRT-94821"
  createdAt: string;
  customer: CheckoutFormData;
  items: CartItem[];
  subtotal: number;
  discount: number;
  deliveryFee: number;
  total: number;
  status: 'Received' | 'Baking' | 'Out for Delivery' | 'Delivered';
  estimatedDeliveryTime: string;
}
