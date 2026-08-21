'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';
import { useUIStore } from '@/store/uiStore';
import { DeliveryZoneSelect } from '@/components/checkout/DeliveryZoneSelect';
import { PaymentMethod } from '@/components/checkout/PaymentMethod';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { formatPKR } from '@/lib/utils';
import { CheckoutFormData, PaymentMethodType } from '@/types/order';
import { ShieldCheck, MapPin, Phone, User, Home, ArrowRight, Lock, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function CheckoutPage() {
  const router = useRouter();
  const items = useCartStore(s => s.items);
  const getTotals = useCartStore(s => s.getTotals);
  const clearCart = useCartStore(s => s.clearCart);
  const showToast = useUIStore(s => s.showToast);

  const totals = getTotals();

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: '',
    phone: '',
    email: '',
    deliveryZone: '',
    streetAddress: '',
    nearestLandmark: '',
    deliveryNotes: '',
    paymentMethod: 'cod',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (items.length === 0) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-stone-900">Your cart is empty</h2>
        <p className="text-sm text-stone-500 mt-2">Please add items to your cart before proceeding to checkout.</p>
        <Link href="/menu" className="mt-4 inline-block">
          <Button variant="primary">Return to Menu</Button>
        </Link>
      </div>
    );
  }

  const validateForm = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.phone.trim()) errs.phone = 'Quetta Phone Number is required';
    if (!formData.deliveryZone) errs.deliveryZone = 'Please select a Quetta neighborhood';
    if (!formData.streetAddress.trim()) errs.streetAddress = 'Street address / house number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast('Please fix the errors in the form before submitting.', 'error');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const mockOrderId = `PRT-${Math.floor(10000 + Math.random() * 90000)}`;

      // Store mock order in localStorage for confirmation screen preview
      const orderPayload = {
        id: mockOrderId,
        customer: formData,
        items,
        subtotal: totals.subtotal,
        discount: totals.discount,
        deliveryFee: totals.deliveryFee,
        total: totals.total,
        createdAt: new Date().toISOString()
      };

      if (typeof window !== 'undefined') {
        localStorage.setItem('latest_portos_order', JSON.stringify(orderPayload));
      }

      clearCart();
      setIsSubmitting(false);
      showToast('Order placed successfully! Preparing your fresh bake.', 'success');
      router.push(`/checkout/success?orderId=${mockOrderId}`);
    }, 1200);
  };

  return (
    <div className="py-12 bg-stone-50/50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            Quetta Express Delivery
          </span>
          <h1 className="text-3xl font-black font-display text-stone-900 mt-2">Delivery & Checkout</h1>
          <p className="text-sm text-stone-600 mt-1">
            Complete your delivery details. We deliver exclusively within Quetta city limits in insulated warm boxes.
          </p>
        </div>

        <form onSubmit={handleSubmitOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Address & Payment Form */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold font-display text-stone-900 flex items-center gap-2">
                <User className="w-4 h-4 text-amber-600" /> Contact Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Full Name *"
                  placeholder="e.g. Tariq Kasi"
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  error={errors.fullName}
                  leftIcon={<User className="w-4 h-4" />}
                />
                <Input
                  label="Quetta Phone Number *"
                  placeholder="0304 8844719"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  error={errors.phone}
                  leftIcon={<Phone className="w-4 h-4" />}
                />
              </div>
              <Input
                label="Email Address (Optional for receipt)"
                type="email"
                placeholder="name@domain.com"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Quetta Address Info */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold font-display text-stone-900 flex items-center gap-2">
                <Home className="w-4 h-4 text-amber-600" /> Quetta Delivery Address
              </h3>

              <DeliveryZoneSelect
                value={formData.deliveryZone}
                onChange={zone => setFormData({ ...formData, deliveryZone: zone })}
                error={errors.deliveryZone}
              />

              <Input
                label="Street Address / House No. / Flat *"
                placeholder="House #12, Street #4, Block B"
                value={formData.streetAddress}
                onChange={e => setFormData({ ...formData, streetAddress: e.target.value })}
                error={errors.streetAddress}
                leftIcon={<Home className="w-4 h-4" />}
              />

              <Input
                label="Nearest Landmark (Optional)"
                placeholder="e.g. Near Serena Hotel Gate / Opposite Civil Hospital"
                value={formData.nearestLandmark}
                onChange={e => setFormData({ ...formData, nearestLandmark: e.target.value })}
              />

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
                  Special Delivery Instructions (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Ring bell twice, leave with security guard, call upon arrival"
                  value={formData.deliveryNotes}
                  onChange={e => setFormData({ ...formData, deliveryNotes: e.target.value })}
                  className="w-full bg-white border border-stone-200 rounded-xl p-3 text-xs text-stone-900 focus:outline-none focus:border-amber-500"
                />
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm">
              <PaymentMethod
                value={formData.paymentMethod}
                onChange={method => setFormData({ ...formData, paymentMethod: method })}
              />
            </div>

          </div>

          {/* Right: Sticky Order Review */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm space-y-5 sticky top-24">
              <h3 className="text-lg font-bold font-display text-stone-900 pb-3 border-b border-stone-100">
                Order Review ({items.length} items)
              </h3>

              {/* Items summary */}
              <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-center text-xs text-stone-700">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded-md">
                        {item.quantity}x
                      </span>
                      <span className="font-semibold text-stone-900 line-clamp-1">{item.product.name}</span>
                    </div>
                    <span className="font-bold text-stone-900 shrink-0">{formatPKR(item.totalPrice)}</span>
                  </div>
                ))}
              </div>

              {/* Price totals */}
              <div className="space-y-2 text-xs text-stone-600 border-t border-stone-100 pt-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-stone-900">{formatPKR(totals.subtotal)}</span>
                </div>
                {totals.discount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Discount</span>
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
                  <span className="text-amber-900 text-xl font-display">{formatPKR(totals.total)}</span>
                </div>
              </div>

              <Button
                type="submit"
                variant="amber"
                size="lg"
                isLoading={isSubmitting}
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full py-4 text-base font-bold shadow-lg shadow-amber-500/25"
              >
                Place Quetta Order Now
              </Button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400">
                <Lock className="w-3.5 h-3.5" />
                <span>100% Safe & Instant Local Confirmation</span>
              </div>
            </div>
          </div>

        </form>

      </div>
    </div>
  );
}
