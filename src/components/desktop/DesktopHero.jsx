import React from 'react';
import { ASSETS } from '../../utils/assets';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopHero({ onOpenCallModal, onOpenConsultation }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="shell pt-10 pb-8" aria-labelledby="hero-title">
      {/* 1. Monospace Eyebrow */}
      <p className="eyebrow text-[#4b4c46]">
        <span className="dot"></span> RIVERSIDE &amp; ORANGE COUNTY <span className="slash">/</span> EST. 2004
      </p>

      {/* 2. Asymmetric Split Headline & Aside */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-6 lg:my-8">
        <div className="lg:col-span-8">
          <h1 id="hero-title" className="editorial-h1 text-[#151614]">
            <span>Drywall done<span className="text-[#1188c4]">.</span></span>
            <br />
            <span>Done right<span className="text-[#1188c4]">.</span></span>
          </h1>
        </div>

        <div className="lg:col-span-4 pb-2 space-y-4">
          <p className="text-[17px] text-[#4b4c46] leading-[1.48]">
            Precision drywall repair, water damage restoration, and residential installation throughout Menifee, Murrieta, Temecula, and Corona by President/Owner <strong className="text-[#151614] font-semibold">Jessie Lisardo</strong>.
          </p>
          <div className="pt-2 flex items-center gap-6">
            <button 
              onClick={() => scrollTo('services')}
              className="ref-link text-[#151614] cursor-pointer"
            >
              <span>Explore our services</span>
              <span aria-hidden="true">↘</span>
            </button>
            <button
              onClick={onOpenCallModal}
              className="font-mono text-xs font-semibold text-[#096899] hover:text-[#075176] underline underline-offset-4 cursor-pointer"
            >
              Call (951) 746-8891
            </button>
          </div>
        </div>
      </div>

      {/* 3. Framed Architectural Hero Photo */}
      <figure className="relative w-full h-[clamp(360px,42vw,620px)] overflow-hidden bg-[#c4c4bc] border border-[#cccac3] shadow-xs group">
        <img
          src={ASSETS.heroBanner}
          alt="Menifee Drywall Construction precision wall mudding and ceiling repair"
          className="w-full h-full object-cover object-[50%_40%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          fetchPriority="high"
        />
        <figcaption className="absolute bottom-5 left-5 bg-[#f4f2ed] border border-[#cccac3] px-3.5 py-2.5 font-mono text-[11px] font-medium tracking-[0.08em] flex items-center gap-2.5 shadow-xs">
          <span className="dot"></span>
          <span>DRYWALL REPAIR &amp; LEVEL 5 FINISH &bull; JESSIE LISARDO</span>
        </figcaption>
      </figure>

      {/* 4. Three-Column Proof Ticker with Hairline Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#cccac3] font-mono text-[11px] uppercase tracking-[0.08em] text-[#4b4c46] mt-4">
        <div className="py-4 px-3 text-center border-b md:border-b-0 border-[#cccac3]">
          <span>LOCALLY OWNED &amp; OPERATED SINCE 2004</span>
        </div>
        <div className="py-4 px-3 text-center border-b md:border-b-0 md:border-l border-[#cccac3]">
          <span>LICENSED &amp; INSURED &bull; THUMBTACK TOP PRO</span>
        </div>
        <div className="py-4 px-3 text-center md:border-l border-[#cccac3]">
          <span>100% INVISIBLE TEXTURE MATCH GUARANTEE</span>
        </div>
      </div>
    </section>
  );
}
