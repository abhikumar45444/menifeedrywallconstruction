import React, { forwardRef } from 'react';
import { Phone, Sparkles, MapPin, ChevronRight, ShieldCheck } from 'lucide-react';
import { ASSETS } from '../utils/assets';
import { COMPANY_INFO } from '../data/drywallData';

const TopHeader = forwardRef(function TopHeader(
  {
    isScrolled,
    selectedArea = 'Riverside County (Menifee & Murrieta)',
    onOpenAreaModal,
    onOpenCallModal,
    onOpenConsultation,
  },
  ref
) {
  return (
    <header
      ref={ref}
      className={`sticky top-0 left-0 right-0 z-30 transition-all duration-300 px-4 pt-3.5 md:pt-12 pb-3.5 rounded-none md:rounded-t-[40px] select-none ${
        isScrolled
          ? 'bg-[#0f172a] shadow-md'
          : 'bg-gradient-to-b from-black/85 via-black/40 to-transparent shadow-none'
      }`}
    >
      {/* 1. Top Row: Wordmark Logo & Quick Actions */}
      <div className="flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-1 flex items-center justify-center shrink-0 shadow-xs">
            <img
              src={ASSETS.logo}
              alt="Menifee Drywall Construction"
              className="w-full h-full object-contain drop-shadow-sm"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[13px] font-black text-white leading-tight drop-shadow-xs">
              Menifee Drywall
            </span>
            <span className="text-[9px] font-bold text-brand-300 uppercase tracking-wider leading-none mt-0.5">
              Construction &bull; 20+ Yrs
            </span>
          </div>
        </div>

        {/* Action Group */}
        <div className="flex items-center gap-2">
          {/* Quick Quote Button */}
          <button
            onClick={onOpenConsultation}
            className="relative p-2 rounded-xl bg-white/15 backdrop-blur-md text-white hover:bg-white/25 active:scale-95 transition-all cursor-pointer border border-white/10 shadow-xs"
            aria-label="Request Instant Quote"
            title="Instant Quote Request"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
          </button>

          {/* Call Jessie Button */}
          <button
            onClick={onOpenCallModal}
            className="px-3 py-1.5 rounded-full bg-brand-600 hover:bg-brand-500 active:scale-95 text-white flex items-center gap-1.5 font-black text-xs shadow-md transition-all cursor-pointer ring-1 ring-white/20"
            aria-label="Call (951) 746-8891"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>951-746-8891</span>
          </button>
        </div>
      </div>

      {/* 2. Bottom Row: Area selector & Contractor Status Strip (Exact AssessME Strip) */}
      <div className="mt-2.5 flex items-center justify-between pt-2 border-t border-white/15 text-xs">
        <button
          onClick={onOpenAreaModal}
          className="flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors cursor-pointer text-[11px] truncate max-w-[240px]"
        >
          <MapPin className="w-3.5 h-3.5 text-brand-400 flex-shrink-0" />
          <span className="truncate drop-shadow-xs">{selectedArea}</span>
          <ChevronRight className="w-3 h-3 text-slate-300" />
        </button>

        <span className="px-2 py-0.5 rounded-full bg-emerald-500/25 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold tracking-tight backdrop-blur-xs flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          20+ Yrs Licensed
        </span>
      </div>
    </header>
  );
});

export default TopHeader;
