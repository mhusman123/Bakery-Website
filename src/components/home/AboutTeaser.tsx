'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { ArrowRight, CheckCircle2, Heart, Award, Sparkles } from 'lucide-react';
import { QUETTA_BAKERY_LOCATION } from '@/lib/deliveryZones';

export const AboutTeaser: React.FC = () => {
  return (
    <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Collage */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop"
                  alt="Baker kneading fresh dough in Quetta"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
              <div className="bg-amber-500/10 border border-amber-500/30 p-4 rounded-3xl text-center">
                <span className="text-2xl font-black font-display text-amber-400">7:30 AM</span>
                <p className="text-xs text-stone-300 font-medium">Daily Morning Batch</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="bg-stone-800 p-5 rounded-3xl border border-stone-700">
                <Award className="w-8 h-8 text-amber-400 mb-2" />
                <h4 className="font-bold text-sm text-white font-display">Pure Ingredients</h4>
                <p className="text-xs text-stone-400 mt-1">Balochistan pistachios & imported Belgian dark cocoa</p>
              </div>
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden border-2 border-stone-800 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop"
                  alt="Donut Glaze Crafting"
                  fill
                  className="object-cover"
                  sizes="300px"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Our Story in Quetta
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white leading-tight">
              Baking Happiness into Every Glaze Ring
            </h2>

            <p className="text-stone-300 text-base leading-relaxed">
              Founded on the belief that Quetta deserves world-class gourmet desserts, Porto&apos;s Donuts Bakery brings together traditional Pakistani hospitality with artisanal European baking techniques.
            </p>

            <div className="space-y-3 pt-2 text-sm text-stone-200">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Zero artificial preservatives — everything made fresh daily</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Quetta-exclusive neighborhood delivery in insulated warm boxes</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                <span>Custom gift boxes for weddings, birthdays & corporate events</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link href="/about">
                <Button variant="amber" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Read Our Full Story
                </Button>
              </Link>
              <Link href="/locations">
                <Button variant="outline" size="lg" className="border-stone-700 text-stone-200 hover:bg-stone-800">
                  Store Locations & Map
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
