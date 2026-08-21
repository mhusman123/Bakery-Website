'use client';

import React, { useState, useMemo } from 'react';
import { CategoryId, Product } from '@/types/product';
import { CategoryFilter } from '@/components/menu/CategoryFilter';
import { SearchBar } from '@/components/menu/SearchBar';
import { ProductGrid } from '@/components/menu/ProductGrid';
import { MOCK_PRODUCTS } from '@/data/seed-products';
import { searchProducts } from '@/lib/data/products';
import { useDebounce } from '@/hooks/useDebounce';
import { SlidersHorizontal, Sparkles, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function MenuPage() {
  const [category, setCategory] = useState<CategoryId>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [egglessOnly, setEgglessOnly] = useState(false);
  const [bestsellersOnly, setBestsellersOnly] = useState(false);
  const [sortOrder, setSortOrder] = useState<'default' | 'price-low' | 'price-high' | 'rating'>('default');

  const debouncedQuery = useDebounce(searchQuery, 250);

  const filteredProducts = useMemo(() => {
    let result = searchProducts(debouncedQuery, category);

    if (egglessOnly) {
      result = result.filter(p => p.isEggless);
    }
    if (bestsellersOnly) {
      result = result.filter(p => p.isBestseller);
    }

    if (sortOrder === 'price-low') {
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price-high') {
      result = [...result].sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'rating') {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [debouncedQuery, category, egglessOnly, bestsellersOnly, sortOrder]);

  return (
    <div className="py-10 bg-stone-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Menu Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-200">
            Fresh Quetta Bakery
          </span>
          <h1 className="text-3xl sm:text-5xl font-black font-display text-stone-900 mt-3">
            Our Full Bakery Menu
          </h1>
          <p className="text-sm text-stone-600 mt-2">
            Explore our daily baked selection of gourmet donuts, Belgian chocolate cakes, French pastries, sourdough loaves, and brewed beverages.
          </p>
        </div>

        {/* Search & Category Filter Section */}
        <div className="space-y-6 bg-white p-6 rounded-3xl border border-stone-200/80 shadow-sm mb-10">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 self-end md:self-center">
              <span className="text-xs font-semibold text-stone-500 flex items-center gap-1">
                <SlidersHorizontal className="w-3.5 h-3.5" /> Sort:
              </span>
              <select
                value={sortOrder}
                onChange={e => setSortOrder(e.target.value as any)}
                className="bg-stone-50 border border-stone-200 text-xs font-semibold text-stone-800 rounded-xl px-3 py-2 focus:outline-none focus:border-amber-500 cursor-pointer"
              >
                <option value="default">Default Popularity</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated ★</option>
              </select>
            </div>
          </div>

          <CategoryFilter activeCategory={category} onSelectCategory={setCategory} />

          {/* Quick Tag Filter Toggles */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-100 text-xs">
            <span className="font-semibold text-stone-500 mr-2">Filter Tags:</span>
            <button
              onClick={() => setEgglessOnly(!egglessOnly)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all cursor-pointer font-medium',
                egglessOnly
                  ? 'bg-emerald-100 border-emerald-300 text-emerald-900 font-bold'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
              )}
            >
              🌱 Eggless Only
              {egglessOnly && <Check className="w-3 h-3 text-emerald-700" />}
            </button>

            <button
              onClick={() => setBestsellersOnly(!bestsellersOnly)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 rounded-full border transition-all cursor-pointer font-medium',
                bestsellersOnly
                  ? 'bg-amber-100 border-amber-300 text-amber-900 font-bold'
                  : 'bg-stone-50 border-stone-200 text-stone-600 hover:bg-stone-100'
              )}
            >
              ⭐ Bestsellers
              {bestsellersOnly && <Check className="w-3 h-3 text-amber-700" />}
            </button>

            {(egglessOnly || bestsellersOnly || searchQuery || category !== 'all') && (
              <button
                onClick={() => {
                  setEgglessOnly(false);
                  setBestsellersOnly(false);
                  setSearchQuery('');
                  setCategory('all');
                }}
                className="text-stone-400 hover:text-rose-600 underline ml-auto text-xs cursor-pointer"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between mb-6 px-1">
          <p className="text-xs font-semibold text-stone-500">
            Showing <strong className="text-stone-900 font-bold">{filteredProducts.length}</strong> bakery items
          </p>
        </div>

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} />

      </div>
    </div>
  );
}
