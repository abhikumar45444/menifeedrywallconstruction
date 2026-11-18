import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, ChevronDown, Calculator } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 20);
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
      {/* 1. Top Monospace Utility Ticker */}
      <div className="bg-[#151614] dark:bg-[#0c0d0c] text-[#d5d5cd] text-[11px] font-mono py-2 px-6 border-b border-[#2b2d2a]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#8bd4f6] inline-block"></span>
              <span className="tracking-wider uppercase">EMERGENCY ESCROW &amp; WATER LEAKS: SAME-DAY DISPATCH</span>
            </span>
            <span className="hidden lg:inline text-white/30">/</span>
            <span className="hidden lg:inline text-[#9e9d96]">
              {COMPANY_INFO.hours}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={onOpenAreaModal}
              className="flex items-center gap-1.5 text-[#d5d5cd] hover:text-white transition-colors cursor-pointer"
            >
              <MapPin className="w-3 h-3 text-[#8bd4f6]" />
              <span>{selectedArea}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>
            <span className="text-white/20">|</span>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="text-[#8bd4f6] hover:text-white font-medium transition-colors"
            >
              {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Architectural Header */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-[#f4f2ed]/95 dark:bg-[#121312]/95 backdrop-blur-md shadow-xs py-3.5 border-[#cccac3] dark:border-[#2b2d2a]'
            : 'bg-[#f4f2ed] dark:bg-[#121312] py-4 border-[#cccac3] dark:border-[#2b2d2a]'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-14 flex items-center justify-between">
          {/* Brand Logo & Editorial Wordmark */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-md bg-white p-1 border border-[#cccac3] dark:border-[#2b2d2a] shadow-xs flex items-center justify-center shrink-0">
              <img
                src={ASSETS.logo}
                alt="Menifee Drywall Construction"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-[#151614] dark:text-[#f4f2ed] leading-none">
                Menifee Drywall<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span>
              </span>
              <span className="font-mono text-[10px] text-[#4b4c46] dark:text-[#a0a29c] tracking-wider uppercase mt-1">
                RIVERSIDE CO. / EST. 2004
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-[#151614] dark:text-[#e5e4de]">
            <button 
              onClick={() => scrollTo('services')} 
              className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer"
            >
              Services
            </button>
            <button 
              onClick={() => scrollTo('about')} 
              className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer"
            >
              About Us
            </button>
            <button 
              onClick={() => scrollTo('projects')} 
              className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer"
            >
              Latest Projects
            </button>
            <button 
              onClick={() => scrollTo('reviews')} 
              className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer"
            >
              Testimonials
            </button>
            <button 
              onClick={() => scrollTo('estimator')} 
              className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer"
            >
              Cost Estimator
            </button>
            <button 
              onClick={() => scrollTo('contact')} 
              className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer"
            >
              Contact Us
            </button>
          </div>

          {/* Right Action Callouts */}
          <div className="flex items-center gap-3.5">
            <button
              onClick={onOpenCallModal}
              className="hidden sm:inline-flex items-center gap-2 font-mono text-[13px] font-medium text-[#151614] dark:text-[#e5e4de] hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span>Call Today! 951-746-8891</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="ref-button dark:bg-[#1188c4] dark:hover:bg-[#096899] cursor-pointer"
            >
              <span>Free Consultation</span>
              <span aria-hidden="true" className="text-lg leading-none">↗</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
