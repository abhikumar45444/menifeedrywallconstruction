import React from 'react';
import { Phone, Sparkles, MessageSquare } from 'lucide-react';
import { ASSETS } from '../utils/assets';
import { COMPANY_INFO } from '../data/drywallData';

export default function TopHeader({ isScrolled, onOpenCallModal, onOpenConsultation }) {
  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-2.5 border-b border-slate-100/80'
          : 'bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent py-2.5'
      }`}
    >
      <div className="px-4 flex items-center justify-between">
        {/* Concise Brand Identity */}
        <div className="flex items-center gap-2.5">
          <div
            className={`w-9 h-9 rounded-xl flex items-center justify-center p-1 transition-all duration-300 ${
              isScrolled
                ? 'bg-slate-100/80 border border-slate-200/60 shadow-2xs'
                : 'bg-white/15 backdrop-blur-md border border-white/25 shadow-xs'
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

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span
                className={`text-[13px] font-extrabold tracking-tight transition-colors duration-200 ${
                  isScrolled ? 'text-slate-900' : 'text-white'
                }`}
              >
                Menifee Drywall
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="Available now" />
            </div>
            <span
              className={`text-[10px] font-medium tracking-wide transition-colors duration-200 ${
                isScrolled ? 'text-slate-500' : 'text-slate-300'
              }`}
            >
              20+ Yrs Exp &bull; Riverside & OC
            </span>
          </div>
        </div>

        {/* Clean, High-Converting Actions */}
        <div className="flex items-center gap-1.5">
          {/* Quick Free Quote Button */}
          <button
            onClick={onOpenConsultation}
            className={`px-2.5 py-1.5 rounded-full text-[11px] font-bold transition-all active:scale-95 flex items-center gap-1 ${
              isScrolled
                ? 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                : 'bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20'
            }`}
          >
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Quote</span>
          </button>

          {/* Primary Call Pill */}
          <button
            onClick={onOpenCallModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-bold text-white bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-600 shadow-sm shadow-brand-500/25 active:scale-95 transition-all"
            aria-label="Call Jessie Lisardo"
          >
            <Phone className="w-3 h-3 fill-current" />
            <span>(951) 746-8891</span>
          </button>
        </div>
      </div>
    </header>
  );
}
