'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'amber';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98] select-none rounded-full cursor-pointer';

    const variants = {
      primary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-md hover:shadow-lg shadow-amber-600/25',
      amber: 'bg-amber-500 hover:bg-amber-600 text-stone-900 shadow-md hover:shadow-lg shadow-amber-500/20 font-semibold',
      secondary: 'bg-stone-900 hover:bg-stone-800 text-amber-50 shadow-md shadow-stone-950/20',
      outline: 'border-2 border-stone-300 hover:border-amber-600 text-stone-800 hover:text-amber-700 bg-white/80 hover:bg-amber-50/50',
      ghost: 'text-stone-700 hover:text-amber-700 hover:bg-amber-100/50',
      danger: 'bg-rose-600 hover:bg-rose-700 text-white shadow-md shadow-rose-600/20',
    };

    const sizes = {
      sm: 'text-xs px-3.5 py-1.5 gap-1.5 font-semibold',
      md: 'text-sm px-5 py-2.5 gap-2 font-semibold',
      lg: 'text-base px-7 py-3.5 gap-2.5 font-semibold',
      icon: 'p-2.5 aspect-square',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin text-current" />
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
