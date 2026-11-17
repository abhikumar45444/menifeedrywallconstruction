import React from 'react';
import { Phone, Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { ASSETS } from '../utils/assets';
import { COMPANY_INFO } from '../data/drywallData';

export default function TopHeader({ isScrolled, onOpenCallModal, onOpenConsultation }) {
  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 w-full ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2 border-b border-slate-100'
          : 'bg-gradient-to-b from-black/75 via-black/40 to-transparent py-3'
      }`}
    >
      <div className="px-4 flex items-center justify-between">
        {/* Brand Logo & Wordmark */}
        <div className="flex items-center gap-2">
          <div className="relative">
            <div
              className={`p-1 rounded-xl transition-all duration-300 ${
                isScrolled ? 'bg-brand-50 border border-brand-100' : 'bg-white/10 backdrop-blur-sm border border-white/20'
              }`}
            >
              <img
                src={ASSETS.logo}
                alt="Menifee Drywall Construction Logo"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  // Fallback in case of external image blocking
                  e.target.style.display = 'none';
                }}
              />
            </div>
            {/* Top Pro mini badge indicator */}
            <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white rounded-full p-0.5 shadow-sm">
              <Sparkles className="w-2.5 h-2.5" />
            </div>
          </div>

          <div className="flex flex-col">
            <span
              className={`text-sm font-bold tracking-tight leading-tight transition-colors duration-300 ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              Menifee Drywall
            </span>
            <div className="flex items-center gap-1.5">
              <span
                className={`text-[10px] font-semibold tracking-wider uppercase transition-colors duration-300 ${
                  isScrolled ? 'text-brand-600' : 'text-brand-300'
                }`}
              >
                Construction
              </span>
              <span className="text-[9px] text-emerald-400 font-medium flex items-center gap-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                20+ Yrs Exp
              </span>
            </div>
          </div>
        </div>

        {/* Quick CTA Actions */}
        <div className="flex items-center gap-2">
          {/* Direct Tap to Call */}
          <button
            onClick={onOpenCallModal}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm transition-all active:scale-95 ${
              isScrolled
                ? 'bg-brand-600 text-white hover:bg-brand-700 shadow-brand-500/20'
                : 'bg-white/95 text-brand-900 hover:bg-white shadow-black/20 backdrop-blur-md'
            }`}
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span className="hidden sm:inline">Call</span>
            <span className="font-bold">951-746-8891</span>
          </button>

          {/* Quick Free Quote Pill */}
          <button
            onClick={onOpenConsultation}
            className={`p-2 rounded-full transition-all active:scale-95 ${
              isScrolled
                ? 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-md'
            }`}
            title="Instant Consultation"
            aria-label="Request Instant Estimate"
          >
            <Clock className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
