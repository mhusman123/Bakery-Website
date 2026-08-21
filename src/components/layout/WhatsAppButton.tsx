'use client';

import React from 'react';
import { QUETTA_BAKERY_LOCATION } from '@/lib/deliveryZones';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const message = encodeURIComponent(
    "Hello Porto's Donuts Bakery! I would like to place a fresh bakery order in Quetta."
  );
  const whatsappUrl = `https://wa.me/${QUETTA_BAKERY_LOCATION.whatsapp.replace(/\+/g, '')}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs px-4 py-3 rounded-full shadow-lg shadow-emerald-600/30 transition-all duration-300 hover:scale-105 group cursor-pointer"
      title="Order via WhatsApp in Quetta"
    >
      <div className="relative">
        <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
        <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
      </div>
      <span className="hidden sm:inline font-semibold">Order via WhatsApp</span>
    </a>
  );
};
