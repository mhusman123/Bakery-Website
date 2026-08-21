'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

const INSTA_POSTS = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
    likes: '1.4k',
    comments: '84'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600&auto=format&fit=crop',
    likes: '2.1k',
    comments: '142'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=600&auto=format&fit=crop',
    likes: '980',
    comments: '56'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600&auto=format&fit=crop',
    likes: '1.8k',
    comments: '110'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=600&auto=format&fit=crop',
    likes: '3.2k',
    comments: '210'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?q=80&w=600&auto=format&fit=crop',
    likes: '1.1k',
    comments: '73'
  }
];

export const InstagramFeed: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase tracking-widest mb-1">
              <Instagram className="w-4 h-4" />
              <span>@portosdonuts.quetta</span>
            </div>
            <h2 className="text-3xl font-black font-display text-stone-900">
              Follow Our Daily Bakes on Instagram
            </h2>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 text-white font-semibold text-xs px-5 py-2.5 rounded-full shadow-md hover:opacity-90 transition-opacity"
          >
            <Instagram className="w-4 h-4" />
            Follow @portosdonuts.quetta
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTA_POSTS.map(post => (
            <div
              key={post.id}
              className="group relative aspect-square rounded-2xl overflow-hidden bg-stone-100 shadow-sm border border-stone-200/60 cursor-pointer"
            >
              <Image
                src={post.image}
                alt="Porto's Donut photo post"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="200px"
              />
              <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-white text-xs font-bold">
                <span className="flex items-center gap-1">
                  <Heart className="w-4 h-4 fill-white" /> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4 fill-white" /> {post.comments}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
