'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { formatPKR } from '@/lib/utils';
import { useCart } from '@/hooks/useCart';
import { Star, Plus, Eye, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isHovered, setIsHovered] = useState(false);

  const hasOptions = product.customizations && product.customizations.length > 0;

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (hasOptions) {
      // If product has options, navigate to details page so user can choose option
      window.location.href = `/product/${product.slug}`;
    } else {
      addToCart(product, 1, [], '', true);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-white rounded-3xl overflow-hidden border border-stone-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        {/* Product Image Box */}
        <div className="relative aspect-4/3 w-full overflow-hidden bg-stone-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            {product.isBestseller && (
              <Badge variant="bestseller" size="sm">
                ⭐ Bestseller
              </Badge>
            )}
            {product.isNew && (
              <Badge variant="new" size="sm">
                ✨ New
              </Badge>
            )}
            {product.isEggless && (
              <Badge variant="eggless" size="sm">
                🌱 Eggless
              </Badge>
            )}
          </div>

          {/* Quick View link overlay */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
            <Link
              href={`/product/${product.slug}`}
              className="w-full bg-white/95 backdrop-blur-md text-stone-900 text-xs font-semibold py-2 px-3 rounded-full text-center flex items-center justify-center gap-1.5 shadow-md hover:bg-amber-50"
            >
              <Eye className="w-3.5 h-3.5 text-amber-600" />
              View Details & Options
            </Link>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-5">
          <div className="flex items-center justify-between gap-2 mb-1.5 text-xs text-stone-500">
            <div className="flex items-center gap-1 text-amber-600 font-medium">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{product.rating}</span>
              <span className="text-stone-400">({product.reviewCount})</span>
            </div>
            {product.prepTimeMinutes && (
              <span className="text-[11px] bg-stone-100 px-2 py-0.5 rounded-full font-medium text-stone-600">
                ⚡ {product.prepTimeMinutes}m prep
              </span>
            )}
          </div>

          <Link href={`/product/${product.slug}`} className="block">
            <h3 className="font-bold text-stone-900 text-base font-display group-hover:text-amber-700 transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-stone-500 mt-1 line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>
      </div>

      {/* Card Footer Price & Action */}
      <div className="px-5 pb-5 pt-0 flex items-center justify-between mt-2">
        <div>
          <span className="text-xs text-stone-400 font-medium block text-[10px]">Starting from</span>
          <span className="text-lg font-black text-amber-950 font-display">
            {formatPKR(product.price)}
          </span>
        </div>

        <Button
          onClick={handleQuickAdd}
          variant="amber"
          size="sm"
          leftIcon={<Plus className="w-4 h-4" />}
          className="shadow-sm hover:shadow-md"
        >
          {hasOptions ? 'Select Box' : 'Add'}
        </Button>
      </div>
    </motion.div>
  );
};
