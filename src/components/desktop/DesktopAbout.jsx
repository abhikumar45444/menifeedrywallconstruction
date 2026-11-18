import React from 'react';
import { ASSETS } from '../../utils/assets';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopAbout({ onOpenCallModal, onOpenConsultation }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="shell py-20 lg:py-28 border-b border-[#cccac3]" id="about" aria-labelledby="about-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Authentic Craftsmanship Photo */}
        <div className="lg:col-span-6">
          <figure className="relative w-full h-[clamp(340px,42vw,580px)] overflow-hidden bg-[#d3c9b8] border border-[#cccac3]">
            <img
              src="https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3384.jpg"
              alt="Jessie Lisardo residential drywall craftsmanship in Menifee, CA"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 left-4 bg-[#f4f2ed] border border-[#cccac3] px-3.5 py-2 font-mono text-[10px] font-medium tracking-[0.08em] flex items-center gap-2.5">
              <span className="dot"></span>
              <span>PRESIDENT &amp; MASTER TAPER: JESSIE LISARDO</span>
            </figcaption>
          </figure>
        </div>

        {/* Right: Editorial Craftsmanship Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <p className="eyebrow text-[#4b4c46]">
            <span className="dot"></span> ABOUT MENIFEE DRYWALL
          </p>

          <h2 id="about-title" className="editorial-h2 text-[#151614]">
            Local with<br />
            20+ years<span className="text-[#1188c4]">.</span>
          </h2>

          <div className="space-y-4 text-[17px] text-[#4b4c46] leading-[1.55]">
            <p>
              Menifee Drywall Construction is owned and personally operated by <strong className="text-[#151614] font-semibold">Jessie Lisardo</strong>. With more than 20 years of hands-on field experience, Jessie built the business on a simple premise: provide the craftsmanship, pricing, and genuine customer care homeowners deserve.
            </p>
            <p>
              Unlike large subcontracting firms that rotate unvetted crews, Jessie personally supervises every project—from small bathroom ceiling water repairs to custom home additions in Temecula, Murrieta, Menifee, and Orange County.
            </p>
          </div>

          {/* Editorial Monospace Badges */}
          <div className="grid grid-cols-3 gap-4 border-y border-[#cccac3] py-5 font-mono text-[11px] text-[#151614]">
            <div>
              <span className="text-xl lg:text-2xl font-bold font-sans block text-[#096899]">20+</span>
              <span className="text-[#4b4c46] text-[10px] uppercase">Years in Trade</span>
            </div>
            <div>
              <span className="text-xl lg:text-2xl font-bold font-sans block text-[#096899]">100%</span>
              <span className="text-[#4b4c46] text-[10px] uppercase">Texture Match</span>
            </div>
            <div>
              <span className="text-xl lg:text-2xl font-bold font-sans block text-[#096899]">Top Pro</span>
              <span className="text-[#4b4c46] text-[10px] uppercase">Thumbtack Award</span>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-6">
            <button
              onClick={() => scrollTo('contact')}
              className="ref-link text-[#151614] hover:text-[#096899] cursor-pointer"
            >
              <span>Get in touch with Jessie</span>
              <span aria-hidden="true">↘</span>
            </button>
            <button
              onClick={onOpenCallModal}
              className="font-mono text-xs text-[#096899] hover:underline cursor-pointer"
            >
              Direct: (951) 746-8891
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
