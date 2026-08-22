'use client';

import React from 'react';
import Link from 'next/link';
import { QUETTA_BAKERY_LOCATION, QUETTA_DELIVERY_ZONES } from '@/lib/deliveryZones';
import { MapPin, Phone, Clock, Mail, Heart, Sparkles, Instagram, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { useUIStore } from '@/store/uiStore';

export const Footer: React.FC = () => {
  const showToast = useUIStore(s => s.showToast);
  const [emailInput, setEmailInput] = React.useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput.trim()) return;
    showToast('Thank you for joining Porto\'s Quetta VIP Bakery Club!', 'success');
    setEmailInput('');
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-amber-600 flex items-center justify-center text-white font-black text-xl shadow-md">
                🍩
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white font-display">
                  PORTO&apos;S
                </span>
                <span className="block text-[10px] font-semibold text-amber-400 tracking-widest uppercase">
                  DONUTS BAKERY • QUETTA
                </span>
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed">
              Quetta&apos;s premier artisanal donut & bakery destination. Crafting gourmet glaze rings, Belgian chocolate cakes, and flaky butter pastries fresh every single morning.
            </p>
            <div className="flex items-center gap-3 pt-2 text-stone-400">
              <a href="#" className="p-2 bg-stone-800 hover:bg-amber-600 hover:text-white rounded-full transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-stone-800 hover:bg-amber-600 hover:text-white rounded-full transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-bold font-display text-base">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/menu" className="hover:text-amber-400 transition-colors">Full Bakery Menu</Link>
              </li>
              <li>
                <Link href="/menu/donuts" className="hover:text-amber-400 transition-colors">Gourmet Donuts</Link>
              </li>
              <li>
                <Link href="/menu/cakes" className="hover:text-amber-400 transition-colors">Celebration Cakes</Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-amber-400 transition-colors">Bakery Locations & Map</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">Our Story & Heritage</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-amber-400 transition-colors">Delivery FAQs</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Quetta Delivery Coverage */}
          <div className="space-y-4">
            <h4 className="text-white font-bold font-display text-base flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              Quetta Delivery Zones
            </h4>
            <p className="text-xs text-stone-400">We deliver exclusively within Quetta city limits:</p>
            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto pr-2">
              {QUETTA_DELIVERY_ZONES.map(zone => (
                <span
                  key={zone}
                  className="text-[11px] bg-stone-800 text-amber-200/90 px-2.5 py-1 rounded-full border border-stone-700/60"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>

          {/* Store Hours & Newsletter */}
          <div className="space-y-4">
            <h4 className="text-white font-bold font-display text-base flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              Opening Hours
            </h4>
            <div className="text-xs text-stone-300 space-y-1 bg-stone-800/60 p-3 rounded-2xl border border-stone-800">
              <p className="font-semibold text-amber-300">{QUETTA_BAKERY_LOCATION.openingHours}</p>
              <p className="text-stone-400">Fresh baking batches at 7:30 AM & 3:00 PM</p>
            </div>

            <div className="pt-2">
              <h5 className="text-xs font-semibold text-stone-200 mb-2">Get Quetta Sweet Offers</h5>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={emailInput}
                  onChange={e => setEmailInput(e.target.value)}
                  className="bg-stone-800 text-white text-xs rounded-xl px-3 py-2 border border-stone-700 w-full focus:outline-none focus:border-amber-500"
                />
                <Button type="submit" variant="amber" size="sm" className="text-xs shrink-0">
                  Join
                </Button>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© 2026 Porto&apos;s Donuts Bakery (Quetta, Pakistan). All rights reserved.</p>
          <p className="flex items-center gap-1">
            Baked with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for the people of Quetta
          </p>
        </div>
      </div>
    </footer>
  );
};
