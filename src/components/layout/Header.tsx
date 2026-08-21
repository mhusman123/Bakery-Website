'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useUIStore } from '@/store/uiStore';
import { useCartStore } from '@/store/cartStore';
import { ShoppingBag, Search, Menu as MenuIcon, MapPin, Sparkles, PhoneCall } from 'lucide-react';
import { QUETTA_BAKERY_LOCATION } from '@/lib/deliveryZones';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  const toggleCartDrawer = useUIStore(s => s.toggleCartDrawer);
  const openMobileNav = useUIStore(s => s.openMobileNav);
  const itemCount = useCartStore(s => s.getItemCount());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Banner */}
      <div className="bg-stone-900 text-amber-100 text-xs py-1.5 px-4 text-center font-medium flex items-center justify-center gap-3">
        <span className="hidden sm:inline-flex items-center gap-1.5 text-amber-400">
          <MapPin className="w-3.5 h-3.5" /> Quetta Delivery Only
        </span>
        <span className="hidden sm:inline text-stone-600">|</span>
        <span className="flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Fresh Baked Daily • Free Delivery over Rs. 1,500
        </span>
        <span className="hidden md:inline text-stone-600">|</span>
        <span className="hidden md:inline font-bold text-amber-300">
          Use Code: PORTO10 for 10% OFF
        </span>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-stone-200/80 shadow-md py-3'
            : 'bg-white border-stone-100 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Mobile menu trigger */}
          <button
            onClick={openMobileNav}
            className="lg:hidden p-2 text-stone-700 hover:text-amber-700 rounded-xl hover:bg-stone-100 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon className="w-6 h-6" />
          </button>

          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-2xl bg-amber-600 flex items-center justify-center text-white font-black text-xl shadow-md shadow-amber-600/30 group-hover:scale-105 transition-transform">
              🍩
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 font-display">
                  PORTO&apos;S
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full">
                  DONUTS
                </span>
              </div>
              <span className="block text-[10px] font-semibold text-stone-500 tracking-wider uppercase -mt-0.5">
                Quetta • Artisanal Bakery
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-stone-700">
            <Link href="/" className="hover:text-amber-700 transition-colors">
              Home
            </Link>
            <Link href="/menu" className="hover:text-amber-700 transition-colors">
              Full Menu
            </Link>
            <Link href="/menu/donuts" className="hover:text-amber-700 transition-colors">
              Donuts
            </Link>
            <Link href="/menu/cakes" className="hover:text-amber-700 transition-colors">
              Cakes
            </Link>
            <Link href="/about" className="hover:text-amber-700 transition-colors">
              Our Story
            </Link>
            <Link href="/faq" className="hover:text-amber-700 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-amber-700 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Action Icons (Search & Cart) */}
          <div className="flex items-center gap-3">
            <Link
              href="/menu"
              className="p-2.5 text-stone-700 hover:text-amber-700 rounded-full hover:bg-amber-50 transition-colors cursor-pointer hidden sm:flex items-center gap-1.5 text-xs font-medium"
              title="Search bakery menu"
            >
              <Search className="w-5 h-5 text-stone-600" />
              <span className="hidden md:inline">Search</span>
            </Link>

            {/* Cart Button with Count Badge */}
            <button
              onClick={toggleCartDrawer}
              className="relative flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-amber-50 px-4 py-2.5 rounded-full transition-all shadow-md shadow-stone-950/10 active:scale-95 cursor-pointer"
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-bold hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="bg-amber-500 text-stone-950 font-black text-[11px] min-w-[20px] h-[20px] rounded-full flex items-center justify-center px-1 animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
