'use client';

import React from 'react';
import Link from 'next/link';
import { Product } from '@/types/product';
import { ProductCard } from '@/components/menu/ProductCard';
import { ArrowRight, Flame } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface FeaturedProductsProps {
  products: Product[];
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-1.5 text-amber-600 font-bold text-xs uppercase tracking-widest mb-1">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
              <span>Quetta Favourites</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display text-stone-900">
              Bestselling Donuts & Treats
            </h2>
            <p className="text-sm text-stone-500 mt-1 max-w-lg">
              Handcrafted every morning in our Shahbaz Town bakery kitchen using raw local milk & imported Belgian cocoa.
            </p>
          </div>

          <Link href="/menu">
            <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
              View Complete Menu
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
