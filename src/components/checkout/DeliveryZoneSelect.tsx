'use client';

import React from 'react';
import { QUETTA_DELIVERY_ZONES } from '@/lib/deliveryZones';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface DeliveryZoneSelectProps {
  value: string;
  onChange: (zone: string) => void;
  error?: string;
}

export const DeliveryZoneSelect: React.FC<DeliveryZoneSelectProps> = ({
  value,
  onChange,
  error
}) => {
  return (
    <div className="w-full space-y-1.5">
      <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 flex items-center justify-between">
        <span className="flex items-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-amber-600" />
          Quetta Neighborhood / Delivery Zone *
        </span>
        <span className="text-[11px] text-amber-700 font-bold bg-amber-100 px-2 py-0.5 rounded-full">
          Quetta Only
        </span>
      </label>

      <div className="relative">
        <select
          value={value}
          onChange={e => onChange(e.target.value)}
          className={cn(
            'w-full bg-white border border-stone-200 rounded-xl py-3 px-4 text-stone-900 text-sm font-medium transition-all appearance-none cursor-pointer focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20',
            error && 'border-rose-500'
          )}
        >
          <option value="" disabled>-- Select Quetta Area --</option>
          {QUETTA_DELIVERY_ZONES.map(zone => (
            <option key={zone} value={zone}>
              {zone} (Quetta Express Delivery)
            </option>
          ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
          ▼
        </div>
      </div>

      {error ? (
        <p className="text-xs text-rose-600 font-medium">{error}</p>
      ) : (
        <p className="text-[11px] text-stone-500">
          📍 Porto&apos;s Bakery only delivers within Quetta city boundaries.
        </p>
      )}
    </div>
  );
};
