import React from 'react';
import { Phone, MapPin, ChevronDown, Search, Sparkles } from 'lucide-react';
import { ASSETS } from '../utils/assets';
import { COMPANY_INFO } from '../data/drywallData';

export default function TopHeader({ isScrolled, onOpenCallModal, onOpenConsultation, onSelectTab }) {
  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-150/80 py-2.5 md:pt-11 pt-3'
          : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent py-2.5 md:pt-11 pt-3'
      }`}
    >
      <div className="px-4 flex items-center justify-between gap-2">
        {/* Left: Location & Service Selector (Blinkit/Zepto Style) */}
        <button
          onClick={onOpenConsultation}
          className="flex items-center gap-2 text-left group active:scale-98 transition-all min-w-0"
        >
          {/* MDC Logo Squircle */}
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center p-1 shrink-0 transition-all duration-300 ${
              isScrolled
                ? 'bg-brand-50 border border-brand-200 shadow-2xs'
                : 'bg-white/15 backdrop-blur-md border border-white/30 shadow-xs'
            }`}
          >
            <img
              src={ASSETS.logo}
              alt="MDC"
              className="w-full h-full object-contain"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1 leading-tight">
              <MapPin
                className={`w-3.5 h-3.5 shrink-0 transition-colors duration-200 ${
                  isScrolled ? 'text-brand-600' : 'text-amber-400'
                }`}
              />
              <span
                className={`text-[13px] font-extrabold truncate tracking-tight transition-colors duration-200 ${
                  isScrolled ? 'text-slate-900' : 'text-white drop-shadow-xs'
                }`}
              >
                Menifee & Inland Empire
              </span>
              <ChevronDown
                className={`w-3.5 h-3.5 shrink-0 transition-colors duration-200 ${
                  isScrolled ? 'text-slate-500' : 'text-slate-300'
                }`}
              />
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className={`text-[10px] font-semibold tracking-wide transition-colors duration-200 ${
                  isScrolled ? 'text-slate-500' : 'text-slate-200 drop-shadow-xs'
                }`}
              >
                20+ Yrs Exp &bull; Licensed
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
          </div>
        </button>

        {/* Right Action Group: Search / Call / Brand Badge */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* Quick Search / Estimate Trigger */}
          <button
            onClick={() => onSelectTab && onSelectTab('services')}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all active:scale-95 ${
              isScrolled
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20'
            }`}
            title="Search Services"
            aria-label="Search Services"
          >
            <Search className="w-3.5 h-3.5" />
          </button>

          {/* Primary Call Pill */}
          <button
            onClick={onOpenCallModal}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full text-[11px] font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-600 shadow-sm shadow-brand-500/25 active:scale-95 transition-all"
            aria-label="Call Jessie Lisardo"
          >
            <Phone className="w-3 h-3 fill-current" />
            <span className="hidden sm:inline">(951) 746-8891</span>
            <span className="sm:hidden font-mono">Call</span>
          </button>

          {/* Top Pro Mini Badge */}
          <div
            className={`w-7 h-7 rounded-full overflow-hidden p-0.5 shrink-0 transition-all duration-300 ${
              isScrolled ? 'border border-amber-300' : 'border border-white/40'
            }`}
            title="Thumbtack Top Pro"
          >
            <img
              src={ASSETS.topProBadge}
              alt="Top Pro"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
