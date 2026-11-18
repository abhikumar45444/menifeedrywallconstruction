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
      <div className="bg-[#08121c] text-slate-300 text-xs py-2 px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <strong className="text-white">Emergency Repairs & Water Leaks:</strong> Priority Same-Day Scheduling
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-[#f5a742]" />
              <span>{COMPANY_INFO.hours}</span>
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenAreaModal}
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-[#f5a742]" />
              <span>{selectedArea}</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>
            <span className="text-slate-600">|</span>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#f5a742]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Desktop Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0c1a27]/98 backdrop-blur-md shadow-md py-3 border-b border-slate-800'
            : 'bg-[#102334] py-4 border-b border-slate-800/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-white p-1 border border-slate-300 shadow-sm flex items-center justify-center">
              <img
                src={ASSETS.logo}
                alt="Menifee Drywall Construction"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-white tracking-tight leading-none">
                Menifee Drywall
              </span>
              <span className="text-[10px] font-bold text-[#f5a742] uppercase tracking-widest mt-1">
                Construction &bull; 20+ Years Exp
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-200">
            <button onClick={() => scrollTo('services')} className="hover:text-[#f5a742] transition-colors cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-[#f5a742] transition-colors cursor-pointer">
              About Jessie
            </button>
            <button onClick={() => scrollTo('estimator')} className="hover:text-[#f5a742] transition-colors cursor-pointer flex items-center gap-1.5 text-amber-300">
              <Calculator className="w-3.5 h-3.5" />
              <span>Cost Estimator</span>
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-[#f5a742] transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => scrollTo('reviews')} className="hover:text-[#f5a742] transition-colors cursor-pointer">
              Testimonials
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#f5a742] transition-colors cursor-pointer">
              Contact
            </button>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Direct Phone Call Button */}
            <button
              onClick={onOpenCallModal}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-600 transition-all active:scale-95 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5 text-[#f5a742] fill-current" />
              <span>(951) 746-8891</span>
            </button>

            {/* Request Free Quote Button */}
            <button
              onClick={onOpenConsultation}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#c97a18] hover:bg-[#b36710] text-white font-bold text-xs shadow-sm transition-all active:scale-95 cursor-pointer"
            >
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
