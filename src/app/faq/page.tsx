'use client';

import React, { useState } from 'react';
import { MOCK_FAQS } from '@/lib/data/faq';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>('faq-1');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredFaqs = MOCK_FAQS.filter(faq => {
    const matchesCategory = categoryFilter === 'all' || faq.category === categoryFilter;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="py-12 bg-stone-50/50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-800 bg-amber-100 px-3.5 py-1 rounded-full border border-amber-200">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl font-black font-display text-stone-900 mt-3">
            Got Questions? We Have Answers.
          </h1>
          <p className="text-sm text-stone-600 mt-2">
            Everything you need to know about Quetta delivery, allergen information, custom donut boxes, and payment methods.
          </p>
        </div>

        {/* Search & Category tabs */}
        <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-sm mb-8 space-y-4">
          <div className="relative">
            <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search FAQs (e.g. Quetta delivery fee, Eggless, COD...)"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full bg-stone-50 border border-stone-200 rounded-full py-3 pl-11 pr-4 text-xs sm:text-sm text-stone-900 focus:outline-none focus:border-amber-500"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {[
              { id: 'all', label: 'All Questions' },
              { id: 'delivery', label: 'Quetta Delivery' },
              { id: 'products', label: 'Products & Ingredients' },
              { id: 'ordering', label: 'Ordering & Payment' },
              { id: 'custom', label: 'Custom & Catering' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setCategoryFilter(tab.id)}
                className={cn(
                  'px-3.5 py-1.5 rounded-full text-xs font-semibold shrink-0 cursor-pointer transition-all border',
                  categoryFilter === tab.id
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-3xl border border-stone-200">
              <HelpCircle className="w-10 h-10 text-stone-400 mx-auto mb-2" />
              <p className="text-sm font-semibold text-stone-700">No matching questions found</p>
              <p className="text-xs text-stone-500 mt-1">Try typing another keyword or reset the category filter.</p>
            </div>
          ) : (
            filteredFaqs.map(faq => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-stone-200/90 overflow-hidden transition-all shadow-xs"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-stone-900 text-sm hover:text-amber-700 cursor-pointer select-none"
                  >
                    <span className="font-display text-base">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        'w-5 h-5 text-stone-400 transition-transform duration-300 shrink-0',
                        isOpen && 'rotate-180 text-amber-600'
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-xs text-stone-600 leading-relaxed border-t border-stone-100/80 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
}
