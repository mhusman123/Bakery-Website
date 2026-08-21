'use client';

import React from 'react';
import { CategoryId } from '@/types/product';
import { cn } from '@/lib/utils';

export interface CategoryFilterProps {
  activeCategory: CategoryId;
  onSelectCategory: (category: CategoryId) => void;
}

const CATEGORY_ITEMS: { id: CategoryId; label: string; icon: string }[] = [
  { id: 'all', label: 'All Bakery Items', icon: '✨' },
  { id: 'donuts', label: 'Gourmet Donuts', icon: '🍩' },
  { id: 'cakes', label: 'Artisan Cakes', icon: '🎂' },
  { id: 'pastries', label: 'Flaky Pastries', icon: '🥐' },
  { id: 'breads', label: 'Fresh Breads', icon: '🍞' },
  { id: 'beverages', label: 'Craft Beverages', icon: '☕' },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
      {CATEGORY_ITEMS.map(item => {
        const isActive = activeCategory === item.id;
        return (
          <button
            key={item.id}
            onClick={() => onSelectCategory(item.id)}
            className={cn(
              'flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 cursor-pointer select-none border',
              isActive
                ? 'bg-amber-600 text-white border-amber-600 shadow-md shadow-amber-600/25 scale-[1.02]'
                : 'bg-white text-stone-700 border-stone-200 hover:border-amber-400 hover:bg-amber-50/50'
            )}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};
