'use client';

import React, { useState, useEffect } from 'react';
import { notFound, useParams } from 'next/navigation';
import Link from 'next/link';
import { getProductBySlug, getRelatedProducts } from '@/lib/data/products';
import { Product, ProductOption } from '@/types/product';
import { SelectedOption } from '@/types/order';
import { ImageGallery } from '@/components/product/ImageGallery';
import { ProductCard } from '@/components/menu/ProductCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { formatPKR } from '@/lib/utils';
import { useCart } from '@/hooks/useCart';
import { Star, ShoppingBag, Plus, Minus, ArrowLeft, Clock, ShieldCheck, Heart, Truck, Sparkles } from 'lucide-react';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<Record<string, ProductOption>>({});
  const [specialInstructions, setSpecialInstructions] = useState('');

  const { addToCart } = useCart();

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const p = await getProductBySlug(slug);
      if (p) {
        setProduct(p);
        // Pre-select popular options if available
        if (p.customizations) {
          const defaults: Record<string, ProductOption> = {};
          p.customizations.forEach(grp => {
            const defaultOpt = grp.options.find(o => o.popular) || grp.options[0];
            if (defaultOpt) defaults[grp.id] = defaultOpt;
          });
          setSelectedOptions(defaults);
        }

        const rel = await getRelatedProducts(slug, p.category, 4);
        setRelated(rel);
      }
      setLoading(false);
    }
    loadData();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-20 text-center text-stone-500">
        <div className="w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm font-medium">Loading freshly baked item details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold font-display text-stone-900">Bakery Item Not Found</h2>
        <p className="text-sm text-stone-500 mt-2">The donut or pastry you are looking for does not exist.</p>
        <Link href="/menu" className="mt-4 inline-block">
          <Button variant="primary">Back to Menu</Button>
        </Link>
      </div>
    );
  }

  // Calculate dynamic unit price based on selected customization options
  const optionModifiersTotal = Object.values(selectedOptions).reduce(
    (sum, opt) => sum + (opt?.priceModifier || 0),
    0
  );
  const unitPrice = product.price + optionModifiersTotal;
  const totalPrice = unitPrice * quantity;

  const handleSelectOption = (groupId: string, option: ProductOption) => {
    setSelectedOptions(prev => ({
      ...prev,
      [groupId]: option
    }));
  };

  const handleAdd = () => {
    const optionsList: SelectedOption[] = [];
    if (product.customizations) {
      product.customizations.forEach(grp => {
        const selected = selectedOptions[grp.id];
        if (selected) {
          optionsList.push({
            groupId: grp.id,
            groupTitle: grp.title,
            option: selected
          });
        }
      });
    }

    addToCart(product, quantity, optionsList, specialInstructions, true);
  };

  return (
    <div className="py-10 bg-stone-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link href="/menu" className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-amber-700 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Full Menu
        </Link>

        {/* Main Product Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Gallery */}
            <div className="lg:col-span-6">
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Right: Info & Customization */}
            <div className="lg:col-span-6 space-y-6">
              
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  {product.isBestseller && <Badge variant="bestseller">⭐ Quetta Bestseller</Badge>}
                  {product.isNew && <Badge variant="new">✨ New Recipe</Badge>}
                  {product.isEggless && <Badge variant="eggless">🌱 Eggless</Badge>}
                  {product.isHalal && <Badge variant="halal"> Halal Certified</Badge>}
                </div>

                <h1 className="text-2xl sm:text-4xl font-black font-display text-stone-900 leading-tight">
                  {product.name}
                </h1>
                
                <p className="text-sm font-medium text-amber-800 mt-1">
                  {product.tagline}
                </p>

                <div className="flex items-center gap-3 mt-3 text-xs text-stone-500">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-stone-400 font-normal">({product.reviewCount} reviews)</span>
                  </div>
                  <span>•</span>
                  {product.prepTimeMinutes && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      Fresh Batch Prep: {product.prepTimeMinutes} mins
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed border-t border-stone-100 pt-4">
                {product.description}
              </p>

              {/* Dynamic Customization Groups (e.g. Box Size, Glaze topping) */}
              {product.customizations && product.customizations.length > 0 && (
                <div className="space-y-4 pt-2">
                  {product.customizations.map(grp => (
                    <div key={grp.id} className="space-y-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-stone-800">
                        {grp.title}
                      </label>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {grp.options.map(opt => {
                          const isSelected = selectedOptions[grp.id]?.id === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => handleSelectOption(grp.id, opt)}
                              className={`flex items-center justify-between p-3 rounded-2xl border text-xs text-left transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-amber-600 bg-amber-50/70 text-amber-950 font-bold ring-1 ring-amber-600/30'
                                  : 'border-stone-200 bg-stone-50/50 text-stone-700 hover:border-amber-300'
                              }`}
                            >
                              <span>{opt.name}</span>
                              {opt.priceModifier > 0 && (
                                <span className="text-[11px] font-semibold text-amber-900">
                                  +{formatPKR(opt.priceModifier)}
                                </span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Special Instructions Input */}
              <div className="space-y-1.5 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                  Special Baking / Box Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Write 'Happy Birthday Sarah' on box or extra napkins"
                  value={specialInstructions}
                  onChange={e => setSpecialInstructions(e.target.value)}
                  className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-2.5 text-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Quantity & Add to Cart Section */}
              <div className="pt-6 border-t border-stone-100 space-y-4">
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-stone-400 font-medium block">Total Price (PKR)</span>
                    <span className="text-2xl font-black text-amber-950 font-display">
                      {formatPKR(totalPrice)}
                    </span>
                  </div>

                  {/* Quantity selector */}
                  <div className="flex items-center gap-3 bg-stone-100 border border-stone-200 rounded-full px-3 py-1.5">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-stone-600 hover:text-stone-900 p-1 cursor-pointer"
                      title="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-bold text-sm text-stone-900 px-2 min-w-[20px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-stone-600 hover:text-stone-900 p-1 cursor-pointer"
                      title="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <Button
                  onClick={handleAdd}
                  variant="amber"
                  size="lg"
                  leftIcon={<ShoppingBag className="w-5 h-5" />}
                  className="w-full py-4 text-base font-bold shadow-lg shadow-amber-500/25"
                >
                  Add {quantity}x to Quetta Cart — {formatPKR(totalPrice)}
                </Button>

                {/* Delivery Guarantee Info */}
                <div className="p-3.5 bg-amber-50/60 rounded-2xl border border-amber-200/50 flex items-center gap-3 text-xs text-amber-950">
                  <Truck className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>
                    Express delivery to <strong>Jinnah Town, Cantt, Satellite Town</strong> & all Quetta neighborhoods in 35-45 mins.
                  </span>
                </div>

              </div>

              {/* Ingredients Accordion */}
              {product.ingredients && product.ingredients.length > 0 && (
                <div className="pt-4 border-t border-stone-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                    Pure Ingredients:
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.ingredients.map((ing, idx) => (
                      <span key={idx} className="text-xs bg-stone-100 text-stone-700 px-2.5 py-1 rounded-full border border-stone-200">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* Related Products Carousel/Grid */}
        {related.length > 0 && (
          <div className="space-y-6">
            <h3 className="text-2xl font-black font-display text-stone-900">
              You Might Also Love
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
