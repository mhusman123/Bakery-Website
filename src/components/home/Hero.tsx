'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Sparkles, MapPin, ShieldCheck, Clock, Star } from 'lucide-react';
import { formatPKR } from '@/lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-amber-500/10 via-amber-100/30 to-white pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Background Drip SVG Accents */}
      <div className="absolute top-0 inset-x-0 h-40 opacity-30 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-full text-amber-300 fill-current">
          <path d="M0,0 C150,90 350,-40 500,70 C650,140 900,10 1200,60 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Quetta Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300/80 px-4 py-1.5 rounded-full text-amber-950 text-xs sm:text-sm font-semibold shadow-xs"
            >
              <MapPin className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Delivering Fresh Daily Across Quetta City</span>
              <span className="bg-amber-600 text-white text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full">
                45-Min Express
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black font-display text-stone-900 tracking-tight leading-[1.1]"
            >
              Quetta&apos;s Softest, <br className="hidden sm:inline" />
              <span className="text-amber-600 underline decoration-amber-300 decoration-wavy">
                Gourmet Donuts
              </span>{' '}
              & Bakery
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Hand-dipped Belgian chocolate glazes, roasted Quetta hazelnuts, flaky French croissants, and custom celebration cakes — baked fresh at 7:30 AM every morning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Link href="/menu">
                <Button
                  variant="amber"
                  size="lg"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto shadow-lg shadow-amber-500/25 py-4 text-base"
                >
                  Order Fresh Now
                </Button>
              </Link>
              <Link href="/menu/donuts">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto py-4 text-base bg-white"
                >
                  Explore Donut Flavors
                </Button>
              </Link>
            </motion.div>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 grid grid-cols-3 gap-3 border-t border-stone-200/80 max-w-lg mx-auto lg:mx-0"
            >
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black font-display text-amber-900">100%</span>
                <span className="text-xs text-stone-500 font-medium">Halal & Fresh</span>
              </div>
              <div className="flex flex-col items-center lg:items-start border-x border-stone-200 px-2">
                <span className="text-xl sm:text-2xl font-black font-display text-amber-900">35-45m</span>
                <span className="text-xs text-stone-500 font-medium">Quetta Express</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-xl sm:text-2xl font-black font-display text-amber-900">4.9 ★</span>
                <span className="text-xs text-stone-500 font-medium">Local Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Featured Donut Image Container */}
            <div className="relative aspect-square w-full max-w-md mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1000&auto=format&fit=crop"
                alt="Quetta Hazelnut Rocher Donut"
                fill
                priority
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs uppercase font-bold tracking-widest text-amber-400 bg-stone-900/80 px-2.5 py-1 rounded-full backdrop-blur-md">
                  Quetta Bestseller
                </span>
                <h3 className="text-xl font-bold font-display mt-2 text-white">
                  Hazelnut Rocher Donut
                </h3>
                <p className="text-xs text-stone-200 mt-0.5 line-clamp-1">
                  Belgian milk chocolate with roasted Quetta hazelnuts
                </p>
              </div>
            </div>

            {/* Floating Card Badge 1: Customer Rating */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-stone-100 flex items-center gap-3 z-20"
            >
              <div className="p-2.5 bg-amber-100 rounded-xl text-amber-700">
                <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <div className="text-xs font-bold text-stone-900">4.9 / 5.0 Rating</div>
                <div className="text-[11px] text-stone-500">500+ Happy Quetta Customers</div>
              </div>
            </motion.div>

            {/* Floating Card Badge 2: Price Tag */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-stone-900 text-white p-4 rounded-2xl shadow-2xl border border-stone-800 z-20"
            >
              <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider">Starting At</div>
              <div className="text-xl font-black font-display text-white">{formatPKR(320)}</div>
              <div className="text-[10px] text-stone-400 mt-0.5">Box of 6 & 12 options</div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
