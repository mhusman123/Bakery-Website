'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { useUIStore } from '@/store/uiStore';
import { Mail, Sparkles, CheckCircle2 } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  const showToast = useUIStore(s => s.showToast);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubmitted(true);
    showToast('Successfully subscribed to Porto\'s Quetta VIP Club! Promo code: PORTO10', 'success');
  };

  return (
    <section className="py-16 bg-stone-900 text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="bg-stone-800/80 border border-stone-700 p-8 sm:p-12 rounded-3xl backdrop-blur-md shadow-2xl relative">
          <div className="w-12 h-12 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
            <Sparkles className="w-6 h-6" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-display text-white">
            Join the Quetta Sweet Tooth Club
          </h2>
          <p className="text-stone-300 text-sm max-w-lg mx-auto mt-2">
            Subscribe to get instant secret menu alerts, weekend discount codes, and fresh batch notifications delivered straight to your inbox.
          </p>

          {isSubmitted ? (
            <div className="mt-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-2xl inline-flex items-center gap-2 text-sm font-semibold">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              <span>You&apos;re subscribed! Use promo code <strong className="text-amber-400">PORTO10</strong> at checkout for 10% off.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full bg-stone-950/80 border border-stone-700 rounded-full py-3.5 pl-12 pr-4 text-sm text-white placeholder:text-stone-500 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20"
                />
              </div>
              <Button type="submit" variant="amber" size="lg" className="rounded-full shrink-0 py-3.5">
                Subscribe Now
              </Button>
            </form>
          )}

          <p className="text-[11px] text-stone-500 mt-4">
            We respect your privacy. Unsubscribe anytime with one click.
          </p>
        </div>

      </div>
    </section>
  );
};
