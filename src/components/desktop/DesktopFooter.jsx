import React from 'react';
import { ASSETS } from '../../utils/assets';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f4f2ed] dark:bg-[#0c0d0c] border-t border-[#cccac3] dark:border-[#2b2d2a] text-[#151614] dark:text-[#f4f2ed] py-14 transition-colors">
      <div className="shell">
        {/* 1. Brand Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-10 border-b border-[#cccac3] dark:border-[#2b2d2a]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-white p-1 border border-[#cccac3] dark:border-[#2b2d2a] flex items-center justify-center shadow-xs">
              <img
                src={ASSETS.logo}
                alt="Menifee Drywall Construction"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <span className="font-bold text-base tracking-tight block">
                Menifee Drywall Construction<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span>
              </span>
              <span className="font-mono text-[10px] text-[#4b4c46] dark:text-[#a0a29c] tracking-wider uppercase">
                The Craftsmanship, Pricing, and Customer Service You Deserve
              </span>
            </div>
          </div>

          <p className="font-mono text-[12px] text-[#4b4c46] dark:text-[#a0a29c]">
            Menifee &bull; Murrieta &bull; Temecula &bull; Moreno Valley &bull; Corona &bull; Riverside County, CA
          </p>

          <button
            onClick={scrollToTop}
            className="ref-link text-[#151614] dark:text-[#f4f2ed] hover:text-[#096899] dark:hover:text-[#8bd4f6] font-mono text-xs cursor-pointer"
          >
            <span>Back to top</span>
            <span aria-hidden="true">&uarr;</span>
          </button>
        </div>

        {/* 2. Navigation Link Wrap */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-6 text-xs font-semibold text-[#4b4c46] dark:text-[#a0a29c]">
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => scrollTo('services')} className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer">
              Services
            </button>
            <button onClick={() => scrollTo('about')} className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer">
              About Us
            </button>
            <button onClick={() => scrollTo('projects')} className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer">
              Latest Projects
            </button>
            <button onClick={() => scrollTo('reviews')} className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer">
              Testimonials
            </button>
            <button onClick={() => scrollTo('estimator')} className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer">
              Cost Estimator
            </button>
            <button onClick={() => scrollTo('contact')} className="hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer">
              Contact Us
            </button>
          </div>

          <div className="font-mono text-[11px] text-[#73756d] dark:text-[#6a6c65]">
            &copy; {new Date().getFullYear()} Menifee Drywall Construction. All rights reserved. &bull; Call Today! 951-746-8891
          </div>
        </div>
      </div>
    </footer>
  );
}
