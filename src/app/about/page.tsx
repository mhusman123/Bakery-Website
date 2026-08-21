import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { QUETTA_BAKERY_LOCATION } from '@/lib/deliveryZones';
import { Award, Heart, ShieldCheck, Sparkles, MapPin, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-12 bg-stone-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Quetta Bakery Heritage
          </span>
          <h1 className="text-4xl sm:text-5xl font-black font-display text-stone-900 mt-3">
            Our Story & Craftsmanship
          </h1>
          <p className="text-base text-stone-600 mt-3 leading-relaxed">
            Bringing world-class gourmet donuts, Belgian chocolate cakes, and flaky French butter pastries to the heart of Quetta city.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black font-display text-stone-900">
              Baked Fresh Every Morning at 7:30 AM
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              Porto&apos;s Donuts Bakery was founded with a single mission: to redefine sweet treats in Balochistan. Located in Jinnah Town, Quetta, our master bakers combine authentic European laminating techniques with locally sourced raw milk, organic cardamom, and premium imported Belgian chocolate.
            </p>
            <p className="text-sm text-stone-600 leading-relaxed">
              Unlike commercial chains that freeze dough, every single donut ring in our kitchen is proofed naturally, fried to golden perfection, and hand-dipped in warm silky glazes right before express delivery.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-stone-100">
              <div className="space-y-1">
                <span className="text-3xl font-black font-display text-amber-700">100%</span>
                <p className="text-xs font-semibold text-stone-700">Halal & Fresh Ingredients</p>
              </div>
              <div className="space-y-1">
                <span className="text-3xl font-black font-display text-amber-700">35-45m</span>
                <p className="text-xs font-semibold text-stone-700">Express Quetta Delivery</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl border-4 border-stone-100">
            <Image
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop"
              alt="Porto's Donut Baker in Quetta"
              fill
              className="object-cover"
              sizes="600px"
            />
          </div>

        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-stone-200 text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-stone-900">Uncompromised Quality</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              We never use artificial shortenings or preservatives. Only pure butter, real cocoa butter chocolate, and local Quetta mountain honey.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-stone-900">100% Local Quetta Focus</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Dedicated exclusively to serving Quetta neighborhoods — from Jinnah Town to Cantt, Satellite Town, Airport Road & Sariab Road.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-stone-200 text-center space-y-3 shadow-xs">
            <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mx-auto">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold font-display text-stone-900">Community First</h3>
            <p className="text-xs text-stone-500 leading-relaxed">
              Any unsold bakery items at the end of the evening are packed safely and donated directly to local Quetta shelters.
            </p>
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="bg-stone-900 text-white rounded-3xl p-10 text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-3xl font-black font-display text-white">Taste the Difference Today</h2>
          <p className="text-sm text-stone-300 max-w-md mx-auto">
            Order your custom box of 6 or 12 gourmet donuts now and experience Quetta&apos;s softest glaze rings.
          </p>
          <Link href="/menu">
            <Button variant="amber" size="lg" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Order Fresh Bakery Box
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
}
