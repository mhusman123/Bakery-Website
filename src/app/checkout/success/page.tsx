'use client';

import React, { useEffect, useState, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { formatPKR } from '@/lib/utils';
import { QUETTA_BAKERY_LOCATION, ESTIMATED_DELIVERY_MINS } from '@/lib/deliveryZones';
import { CheckCircle2, Clock, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'PRT-84192';

  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('latest_portos_order');
      if (saved) {
        try {
          setOrder(JSON.parse(saved));
        } catch (e) {}
      }
    }
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hello Porto's Bakery! I just placed order #${orderId} for delivery to ${order?.customer?.deliveryZone || 'Quetta'}. Please confirm estimated delivery.`
  );
  const whatsappUrl = `https://wa.me/${QUETTA_BAKERY_LOCATION.whatsapp.replace(/\+/g, '')}?text=${whatsappMessage}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xl text-center relative overflow-hidden"
    >
      {/* Success Check Badge */}
      <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-md border-4 border-amber-50 animate-bounce">
        <CheckCircle2 className="w-10 h-10 text-amber-700" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
        Order Confirmed!
      </span>

      <h1 className="text-3xl sm:text-4xl font-black font-display text-stone-900 mt-3">
        Thank You For Your Order!
      </h1>

      <p className="text-sm text-stone-600 max-w-md mx-auto mt-2">
        Your gourmet donuts & bakery items are now being hand-glazed in our Shahbaz Town kitchen.
      </p>

      {/* Order Info Card */}
      <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/80 my-8 text-left space-y-4">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-stone-200 gap-2">
          <div>
            <span className="text-xs text-stone-500 font-semibold block">Order Reference</span>
            <span className="text-lg font-black font-display text-amber-950">{orderId}</span>
          </div>

          <div className="flex items-center gap-2 bg-amber-100/80 text-amber-900 px-3 py-1.5 rounded-full text-xs font-bold">
            <Clock className="w-4 h-4 text-amber-700 shrink-0" />
            <span>Est. Delivery: {ESTIMATED_DELIVERY_MINS}</span>
          </div>
        </div>

        {order && (
          <div className="space-y-2 text-xs text-stone-700">
            <div className="flex items-center gap-1.5 font-medium text-stone-900">
              <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Delivering to: <strong>{order.customer.fullName}</strong> — {order.customer.streetAddress}, {order.customer.deliveryZone}, Quetta</span>
            </div>

            <div className="flex justify-between items-center pt-2 border-t border-stone-200/60 text-sm font-bold text-stone-900">
              <span>Total Paid (COD / Wallet):</span>
              <span className="text-amber-900 text-base">{formatPKR(order.total)}</span>
            </div>
          </div>
        )}
      </div>

      {/* Action CTAs */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <Button
            variant="amber"
            size="lg"
            leftIcon={<MessageCircle className="w-5 h-5 fill-stone-950" />}
            className="w-full font-bold shadow-md"
          >
            Track Order on WhatsApp
          </Button>
        </a>

        <Link href="/" className="w-full sm:w-auto">
          <Button variant="outline" size="lg" className="w-full">
            Back to Home Page
          </Button>
        </Link>
      </div>

    </motion.div>
  );
}

export default function OrderSuccessPage() {
  return (
    <div className="py-16 bg-stone-50/60 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl w-full mx-auto px-4">
        <Suspense fallback={
          <div className="bg-white rounded-3xl p-12 text-center text-stone-500 font-medium">
            Loading order details...
          </div>
        }>
          <OrderSuccessContent />
        </Suspense>
      </div>
    </div>
  );
}
