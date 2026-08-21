'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCartStore } from '@/store/cartStore';
import { useUIStore } from '@/store/uiStore';
import { CartItem } from '@/components/cart/CartItem';
import { Button } from '@/components/ui/Button';
import { formatPKR } from '@/lib/utils';
import { ShoppingBag, ArrowRight, ArrowLeft, Truck, Tag, Trash2 } from 'lucide-react';

export default function CartPage() {
  const items = useCartStore(s => s.items);
  const getTotals = useCartStore(s => s.getTotals);
  const clearCart = useCartStore(s => s.clearCart);
  const promoCode = useCartStore(s => s.promoCode);
  const applyPromoCode = useCartStore(s => s.applyPromoCode);
  const removePromoCode = useCartStore(s => s.removePromoCode);
  const showToast = useUIStore(s => s.showToast);

  const [promoInput, setPromoInput] = useState('');

  const totals = getTotals();

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;
    const res = applyPromoCode(promoInput);
    showToast(res.message, res.success ? 'success' : 'error');
    if (res.success) setPromoInput('');
  };

  return (
    <div className="py-12 bg-stone-50/50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black font-display text-stone-900">Your Shopping Cart</h1>
            <p className="text-sm text-stone-500 mt-1">Review your freshly baked items before placing your Quetta delivery order.</p>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-rose-600 hover:text-rose-700 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <Trash2 className="w-4 h-4" /> Clear Cart
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 border border-stone-200 text-center max-w-lg mx-auto my-12">
            <div className="w-20 h-20 bg-amber-100/60 text-amber-700 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
              🍩
            </div>
            <h2 className="text-xl font-bold font-display text-stone-900">Your cart is currently empty</h2>
            <p className="text-sm text-stone-500 mt-2 mb-6">Explore our fresh menu of gourmet donuts, celebration cakes & breads.</p>
            <Link href="/menu">
              <Button variant="amber" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Browse Bakery Menu
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Cart Items List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200/60 flex items-center gap-3 text-xs text-amber-900">
                <Truck className="w-5 h-5 text-amber-700 shrink-0" />
                <span>
                  {totals.isFreeDelivery
                    ? '🎉 Congratulations! Your order qualifies for FREE Quetta express delivery.'
                    : `Add ${formatPKR(totals.freeDeliveryRemaining)} more to get FREE Quetta express delivery.`}
                </span>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <Link href="/menu" className="inline-flex items-center gap-2 text-xs font-semibold text-stone-600 hover:text-amber-700 pt-2">
                <ArrowLeft className="w-4 h-4" /> Continue Shopping for More Pastries
              </Link>
            </div>

            {/* Right: Order Summary Sidebar */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-6 sticky top-24">
              <h3 className="text-lg font-bold font-display text-stone-900 pb-3 border-b border-stone-100">
                Order Summary
              </h3>

              {/* Promo Code Form */}
              {promoCode ? (
                <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl text-xs font-semibold text-emerald-800">
                  <span className="flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-emerald-600" />
                    Promo &quot;{promoCode}&quot; Applied!
                  </span>
                  <button onClick={removePromoCode} className="text-stone-500 hover:text-rose-600 underline cursor-pointer">
                    Remove
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplyPromo} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Promo Code (e.g. PORTO10)"
                    value={promoInput}
                    onChange={e => setPromoInput(e.target.value)}
                    className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-3.5 py-2 text-xs font-medium uppercase placeholder:normal-case focus:outline-none focus:border-amber-500"
                  />
                  <Button type="submit" variant="secondary" size="sm" className="text-xs">
                    Apply
                  </Button>
                </form>
              )}

              {/* Cost Calculations */}
              <div className="space-y-2.5 text-xs text-stone-600 border-t border-stone-100 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">{formatPKR(totals.subtotal)}</span>
                </div>

                {totals.discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
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

                <div className="flex justify-between text-base font-bold text-stone-900 pt-3 border-t border-stone-200">
                  <span>Total Amount (PKR)</span>
                  <span className="text-amber-900 text-lg font-display">{formatPKR(totals.total)}</span>
                </div>
              </div>

              <Link href="/checkout" className="block">
                <Button variant="amber" size="lg" rightIcon={<ArrowRight className="w-5 h-5" />} className="w-full py-4 text-base font-bold shadow-md shadow-amber-500/25">
                  Proceed to Quetta Checkout
                </Button>
              </Link>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
