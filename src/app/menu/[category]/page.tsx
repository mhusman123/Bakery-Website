import React from 'react';
import { getProducts, getCategories } from '@/lib/data/products';
import { CategoryId } from '@/types/product';
import { ProductCard } from '@/components/menu/ProductCard';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = await params;
  const categoryId = resolvedParams.category as CategoryId;
  const categories = await getCategories();
  
  const currentCat = categories.find(c => c.id === categoryId);
  if (!currentCat && categoryId !== 'all') {
    notFound();
  }

  const products = await getProducts(categoryId);

  return (
    <div className="py-10 bg-stone-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link href="/menu" className="inline-flex items-center gap-1 text-xs font-semibold text-stone-500 hover:text-amber-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Full Menu
        </Link>

        <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm mb-10 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3 py-1 rounded-full">
            Bakery Category
          </span>
          <h1 className="text-3xl sm:text-4xl font-black font-display text-stone-900 mt-2">
            {currentCat?.name || 'All Bakery Products'}
          </h1>
          <p className="text-sm text-stone-600 mt-1 max-w-md mx-auto">
            {currentCat?.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </div>
  );
}
