'use client';

/**
 * STOCK VIDEO SOURCE ATTRIBUTION:
 * - Stock Source: Pexels Royalty-Free Video #5586616 / Pexels License (Commercial Use Allowed, No Attribution Required)
 * - Video Theme: Gourmet Bakery, Fresh Donut Glazing & Pastry Craftsmanship
 * - Local Video Asset: /videos/hero-bakery.mp4 (Muted, H.264, continuous seamless loop)
 * - Poster / Fallback Image: /images/hero/hero-fallback.jpg (High-Res Glazed Donut)
 * - Accessibility: Native HTML5 video with autoPlay, muted, loop, playsInline, real HTML text overlay, and prefers-reduced-motion support.
 */

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, MapPin, Sparkles, Star, Award, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Detect OS prefers-reduced-motion setting for accessibility
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);

    // Force video playback & loop trigger
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const handleVideoEnded = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] lg:h-[88vh] flex items-center justify-center overflow-hidden bg-stone-950">
      
      {/* Background Video & Fallback Poster Container */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {!prefersReducedMotion ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            onEnded={handleVideoEnded}
            poster="/images/hero/hero-fallback.jpg"
            className="absolute inset-0 w-full h-full object-cover scale-105 filter brightness-95"
          >
            <source src="/videos/hero-bakery.mp4" type="video/mp4" />
            {/* Fallback image if video fails to play */}
            <Image
              src="/images/hero/hero-fallback.jpg"
              alt="Porto's Donut Bakery Hero"
              fill
              priority
              className="object-cover"
            />
          </video>
        ) : (
          <Image
            src="/images/hero/hero-fallback.jpg"
            alt="Porto's Donut Bakery Hero Fallback"
            fill
            priority
            className="object-cover"
          />
        )}

        {/* Dark Overlay (40% - 55% gradient opacity for maximum text contrast) */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/50 to-stone-950/60 backdrop-blur-[1px]" />
      </div>

      {/* Layered Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white space-y-6">
        
        {/* Quetta Location & Express Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-400/40 px-4 py-1.5 rounded-full text-amber-200 text-xs sm:text-sm font-semibold shadow-lg"
        >
          <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Delivering Fresh Daily Across Quetta City</span>
          <span className="bg-amber-500 text-stone-950 text-[10px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full">
            45-Min Express
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-[1.15] drop-shadow-md"
        >
          Baking Quetta&apos;s <br className="hidden sm:inline" />
          <span className="text-amber-400 underline decoration-amber-500/60 decoration-wavy">
            Memories
          </span>
        </motion.h1>

        {/* Subheading (Since 2019 & Description) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2 max-w-2xl mx-auto"
        >
          <p className="text-amber-300 font-bold uppercase tracking-widest text-xs sm:text-sm">
            ✦ Since 2019 • Jinnah Town, Quetta ✦
          </p>
          <p className="text-stone-200 text-base sm:text-lg font-normal leading-relaxed drop-shadow-sm">
            Hand-dipped Belgian chocolate glazes, roasted Balochistan pistachios, flaky French butter croissants & specialty cold brews — baked fresh every morning at 7:30 AM.
          </p>
        </motion.div>

        {/* Action CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <Link href="/menu">
            <Button
              variant="amber"
              size="lg"
              rightIcon={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto shadow-xl shadow-amber-500/30 py-4 px-8 text-base font-bold"
            >
              Order Now
            </Button>
          </Link>
          <Link href="/menu/donuts">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto py-4 px-8 text-base bg-stone-900/60 border-stone-400 text-white hover:bg-stone-800 backdrop-blur-md"
            >
              Explore Donut Flavors
            </Button>
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="pt-8 grid grid-cols-3 gap-4 border-t border-stone-700/60 max-w-md mx-auto text-xs text-stone-300"
        >
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl font-extrabold text-amber-400 font-display">100%</span>
            <span className="text-stone-300 text-[11px]">Halal & Fresh</span>
          </div>
          <div className="flex flex-col items-center border-x border-stone-700/60 px-2">
            <span className="text-lg sm:text-xl font-extrabold text-amber-400 font-display">35-45m</span>
            <span className="text-stone-300 text-[11px]">Quetta Express</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-lg sm:text-xl font-extrabold text-amber-400 font-display">4.9 ★</span>
            <span className="text-stone-300 text-[11px]">500+ Reviews</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
