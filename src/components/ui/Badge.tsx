import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'bestseller' | 'eggless' | 'new' | 'halal' | 'amber' | 'neutral' | 'accent';
  className?: string;
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'amber',
  className,
  size = 'md'
}) => {
  const base = 'inline-flex items-center font-medium rounded-full border transition-colors';

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 gap-1',
    md: 'text-xs px-2.5 py-1 gap-1.5'
  };

  const variants = {
    bestseller: 'bg-amber-500/15 border-amber-500/30 text-amber-900 font-semibold',
    eggless: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-800 font-medium',
    new: 'bg-rose-500/15 border-rose-500/30 text-rose-800 font-semibold',
    halal: 'bg-teal-500/15 border-teal-500/30 text-teal-900 font-medium',
    amber: 'bg-amber-100 border-amber-300 text-amber-900',
    neutral: 'bg-stone-100 border-stone-200 text-stone-700',
    accent: 'bg-amber-600 text-white border-transparent'
  };

  return (
    <span className={cn(base, sizes[size], variants[variant], className)}>
      {children}
    </span>
  );
};
