'use client';

import React from 'react';
import { Product } from '@/types/product';
import { ProductCard } from './ProductCard';
import { Skeleton } from '@/components/ui/Skeleton';

export interface ProductGridProps {
  products: Product[];
  isLoading?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, idx) => (
          <div key={idx} className="bg-white rounded-3xl p-4 border border-stone-200 space-y-4">
            <Skeleton className="h-48 w-full rounded-2xl" />
            <Skeleton className="h-5 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <div className="flex justify-between items-center pt-2">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-9 w-24 rounded-full" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-16 px-4 bg-white rounded-3xl border border-stone-200/80 my-4">
        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3 text-amber-700 text-2xl">
          🔍
        </div>
        <h3 className="text-lg font-bold text-stone-900 font-display">No matching bakery items</h3>
        <p className="text-sm text-stone-500 max-w-sm mx-auto mt-1">
          Try clearing your search query or choosing another category filter.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
