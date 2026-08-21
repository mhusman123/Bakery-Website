'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Category } from '@/types/product';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface CategoryShowcaseProps {
  categories: Category[];
}

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ categories }) => {
  return (
    <section className="py-16 bg-stone-50/70 border-y border-stone-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            Fresh From Our Ovens
          </span>
          <h2 className="text-3xl sm:text-4xl font-black font-display text-stone-900 mt-2">
            Explore Bakery Categories
          </h2>
          <p className="text-sm text-stone-500 mt-1">
            From warm glazed donuts to 36-hour fermented sourdoughs and brewed Karak Chai.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
            >
              <Link
                href={`/menu/${cat.id}`}
                className="group relative block aspect-4/3 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-stone-200/80"
              >
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <h3 className="text-xl font-bold font-display group-hover:text-amber-300 transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-stone-300 line-clamp-1 mt-1 font-light">
                      {cat.description}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-amber-500 group-hover:text-stone-950 transition-colors shrink-0">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
