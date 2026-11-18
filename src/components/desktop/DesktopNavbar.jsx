import React from 'react';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopNavbar({
  onOpenConsultation,
  onOpenCallModal,
  onOpenAreaModal,
  selectedArea
}) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="h-16 border-b border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#121312]/95 backdrop-blur-sm sticky top-0 z-40 transition-colors">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 h-full flex items-center justify-between">
        {/* Left: Clean Brand Wordmark */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-neutral-950 dark:text-white font-semibold text-base tracking-tight hover:opacity-80 transition-opacity"
        >
          <span>Menifee Drywall Construction</span>
        </a>

        {/* Center: Concise Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-600 dark:text-neutral-300">
          <button 
            onClick={() => scrollTo('services')} 
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => scrollTo('work')} 
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Our Work
          </button>
          <button 
            onClick={() => scrollTo('about')} 
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            About
          </button>
          <button 
            onClick={onOpenAreaModal} 
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer flex items-center gap-1"
          >
            <span>Service Areas</span>
            <span className="text-[10px] text-neutral-400">▾</span>
          </button>
          <button 
            onClick={() => scrollTo('contact')} 
            className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Right: Single High-Contrast Rectangular CTA */}
        <div className="flex items-center gap-4">
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="hidden lg:inline text-xs font-mono text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
          >
            {COMPANY_INFO.phone}
          </a>
          <button
            onClick={onOpenConsultation}
            className="px-4 py-2 bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 text-xs font-medium tracking-wide transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <span>Free estimate</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </header>
  );
}
