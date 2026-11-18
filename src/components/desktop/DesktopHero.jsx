import React from 'react';
import { ASSETS } from '../../utils/assets';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopHero({ onOpenCallModal, onOpenConsultation }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="shell pt-8 pb-6" aria-labelledby="hero-title">
      {/* 1. Monospace Eyebrow */}
      <p className="eyebrow text-[#4b4c46] dark:text-[#a0a29c]">
        <span className="dot"></span> RIVERSIDE COUNTY <span className="slash">/</span> OVER 20 YEARS EXP
      </p>

      {/* 2. Asymmetric Split Headline & Aside - matching reference site proportions */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_260px] gap-8 items-end my-5 lg:my-6">
        <div>
          <h1 id="hero-title" className="editorial-h1 text-[#151614] dark:text-[#f4f2ed]">
            <span>Menifee Drywall<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span></span><br />
            <span>Done Right<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span></span>
          </h1>
        </div>

        <div className="pb-1">
          <p className="text-[16px] text-[#4b4c46] dark:text-[#a0a29c] leading-[1.48]">
            Drywall installation, seamless repair, and texture matching for Menifee and all of Riverside County.
          </p>
          <button 
            onClick={() => scrollTo('services')}
            className="ref-link text-[#151614] dark:text-[#f4f2ed] hover:text-[#096899] dark:hover:text-[#8bd4f6] mt-4 cursor-pointer"
          >
            <span>Explore our services</span>
            <span aria-hidden="true">↘</span>
          </button>
        </div>
      </div>

      {/* 3. Framed Architectural Hero Photo - sleek height, not overpowering */}
      <figure className="relative w-full h-[clamp(280px,34vw,460px)] overflow-hidden bg-[#c4c4bc] dark:bg-[#1a1b18] border border-[#cccac3] dark:border-[#2b2d2a] shadow-xs group">
        <img
          src={ASSETS.heroBanner}
          alt="Menifee Drywall Construction hanging, taping and finishing in Menifee, CA"
          className="w-full h-full object-cover object-[50%_40%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          fetchPriority="high"
        />
        <figcaption className="absolute bottom-4 left-4 bg-[#f4f2ed] dark:bg-[#1a1b18] border border-[#cccac3] dark:border-[#2b2d2a] px-3 py-1.5 font-mono text-[10px] font-medium tracking-[0.08em] flex items-center gap-2 shadow-xs text-[#151614] dark:text-[#f4f2ed]">
          <span className="dot"></span>
          <span>MENIFEE DRYWALL CONSTRUCTION &bull; OWNER JESSIE LISARDO</span>
        </figcaption>
      </figure>

      {/* 4. Minimal Three-Column Proof Ticker */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#cccac3] dark:border-[#2b2d2a] font-mono text-[11px] uppercase tracking-[0.08em] text-[#4b4c46] dark:text-[#a0a29c]">
        <div className="py-3.5 px-3 text-center border-b md:border-b-0 border-[#cccac3] dark:border-[#2b2d2a]">
          <span>Over 20 years experience</span>
        </div>
        <div className="py-3.5 px-3 text-center border-b md:border-b-0 md:border-l border-[#cccac3] dark:border-[#2b2d2a]">
          <span>Licensed &amp; insured</span>
        </div>
        <div className="py-3.5 px-3 text-center md:border-l border-[#cccac3] dark:border-[#2b2d2a]">
          <span>100% texture match guarantee</span>
        </div>
      </div>
    </section>
  );
}
