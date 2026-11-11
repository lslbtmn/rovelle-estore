import React from 'react';
import { Sparkles, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export const AnnouncementBar: React.FC = () => {
  const { currency, setCurrency } = useCart();

  return (
    <div className="bg-[#1A1817] text-[#FAF7F5] text-xs font-medium py-2 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="hidden sm:flex items-center space-x-2 text-[#E8D3C4]">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>14-Day Fit Guarantee · Effortless Size Exchanges</span>
        </div>

        <div className="flex items-center space-x-1.5 text-center">
          <Sparkles className="w-3 h-3 text-[#CCA288]" />
          <span>Complimentary Express Shipping on orders over $100</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-1 text-[#DFD3C3]">
            <Truck className="w-3.5 h-3.5" />
            <span>Fast Delivery in Ghana & Worldwide</span>
          </div>

          <div className="flex items-center space-x-1 border-l border-white/20 pl-3">
            <label htmlFor="currency-select" className="sr-only">Currency</label>
            <select
              id="currency-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as 'USD' | 'GHS' | 'GBP')}
              className="bg-transparent text-white/90 text-xs focus:outline-none cursor-pointer hover:text-white"
            >
              <option value="USD" className="bg-[#1A1817] text-white">USD ($)</option>
              <option value="GHS" className="bg-[#1A1817] text-white">GHS (GH₵)</option>
              <option value="GBP" className="bg-[#1A1817] text-white">GBP (£)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
