import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  Truck, 
  ShoppingBag, 
  Sparkles, 
  ExternalLink,
  Navigation,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { QUETTA_MAIN_LOCATION, CORE_QUETTA_COVERAGE_ZONES } from '@/lib/data/location';
import { QUETTA_DELIVERY_ZONES, ESTIMATED_DELIVERY_MINS } from '@/lib/deliveryZones';

export const metadata: Metadata = {
  title: "Locations & Quetta Store | Porto's Donuts Bakery",
  description: "Visit Porto's Donuts Bakery in Jinnah Town, Quetta. Order fresh gourmet donuts, artisan cakes, and pastries for express delivery or store pickup.",
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] text-stone-900 pb-24">
      
      {/* Top Banner / Breadcrumb Bar */}
      <div className="bg-stone-900 text-amber-100 text-xs py-2 px-4 text-center font-medium">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>Proudly Serving Quetta City • 100% Fresh Daily Artisanal Baking</span>
        </div>
      </div>

      {/* Main Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 text-center">
        <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-700 bg-amber-100/80 px-3.5 py-1 rounded-full border border-amber-300/60 inline-block mb-3">
          Our Bakery Store
        </span>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black font-display tracking-tight text-amber-600 uppercase drop-shadow-xs">
          LOCATIONS
        </h1>
        <p className="mt-3 text-sm sm:text-base text-stone-600 max-w-xl mx-auto leading-relaxed">
          Experience our artisanal warm bakes in person or get them delivered anywhere within Quetta city limits in 35–45 minutes.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Row — Two Side-by-Side Ordering Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Card 1: Order for Delivery */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-2">
                <Truck className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-stone-900">
                Order for Delivery
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Delivered fresh to your door, anywhere in Quetta. Warm donuts, packaged cakes, and fresh brews in 35–45 minutes.
              </p>
            </div>
            
            <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between gap-3">
              <Link 
                href="/menu" 
                className="w-full inline-flex items-center justify-center bg-[#3E2723] hover:bg-[#2B1B17] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm transition-all active:scale-[0.98]"
              >
                ORDER DELIVERY
              </Link>
            </div>
          </div>

          {/* Card 2: Order for Pickup */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-stone-200/80 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center mb-2">
                <ShoppingBag className="w-6 h-6" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black font-display uppercase tracking-tight text-stone-900">
                Order for Pickup
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Skip the wait — order ahead online and pick up your fresh order in-store at Jinnah Town, Quetta.
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-stone-100 flex items-center justify-between gap-3">
              <Link 
                href="/menu" 
                className="w-full inline-flex items-center justify-center bg-[#3E2723] hover:bg-[#2B1B17] text-white font-bold text-xs sm:text-sm uppercase tracking-wider px-6 py-3.5 rounded-xl shadow-sm transition-all active:scale-[0.98]"
              >
                ORDER PICKUP
              </Link>
            </div>
          </div>

        </div>

        {/* Detailed Single Location Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-200/80 overflow-hidden">
          
          {/* Location Details Header */}
          <div className="p-6 sm:p-8 lg:p-10 space-y-8">
            
            {/* Top Identity Block with Circular Photo */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-stone-100">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-amber-500/40 shadow-sm shrink-0">
                <Image
                  src={QUETTA_MAIN_LOCATION.image}
                  alt="Porto's Quetta Storefront"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-stone-900">
                    {QUETTA_MAIN_LOCATION.displayName}
                  </h2>
                  <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-emerald-300/50">
                    Open Now
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-stone-500 font-medium">
                  {QUETTA_MAIN_LOCATION.landmark}
                </p>
              </div>
            </div>

            {/* Info Grid (Address, Phone, WhatsApp, Hours) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
              
              {/* Left Column: Contact & Address */}
              <div className="space-y-5">
                
                {/* Street Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider text-amber-900 mb-1">
                      Store Address
                    </h3>
                    <p className="text-stone-700 leading-relaxed font-medium">
                      {QUETTA_MAIN_LOCATION.address}
                    </p>
                    <p className="text-stone-500 text-xs mt-0.5">
                      {QUETTA_MAIN_LOCATION.city}, {QUETTA_MAIN_LOCATION.province}, {QUETTA_MAIN_LOCATION.country}
                    </p>
                    <a
                      href={QUETTA_MAIN_LOCATION.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 underline mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" /> Get Directions in Google Maps
                    </a>
                  </div>
                </div>

                {/* Phone Link */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider text-amber-900 mb-1">
                      Direct Phone
                    </h3>
                    <a 
                      href={`tel:${QUETTA_MAIN_LOCATION.phoneTel}`}
                      className="text-stone-800 hover:text-amber-700 font-bold text-base transition-colors"
                    >
                      {QUETTA_MAIN_LOCATION.phone}
                    </a>
                    <p className="text-stone-500 text-xs mt-0.5">
                      Available daily for inquiries & custom cake consultations
                    </p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider text-emerald-900 mb-1">
                      WhatsApp Quick Order
                    </h3>
                    <a
                      href={QUETTA_MAIN_LOCATION.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-xl transition-all shadow-xs"
                    >
                      <MessageCircle className="w-3.5 h-3.5" /> Chat & Order on WhatsApp
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Column: Timings & Ordering Policies */}
              <div className="space-y-5 bg-stone-50/80 p-5 sm:p-6 rounded-2xl border border-stone-200/60">
                
                {/* Dine-In / Store Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider mb-0.5">
                      Dine-in & Storefront Hours
                    </h3>
                    <p className="text-stone-800 font-semibold">
                      {QUETTA_MAIN_LOCATION.dineInHours}
                    </p>
                  </div>
                </div>

                {/* Delivery Hours */}
                <div className="flex items-start gap-3">
                  <Truck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider mb-0.5">
                      Quetta Delivery Hours
                    </h3>
                    <p className="text-stone-800 font-semibold">
                      {QUETTA_MAIN_LOCATION.deliveryHours}
                    </p>
                  </div>
                </div>

                {/* Preorder Pickup Hours */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-stone-900 text-xs uppercase tracking-wider mb-0.5">
                      Daily Preorder Pickup
                    </h3>
                    <p className="text-stone-800 font-semibold">
                      {QUETTA_MAIN_LOCATION.preorderPickupHours}
                    </p>
                  </div>
                </div>

                {/* Online Ordering Cutoff Note */}
                <div className="pt-2 border-t border-stone-200">
                  <div className="flex items-center gap-1.5 text-xs text-amber-900 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{QUETTA_MAIN_LOCATION.onlineOrderingCutoff}</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Action CTA Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Link 
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-[#3E2723] hover:bg-[#2B1B17] text-white font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl shadow-md transition-all active:scale-[0.98]"
              >
                ORDER PICKUP
              </Link>
              <Link 
                href="/menu"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-xl border border-amber-300/80 transition-all"
              >
                View Full Menu
              </Link>
            </div>

          </div>

          {/* Embedded Google Map */}
          <div className="border-t border-stone-200 bg-stone-100">
            <div className="px-6 py-3 bg-stone-100 text-xs font-semibold text-stone-500 uppercase tracking-wider flex items-center justify-between border-b border-stone-200">
              <span>Interactive Store Map • Jinnah Town, Quetta</span>
              <a 
                href={QUETTA_MAIN_LOCATION.googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-amber-700 hover:underline inline-flex items-center gap-1"
              >
                Open in App <ExternalLink className="w-3 h-3" />
              </a>
            </div>
            <div className="h-80 sm:h-96 w-full relative">
              <iframe
                src={QUETTA_MAIN_LOCATION.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Porto's Donuts Bakery Quetta Location"
                className="w-full h-full filter contrast-105"
              />
            </div>
          </div>

        </div>

        {/* Delivery Areas We Cover Section */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-sm border border-stone-200/80 space-y-6">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-100 px-3 py-1 rounded-full uppercase tracking-wider">
              <Truck className="w-3.5 h-3.5 text-amber-700" />
              Quetta City Limits Only
            </div>
            <h2 className="text-2xl sm:text-3xl font-black font-display uppercase tracking-tight text-stone-900">
              Delivery Areas We Cover
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              We deliver fresh batches exclusively within Quetta city with a guaranteed {ESTIMATED_DELIVERY_MINS} transit window. Check your neighborhood below before ordering:
            </p>
          </div>

          {/* Pill/Tag List of Covered Quetta Zones */}
          <div className="flex flex-wrap gap-2.5 pt-2">
            {CORE_QUETTA_COVERAGE_ZONES.map((zone) => (
              <div
                key={zone}
                className="inline-flex items-center gap-2 bg-[#FAF7F2] border border-amber-200/80 text-stone-800 hover:border-amber-400 text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-2xs"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{zone}</span>
              </div>
            ))}
          </div>

          {/* Additional Quetta Zones */}
          <div className="pt-4 border-t border-stone-100">
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2">
              Also Serving Adjacent Areas:
            </h3>
            <div className="flex flex-wrap gap-2 text-xs text-stone-600">
              {QUETTA_DELIVERY_ZONES.filter(z => !CORE_QUETTA_COVERAGE_ZONES.includes(z as any)).map(zone => (
                <span key={zone} className="bg-stone-100 text-stone-700 px-3 py-1 rounded-lg border border-stone-200">
                  {zone}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Notice */}
          <div className="bg-amber-500/10 border border-amber-400/40 rounded-xl p-4 flex items-start gap-3 text-xs sm:text-sm text-amber-950">
            <Sparkles className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Not sure if your address is covered?</span> Message us directly on WhatsApp at <a href={QUETTA_MAIN_LOCATION.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline text-amber-800">{QUETTA_MAIN_LOCATION.whatsapp}</a> and our delivery dispatch team will confirm immediately!
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
