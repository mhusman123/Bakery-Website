import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { FLAT_DELIVERY_FEE_PKR, FREE_DELIVERY_THRESHOLD_PKR } from './deliveryZones';
import { CartItem } from '@/types/order';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency to Pakistani Rupee format (e.g. "Rs. 1,450")
 */
export function formatPKR(amount: number): string {
  return `Rs. ${amount.toLocaleString('en-PK')}`;
}

/**
 * Calculate totals for cart items
 */
export function calculateCartTotals(items: CartItem[], promoDiscountRatio: number = 0) {
  const subtotal = items.reduce((sum, item) => sum + item.totalPrice, 0);
  const discount = Math.round(subtotal * promoDiscountRatio);
  const discountedSubtotal = Math.max(0, subtotal - discount);
  
  const deliveryFee = items.length > 0
    ? (discountedSubtotal >= FREE_DELIVERY_THRESHOLD_PKR ? 0 : FLAT_DELIVERY_FEE_PKR)
    : 0;

  const total = discountedSubtotal + deliveryFee;

  const freeDeliveryRemaining = Math.max(0, FREE_DELIVERY_THRESHOLD_PKR - discountedSubtotal);

  return {
    subtotal,
    discount,
    discountedSubtotal,
    deliveryFee,
    total,
    freeDeliveryRemaining,
    isFreeDelivery: deliveryFee === 0 && items.length > 0,
  };
}
