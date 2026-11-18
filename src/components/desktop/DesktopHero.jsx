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
      <p className="eyebrow text-[#4b4c46] dark:text-[#a0a29c]">
        <span className="dot"></span> RIVERSIDE COUNTY’S PREMIER DRYWALL CONTRACTOR
      </p>

      {/* 2. Asymmetric Split Headline & Aside */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end my-6 lg:my-8">
        <div className="lg:col-span-8">
          <h1 id="hero-title" className="editorial-h1 text-[#151614] dark:text-[#f4f2ed]">
            <span>Full Service Drywall Contractor in Menifee, CA<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span></span>
          </h1>
          <p className="font-mono text-sm lg:text-base text-[#096899] dark:text-[#8bd4f6] font-semibold mt-3 uppercase tracking-wider">
            The craftsmanship, pricing, and customer service you deserve
          </p>
        </div>

        <div className="lg:col-span-4 pb-2 space-y-4">
          <p className="text-[16px] text-[#4b4c46] dark:text-[#a0a29c] leading-[1.5]">
            With over 20 years of experience in the industry, <strong className="text-[#151614] dark:text-[#f4f2ed] font-semibold">Menifee Drywall Construction</strong> has the knowledge and expertise to handle drywall jobs of any size. Whether it’s a residential home job or a commercial-sized project, our skilled team is guaranteed to deliver superior drywall work.
          </p>
          <div className="pt-2 flex items-center gap-6">
            <button 
              onClick={() => scrollTo('services')}
              className="ref-link text-[#151614] dark:text-[#f4f2ed] hover:text-[#096899] dark:hover:text-[#8bd4f6] cursor-pointer"
            >
              <span>Explore our services</span>
              <span aria-hidden="true">↘</span>
            </button>
            <button
              onClick={onOpenCallModal}
              className="font-mono text-xs font-semibold text-[#096899] dark:text-[#8bd4f6] hover:underline underline-offset-4 cursor-pointer"
            >
              Call Today! 951-746-8891
            </button>
          </div>
        </div>
      </div>

      {/* 3. Framed Architectural Hero Photo */}
      <figure className="relative w-full h-[clamp(360px,42vw,620px)] overflow-hidden bg-[#c4c4bc] dark:bg-[#1a1b18] border border-[#cccac3] dark:border-[#2b2d2a] shadow-xs group">
        <img
          src={ASSETS.heroBanner}
          alt="Menifee Drywall Construction hanging, taping and finishing in Menifee, CA"
          className="w-full h-full object-cover object-[50%_40%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
          fetchPriority="high"
        />
        <figcaption className="absolute bottom-5 left-5 bg-[#f4f2ed] dark:bg-[#1a1b18] border border-[#cccac3] dark:border-[#2b2d2a] px-3.5 py-2.5 font-mono text-[11px] font-medium tracking-[0.08em] flex items-center gap-2.5 shadow-xs text-[#151614] dark:text-[#f4f2ed]">
          <span className="dot"></span>
          <span>MENIFEE DRYWALL CONSTRUCTION &bull; PRESIDENT/OWNER JESSIE LISARDO</span>
        </figcaption>
      </figure>

      {/* 4. Three-Column Proof Ticker with Hairline Dividers */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#cccac3] dark:border-[#2b2d2a] font-mono text-[11px] uppercase tracking-[0.08em] text-[#4b4c46] dark:text-[#a0a29c] mt-4">
        <div className="py-4 px-3 text-center border-b md:border-b-0 border-[#cccac3] dark:border-[#2b2d2a]">
          <span>OVER 20 YEARS OF INDUSTRY EXPERIENCE</span>
        </div>
        <div className="py-4 px-3 text-center border-b md:border-b-0 md:border-l border-[#cccac3] dark:border-[#2b2d2a]">
          <span>RESIDENTIAL &bull; COMMERCIAL &bull; RESTORATION</span>
        </div>
        <div className="py-4 px-3 text-center md:border-l border-[#cccac3] dark:border-[#2b2d2a]">
          <span>HOME REMODELING &bull; ROOM ADDITIONS &bull; FLOOD DAMAGE</span>
        </div>
      </div>
    </section>
  );
}
