'use client';

import React from 'react';
import Image from 'next/image';
import { Testimonial } from '@/lib/data/testimonials';
import { Star, Quote, MapPin } from 'lucide-react';

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  return (
    <section className="py-20 bg-amber-50/40 border-b border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-200/60 px-3 py-1 rounded-full">
            Loved By Quetta
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-stone-900 mt-2">
            What Our Customers Say
          </h2>
          <p className="text-sm text-stone-500 mt-1">
            Real feedback from dessert lovers across Jinnah Town, Cantt, Satellite Town & beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-white rounded-3xl p-6 shadow-sm border border-stone-200/80 flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative group"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-300/80 mb-3" />
                
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-stone-700 leading-relaxed italic">
                  &quot;{t.comment}&quot;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-stone-100 flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-stone-200">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs font-bold text-stone-900 font-display truncate">
                    {t.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[11px] text-amber-800">
                    <MapPin className="w-3 h-3 text-amber-600 shrink-0" />
                    <span className="truncate">{t.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
