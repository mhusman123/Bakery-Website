'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export interface ImageGalleryProps {
  images: string[];
  productName: string;
}

export const ImageGallery: React.FC<ImageGalleryProps> = ({ images, productName }) => {
  const [selectedIdx, setSelectedIdx] = useState(0);

  const activeImage = images[selectedIdx] || images[0];

  return (
    <div className="space-y-4">
      {/* Main Preview Box */}
      <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-stone-100 border border-stone-200 shadow-md">
        <Image
          src={activeImage}
          alt={productName}
          fill
          priority
          className="object-cover transition-all duration-300"
          sizes="(max-width: 768px) 100vw, 500px"
        />
      </div>

      {/* Thumbnails list if multiple images exist */}
      {images.length > 1 && (
        <div className="flex items-center gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={cn(
                'relative w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer',
                selectedIdx === idx
                  ? 'border-amber-600 ring-2 ring-amber-600/30 scale-105'
                  : 'border-stone-200 opacity-70 hover:opacity-100'
              )}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                className="object-cover"
                sizes="80px"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
