'use client';

import React from 'react';
import { PaymentMethodType } from '@/types/order';
import { Banknote, Smartphone, CreditCard, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface PaymentMethodProps {
  value: PaymentMethodType;
  onChange: (method: PaymentMethodType) => void;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ value, onChange }) => {
  return (
    <div className="space-y-3">
      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700">
        Select Payment Method *
      </label>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* COD */}
        <button
          type="button"
          onClick={() => onChange('cod')}
          className={cn(
            'flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all cursor-pointer select-none',
            value === 'cod'
              ? 'border-amber-600 bg-amber-50/60 shadow-md text-amber-950 font-bold'
              : 'border-stone-200 bg-white text-stone-700 hover:border-amber-300'
          )}
        >
          <Banknote className="w-6 h-6 text-amber-700 mb-2" />
          <span className="text-sm font-semibold">Cash on Delivery</span>
          <span className="text-[10px] text-stone-500 mt-1">Pay when order arrives in Quetta</span>
        </button>

        {/* EasyPaisa / JazzCash */}
        <button
          type="button"
          onClick={() => onChange('easypaisa_jazzcash')}
          className={cn(
            'flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all cursor-pointer select-none',
            value === 'easypaisa_jazzcash'
              ? 'border-amber-600 bg-amber-50/60 shadow-md text-amber-950 font-bold'
              : 'border-stone-200 bg-white text-stone-700 hover:border-amber-300'
          )}
        >
          <Smartphone className="w-6 h-6 text-amber-700 mb-2" />
          <span className="text-sm font-semibold">JazzCash / EasyPaisa</span>
          <span className="text-[10px] text-stone-500 mt-1">Local mobile wallet transfer</span>
        </button>

        {/* Card Mock */}
        <button
          type="button"
          onClick={() => onChange('card_mock')}
          className={cn(
            'flex flex-col items-center text-center p-4 rounded-2xl border-2 transition-all cursor-pointer select-none',
            value === 'card_mock'
              ? 'border-amber-600 bg-amber-50/60 shadow-md text-amber-950 font-bold'
              : 'border-stone-200 bg-white text-stone-700 hover:border-amber-300'
          )}
        >
          <CreditCard className="w-6 h-6 text-amber-700 mb-2" />
          <span className="text-sm font-semibold">Debit / Credit Card</span>
          <span className="text-[10px] text-stone-500 mt-1">Visa & Mastercard accepted</span>
        </button>
      </div>

      {/* Method Info Box */}
      {value === 'easypaisa_jazzcash' && (
        <div className="p-4 bg-amber-100/60 border border-amber-300 rounded-2xl text-xs text-amber-950 space-y-1">
          <p className="font-bold flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4 text-amber-700" /> Mobile Wallet Instructions:
          </p>
          <p>Send order total to <strong>JazzCash / EasyPaisa Account: +92 333 7819021 (Porto&apos;s Bakery)</strong>. Keep your transaction reference number ready upon delivery.</p>
        </div>
      )}

      {value === 'card_mock' && (
        <div className="p-4 bg-stone-50 border border-stone-200 rounded-2xl text-xs space-y-3">
          <p className="font-semibold text-stone-800">Card Payment Details (Demo Mode):</p>
          <div className="space-y-2">
            <input
              type="text"
              placeholder="Card Number (4242 •••• •••• 4242)"
              className="w-full bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs"
              readOnly
              value="4242 •••• •••• 4242"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="MM/YY"
                className="bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs"
                readOnly
                value="12/28"
              />
              <input
                type="text"
                placeholder="CVC"
                className="bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs"
                readOnly
                value="123"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
