'use client';

import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useUIStore } from '@/store/uiStore';
import { useCartStore } from '@/store/cartStore';
import { CartItem } from './CartItem';
import { Button } from '@/components/ui/Button';
import { formatPKR } from '@/lib/utils';
import { X, ShoppingBag, ArrowRight, Truck, Sparkles, Tag } from 'lucide-react';
import Link from 'next/link';

export const CartDrawer: React.FC = () => {
  const isOpen = useUIStore(s => s.isCartDrawerOpen);
  const closeCartDrawer = useUIStore(s => s.closeCartDrawer);
  
  const items = useCartStore(s => s.items);
  const getTotals = useCartStore(s => s.getTotals);
  const promoCode = useCartStore(s => s.promoCode);
  const applyPromoCode = useCartStore(s => s.applyPromoCode);
  const removePromoCode = useCartStore(s => s.removePromoCode);
  const showToast = useUIStore(s => s.showToast);

  const [promoInput, setPromoInput] = React.useState('');

  const totals = getTotals();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    showToast(res.message, res.success ? 'success' : 'error');
    if (res.success) setPromoInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCartDrawer}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs"
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between"
            >
              {/* Header */}
              <div className="p-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/50">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 bg-amber-100 rounded-xl text-amber-800">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 font-display text-base">Your Quetta Cart</h3>
                    <p className="text-xs text-stone-500">{items.length} {items.length === 1 ? 'item' : 'items'}</p>
                  </div>
                </div>
                <button
                  onClick={closeCartDrawer}
                  className="p-2 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free Shipping Progress */}
              <div className="bg-amber-50 px-5 py-3 border-b border-amber-200/50">
                <div className="flex items-center justify-between text-xs font-semibold text-amber-900 mb-1.5">
                  <span className="flex items-center gap-1">
                    <Truck className="w-4 h-4 text-amber-600" />
                    {totals.isFreeDelivery ? 'You unlocked FREE Quetta Delivery!' : `Add ${formatPKR(totals.freeDeliveryRemaining)} for FREE delivery`}
                  </span>
                  <span>{totals.isFreeDelivery ? '100%' : `${Math.min(100, Math.round((totals.subtotal / 1500) * 100))}%`}</span>
                </div>
                <div className="w-full bg-amber-200/70 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-amber-600 h-full transition-all duration-500 rounded-full"
                    style={{ width: `${Math.min(100, (totals.subtotal / 1500) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Cart Items Scroll Area */}
              <div className="flex-1 overflow-y-auto p-5 space-y-3">
                {items.length === 0 ? (
                  <div className="text-center py-16 px-4">
                    <div className="w-20 h-20 bg-amber-100/60 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-700">
                      <ShoppingBag className="w-10 h-10 opacity-70" />
                    </div>
                    <h4 className="text-lg font-bold text-stone-900 font-display">Your cart is empty</h4>
                    <p className="text-sm text-stone-500 max-w-xs mx-auto mt-1.5 mb-6">
                      Looks like you haven&apos;t added any fresh donuts or treats yet!
                    </p>
                    <Button
                      onClick={closeCartDrawer}
                      variant="primary"
                      className="w-full sm:w-auto"
                    >
                      Browse Bakery Menu
                    </Button>
                  </div>
                ) : (
                  items.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))
                )}
              </div>

              {/* Footer Summary & Actions */}
              {items.length > 0 && (
                <div className="p-5 border-t border-stone-100 bg-stone-50/50 space-y-4">
                  {/* Promo code input */}
                  {promoCode ? (
                    <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-3.5 py-2 rounded-xl text-xs font-semibold text-emerald-800">
                      <span className="flex items-center gap-1.5">
                        <Tag className="w-3.5 h-3.5 text-emerald-600" />
                        Code &quot;{promoCode}&quot; Applied!
                      </span>
                      <button
                        onClick={removePromoCode}
                        className="text-stone-500 hover:text-rose-600 underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleApplyPromo} className="flex gap-2">
                      <input
                        type="text"
                        placeholder="Promo code (e.g. PORTO10)"
                        value={promoInput}
                        onChange={e => setPromoInput(e.target.value)}
                        className="flex-1 bg-white border border-stone-200 rounded-xl px-3 py-1.5 text-xs text-stone-900 uppercase placeholder:normal-case focus:outline-none focus:border-amber-500"
                      />
                      <button
                        type="submit"
                        className="bg-stone-900 text-white hover:bg-stone-800 text-xs font-medium px-3.5 py-1.5 rounded-xl cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>
                  )}

                  {/* Calculations */}
                  <div className="space-y-1.5 text-xs text-stone-600">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span className="font-semibold text-stone-900">{formatPKR(totals.subtotal)}</span>
                    </div>
                    {totals.discount > 0 && (
                      <div className="flex justify-between text-emerald-700 font-medium">
                        <span>Discount ({promoCode})</span>
                        <span>-{formatPKR(totals.discount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span>Quetta Express Delivery</span>
                      {totals.isFreeDelivery ? (
                        <span className="text-emerald-700 font-bold">FREE</span>
                      ) : (
                        <span className="font-semibold text-stone-900">{formatPKR(totals.deliveryFee)}</span>
                      )}
                    </div>
                    <div className="flex justify-between text-sm font-bold text-stone-900 pt-2 border-t border-stone-200">
                      <span>Total (PKR)</span>
                      <span className="text-amber-900 text-base">{formatPKR(totals.total)}</span>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="grid grid-cols-2 gap-2.5 pt-1">
                    <Link href="/cart" onClick={closeCartDrawer} className="w-full">
                      <Button variant="outline" className="w-full text-xs py-2.5">
                        View Cart Page
                      </Button>
                    </Link>
                    <Link href="/checkout" onClick={closeCartDrawer} className="w-full">
                      <Button variant="primary" rightIcon={<ArrowRight className="w-4 h-4" />} className="w-full text-xs py-2.5">
                        Checkout Now
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
