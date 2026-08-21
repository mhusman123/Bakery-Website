import { MOCK_CATEGORIES, MOCK_PRODUCTS } from '@/data/seed-products';
import { Category, CategoryId, Product } from '@/types/product';
import Fuse from 'fuse.js';

export async function getCategories(): Promise<Category[]> {
  return MOCK_CATEGORIES;
}

export async function getProducts(category?: CategoryId): Promise<Product[]> {
  if (!category || category === 'all') {
    return MOCK_PRODUCTS;
  }
  return MOCK_PRODUCTS.filter(p => p.category === category);
}

export async function getBestsellers(): Promise<Product[]> {
  return MOCK_PRODUCTS.filter(p => p.isBestseller);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const found = MOCK_PRODUCTS.find(p => p.slug === slug);
  return found || null;
}

export async function getRelatedProducts(currentSlug: string, category: CategoryId, limit = 4): Promise<Product[]> {
  return MOCK_PRODUCTS
    .filter(p => p.slug !== currentSlug && (p.category === category || p.isBestseller))
    .slice(0, limit);
}

/**
 * Client-side search using Fuse.js
 */
export function searchProducts(query: string, category?: CategoryId): Product[] {
  let list = MOCK_PRODUCTS;
  if (category && category !== 'all') {
    list = list.filter(p => p.category === category);
  }

  if (!query.trim()) {
    return list;
  }

  const fuse = new Fuse(list, {
    keys: ['name', 'tagline', 'description', 'ingredients'],
    threshold: 0.4,
    ignoreLocation: true,
  });

  return fuse.search(query).map(result => result.item);
}
