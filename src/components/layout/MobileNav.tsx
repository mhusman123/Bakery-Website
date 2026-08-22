'use client';

import React from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { useUIStore } from '@/store/uiStore';
import { X, ShoppingBag, Phone, MapPin, Sparkles } from 'lucide-react';
import { QUETTA_BAKERY_LOCATION } from '@/lib/deliveryZones';

export const MobileNav: React.FC = () => {
  const isOpen = useUIStore(s => s.isMobileNavOpen);
  const closeMobileNav = useUIStore(s => s.closeMobileNav);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Full Menu', href: '/menu' },
    { label: 'Gourmet Donuts', href: '/menu/donuts' },
    { label: 'Artisan Cakes', href: '/menu/cakes' },
    { label: 'Bakery Locations', href: '/locations' },
    { label: 'Our Quetta Story', href: '/about' },
    { label: 'FAQs', href: '/faq' },
    { label: 'Contact Us', href: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMobileNav}
            className="fixed inset-0 bg-stone-950/60 backdrop-blur-xs"
          />

          <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="w-screen max-w-xs bg-stone-900 text-stone-100 shadow-2xl flex flex-col justify-between p-6"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-stone-800">
                  <Link href="/" onClick={closeMobileNav} className="flex items-center gap-2">
                    <span className="text-2xl font-black font-display tracking-tight text-amber-400">
                      PORTO&apos;S
                    </span>
                    <span className="text-xs bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded-full border border-amber-500/30">
                      Quetta
                    </span>
                  </Link>
                  <button
                    onClick={closeMobileNav}
                    className="p-2 text-stone-400 hover:text-white rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-2 mt-6">
                  {navLinks.map(link => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={closeMobileNav}
                      className="px-4 py-3 rounded-2xl font-medium text-stone-200 hover:text-amber-400 hover:bg-stone-800/60 transition-all text-base"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-stone-800 space-y-3 text-xs text-stone-400">
                <div className="flex items-center gap-2 text-amber-300">
                  <MapPin className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>Jinnah Town Main Blvd, Quetta</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0 text-amber-400" />
                  <span>{QUETTA_BAKERY_LOCATION.phone}</span>
                </div>
                <p className="text-[11px] text-stone-500 pt-2">
                  © 2026 Porto&apos;s Donuts Bakery Quetta.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
