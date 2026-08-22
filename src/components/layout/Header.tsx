'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useUIStore } from '@/store/uiStore';
import { useCartStore } from '@/store/cartStore';
import { ShoppingBag, Search, Menu as MenuIcon, MapPin, Sparkles } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  
  const toggleCartDrawer = useUIStore(s => s.toggleCartDrawer);
  const openMobileNav = useUIStore(s => s.openMobileNav);
  const isMobileNavOpen = useUIStore(s => s.isMobileNavOpen);
  const itemCount = useCartStore(s => s.getItemCount());

  useEffect(() => {
    const handleScroll = () => {
      // Trigger solid state after scrolling 50px
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // When on homepage, at top of the page, and mobile drawer is closed, header is transparent
  const isTransparent = isHome && !isScrolled && !isMobileNavOpen;

  return (
    <header
      className={`w-full transition-all duration-300 ease-in-out z-40 ${
        isHome ? 'fixed top-0 inset-x-0' : 'sticky top-0'
      } ${
        isTransparent
          ? 'bg-transparent border-transparent shadow-none'
          : 'bg-white/95 backdrop-blur-md border-b border-stone-200/80 shadow-md shadow-stone-900/5'
      }`}
    >
      {/* Top Announcement Banner */}
      <div
        className={`text-xs py-1.5 px-4 text-center font-medium transition-colors duration-300 flex items-center justify-center gap-3 ${
          isTransparent
            ? 'bg-black/30 backdrop-blur-xs text-amber-200/90 border-b border-white/10'
            : 'bg-stone-900 text-amber-100'
        }`}
      >
        <span className="hidden sm:inline-flex items-center gap-1.5 text-amber-400">
          <MapPin className="w-3.5 h-3.5" /> Quetta Delivery Only
        </span>
        <span className={isTransparent ? 'hidden sm:inline text-stone-400' : 'hidden sm:inline text-stone-600'}>|</span>
        <span className="flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Fresh Baked Daily • Free Delivery over Rs. 1,500
        </span>
        <span className={isTransparent ? 'hidden md:inline text-stone-400' : 'hidden md:inline text-stone-600'}>|</span>
        <span className="hidden md:inline font-bold text-amber-300">
          Use Code: PORTO10 for 10% OFF
        </span>
      </div>

      {/* Main Navbar */}
      <div
        className={`w-full transition-all duration-300 ${
          isTransparent ? 'py-4 sm:py-5' : 'py-3 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left section: Mobile menu trigger & Brand Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile menu trigger with 44x44px tap target & circular backdrop on transparent */}
            <button
              onClick={openMobileNav}
              className={`lg:hidden w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 ${
                isTransparent
                  ? 'bg-black/25 hover:bg-black/35 active:bg-black/40 text-white backdrop-blur-xs shadow-xs'
                  : 'bg-transparent hover:bg-stone-100 active:bg-stone-200 text-stone-800 hover:text-amber-700'
              }`}
              aria-label="Toggle navigation menu"
            >
              <MenuIcon className={`w-5 h-5 transition-transform stroke-[2.2] ${isTransparent ? 'drop-shadow-xs' : ''}`} />
            </button>

            {/* Brand Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl overflow-hidden shadow-sm shadow-amber-950/20 group-hover:scale-105 transition-transform shrink-0 border border-amber-200/60 bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Porto's Bakery Logo"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-xl sm:text-2xl font-black tracking-tight font-display transition-colors duration-300 ${
                      isTransparent ? 'text-white drop-shadow-md' : 'text-stone-900'
                    }`}
                  >
                    PORTO&apos;S
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-widest bg-amber-100 text-amber-900 px-2 py-0.5 rounded-full shadow-2xs">
                    DONUTS
                  </span>
                </div>
                <span
                  className={`block text-[10px] font-semibold tracking-wider uppercase -mt-0.5 transition-colors duration-300 ${
                    isTransparent ? 'text-amber-200/90 drop-shadow-xs' : 'text-stone-500'
                  }`}
                >
                  Quetta • Artisanal Bakery
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden lg:flex items-center gap-7 text-sm font-semibold transition-colors duration-300 ${
              isTransparent ? 'text-white' : 'text-stone-700'
            }`}
          >
            <Link
              href="/"
              className={isTransparent ? 'hover:text-amber-300 drop-shadow-sm transition-colors' : 'hover:text-amber-700 transition-colors'}
            >
              Home
            </Link>
            <Link
              href="/menu"
              className={isTransparent ? 'hover:text-amber-300 drop-shadow-sm transition-colors' : 'hover:text-amber-700 transition-colors'}
            >
              Full Menu
            </Link>
            <Link
              href="/menu/donuts"
              className={isTransparent ? 'hover:text-amber-300 drop-shadow-sm transition-colors' : 'hover:text-amber-700 transition-colors'}
            >
              Donuts
            </Link>
            <Link
              href="/menu/cakes"
              className={isTransparent ? 'hover:text-amber-300 drop-shadow-sm transition-colors' : 'hover:text-amber-700 transition-colors'}
            >
              Cakes
            </Link>
            <Link
              href="/locations"
              className={isTransparent ? 'hover:text-amber-300 drop-shadow-sm transition-colors' : 'hover:text-amber-700 transition-colors'}
            >
              Locations
            </Link>
            <Link
              href="/about"
              className={isTransparent ? 'hover:text-amber-300 drop-shadow-sm transition-colors' : 'hover:text-amber-700 transition-colors'}
            >
              Our Story
            </Link>
            <Link
              href="/faq"
              className={isTransparent ? 'hover:text-amber-300 drop-shadow-sm transition-colors' : 'hover:text-amber-700 transition-colors'}
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className={isTransparent ? 'hover:text-amber-300 drop-shadow-sm transition-colors' : 'hover:text-amber-700 transition-colors'}
            >
              Contact
            </Link>
          </nav>

          {/* Action Icons (Search & Cart) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Search Button with 44x44px tap target & circular backdrop on transparent */}
            <Link
              href="/menu"
              className={`w-11 h-11 min-w-[44px] min-h-[44px] rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer active:scale-95 ${
                isTransparent
                  ? 'bg-black/25 hover:bg-black/35 active:bg-black/40 text-white backdrop-blur-xs shadow-xs'
                  : 'bg-transparent hover:bg-amber-50 active:bg-amber-100 text-stone-700 hover:text-amber-700'
              }`}
              title="Search bakery menu"
              aria-label="Search bakery menu"
            >
              <Search className={`w-5 h-5 stroke-[2.2] ${isTransparent ? 'drop-shadow-xs' : ''}`} />
            </Link>

            {/* Cart Button with Count Badge - Solid filled in both states, 44px min height */}
            <button
              onClick={toggleCartDrawer}
              className={`relative min-h-[44px] flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 active:scale-95 cursor-pointer font-bold ${
                isTransparent
                  ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-lg shadow-amber-600/30'
                  : 'bg-stone-900 hover:bg-stone-800 text-amber-50 shadow-md shadow-stone-950/10'
              }`}
              aria-label="Open Shopping Cart"
            >
              <ShoppingBag className="w-4 h-4 text-amber-300 stroke-[2.2]" />
              <span className="text-xs font-bold hidden sm:inline">Cart</span>
              {itemCount > 0 && (
                <span className="bg-amber-400 text-stone-950 font-black text-[11px] min-w-[20px] h-[20px] rounded-full flex items-center justify-center px-1 animate-pulse shadow-xs">
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
