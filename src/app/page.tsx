import React from 'react';
import { Hero } from '@/components/home/Hero';
import { CategoryShowcase } from '@/components/home/CategoryShowcase';
import { FeaturedProducts } from '@/components/home/FeaturedProducts';
import { AboutTeaser } from '@/components/home/AboutTeaser';
import { Testimonials } from '@/components/home/Testimonials';
import { InstagramFeed } from '@/components/home/InstagramFeed';
import { NewsletterSignup } from '@/components/home/NewsletterSignup';
import { getBestsellers, getCategories } from '@/lib/data/products';
import { getTestimonials } from '@/lib/data/testimonials';

export default async function HomePage() {
  const [bestsellers, categories, testimonials] = await Promise.all([
    getBestsellers(),
    getCategories(),
    getTestimonials()
  ]);

  return (
    <div>
      <Hero />
      <CategoryShowcase categories={categories} />
      <FeaturedProducts products={bestsellers} />
      <AboutTeaser />
      <Testimonials testimonials={testimonials} />
      <InstagramFeed />
      <NewsletterSignup />
    </div>
  );
}
