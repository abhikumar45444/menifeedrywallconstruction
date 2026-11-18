import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, MapPin, Sparkles, ChevronDown, ShieldCheck, Star } from 'lucide-react';
import { ASSETS } from '../../utils/assets';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopNavbar({ 
  onOpenConsultation, 
  onOpenCallModal, 
  onOpenAreaModal, 
  selectedArea 
}) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* 1. Top Utility Notification Strip */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-6 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <strong className="text-white">Emergency Repairs & Water Leaks:</strong> Priority Same-Day Dispatch
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-brand-400" />
              <span>{COMPANY_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenAreaModal}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-brand-400" />
              <span>{selectedArea}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-400" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Desktop Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3 border-b border-slate-800'
            : 'bg-slate-900/90 backdrop-blur-sm py-4 border-b border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-white/10 p-1.5 border border-white/20 shadow-xs flex items-center justify-center group-hover:border-brand-400 transition-colors">
              <img
                src={ASSETS.logo}
                alt="Menifee Drywall Construction"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-white tracking-tight leading-none group-hover:text-brand-300 transition-colors">
                Menifee Drywall
              </span>
              <span className="text-[10px] font-bold text-brand-400 uppercase tracking-widest mt-1">
                Construction &bull; 20+ Years Exp
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-200">
            <button onClick={() => scrollTo('services')} className="hover:text-brand-400 transition-colors cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-brand-400 transition-colors cursor-pointer">
              About Jessie
            </button>
            <button onClick={() => scrollTo('estimator')} className="hover:text-brand-400 transition-colors cursor-pointer flex items-center gap-1 text-emerald-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cost Estimator</span>
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-brand-400 transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => scrollTo('reviews')} className="hover:text-brand-400 transition-colors cursor-pointer">
              Testimonials
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-brand-400 transition-colors cursor-pointer">
              Contact
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Phone Call Pill */}
            <button
              onClick={onOpenCallModal}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-brand-400 fill-current" />
              <span>(951) 746-8891</span>
            </button>

            {/* Request Free Quote Button */}
            <button
              onClick={onOpenConsultation}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-600 text-white font-bold text-xs shadow-md shadow-brand-500/25 transition-all active:scale-95 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
