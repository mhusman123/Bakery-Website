'use client';

import React from 'react';
import Image from 'next/image';
import { CartItem as CartItemType } from '@/types/order';
import { useCartStore } from '@/store/cartStore';
import { formatPKR } from '@/lib/utils';
import { Plus, Minus, Trash2 } from 'lucide-react';

export interface CartItemProps {
  item: CartItemType;
}

export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const updateQuantity = useCartStore(s => s.updateQuantity);
  const removeItem = useCartStore(s => s.removeItem);

  return (
    <div className="flex gap-3.5 p-3.5 bg-stone-50 rounded-2xl border border-stone-100/80 transition-all hover:bg-amber-50/30">
      <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-stone-100 border border-stone-200/50">
        <Image
          src={item.product.images[0]}
          alt={item.product.name}
          fill
          className="object-cover"
          sizes="80px"
        />
      </div>

      <div className="flex flex-col justify-between flex-1 min-w-0">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-sm font-semibold text-stone-900 line-clamp-1">
              {item.product.name}
            </h4>
            <button
              onClick={() => removeItem(item.id)}
              className="text-stone-400 hover:text-rose-600 transition-colors p-1 cursor-pointer"
              title="Remove item"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Selected options summary */}
          {item.selectedOptions.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1">
              {item.selectedOptions.map((so, idx) => (
                <span key={idx} className="text-[10px] bg-white border border-stone-200 px-1.5 py-0.5 rounded-md text-stone-600 font-medium">
                  {so.option.name}
                </span>
              ))}
            </div>
          )}

          {item.specialInstructions && (
            <p className="text-[11px] text-amber-800 italic mt-1 line-clamp-1">
              &quot;{item.specialInstructions}&quot;
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-2 pt-1 border-t border-stone-200/40">
          <span className="text-sm font-bold text-amber-900">
            {formatPKR(item.totalPrice)}
          </span>

          <div className="flex items-center gap-1.5 bg-white border border-stone-200 rounded-full px-2 py-0.5 shadow-xs">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="text-stone-600 hover:text-stone-900 p-0.5 cursor-pointer"
            >
              <Minus className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs font-semibold px-1.5 text-stone-800">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="text-stone-600 hover:text-stone-900 p-0.5 cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
