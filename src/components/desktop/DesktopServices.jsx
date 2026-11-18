import React from 'react';
import { SERVICES } from '../../data/drywallData';
import { ASSETS } from '../../utils/assets';

export default function DesktopServices({ onOpenServiceModal, onOpenConsultation }) {
  // Curated flagship services matching the editorial style
  const flagshipServices = [
    {
      id: 'repair-texture',
      title: 'Drywall Repair & Texture Matching',
      summary: 'Patches, settling cracks, door knob holes, and seamless texture blending including orange peel, knockdown, and smooth finishes.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3394.jpg',
      tag: 'MOST POPULAR'
    },
    {
      id: 'water-damage',
      title: 'Water Damage Restoration',
      summary: 'Emergency plumbing cutouts, damp insulation removal, antimicrobial drying assessment, and clean drywall reconstruction.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/MVIMG_20181016_135043.jpg',
      tag: 'SAME-DAY DISPATCH'
    },
    {
      id: 'installation',
      title: 'Drywall Installation & Remodeling',
      summary: 'Full hanging and precision taping for room additions, home renovations, custom ceiling framing, and new construction.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3383.jpg',
      tag: 'NEW BUILDS & ADUS'
    },
    {
      id: 'popcorn-smooth',
      title: 'Popcorn Ceiling Removal & Level 5',
      summary: 'Dust-contained acoustic ceiling scraping, skim coating, and conversion to ultra-clean, modern gallery smooth surfaces.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3382.jpg',
      tag: 'MODERN FINISH'
    }
  ];

  return (
    <section className="shell py-16 lg:py-24 border-b border-[#cccac3] dark:border-[#2b2d2a]" id="services" aria-labelledby="services-title">
      {/* 1. Section Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div>
          <p className="eyebrow text-[#4b4c46] dark:text-[#a0a29c]">
            <span className="dot"></span> OUR SERVICES
          </p>
          <h2 id="services-title" className="editorial-h2 text-[#151614] dark:text-[#f4f2ed] mt-4">
            From the first patch<br />
            to the final finish<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span>
          </h2>
        </div>
        <p className="text-[17px] text-[#4b4c46] dark:text-[#a0a29c] leading-[1.5] max-w-md">
          From a small ceiling water leak patch to complete drywall hanging across a custom remodel, we prepare walls and ceilings for a flawless, paint-ready finish.
        </p>
      </div>

      {/* 2. 2-Column Editorial Service Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {flagshipServices.map((service) => (
          <article 
            key={service.id} 
            className="group cursor-pointer"
            onClick={() => {
              const fullService = SERVICES.find(s => s.id === service.id) || SERVICES[0];
              onOpenServiceModal(fullService);
            }}
          >
            {/* Image Container with hover zoom */}
            <div className="relative w-full h-[clamp(280px,32vw,460px)] overflow-hidden bg-[#d3c9b8] dark:bg-[#1a1b18] border border-[#cccac3] dark:border-[#2b2d2a]">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <span className="absolute top-4 left-4 bg-[#f4f2ed]/95 dark:bg-[#121312]/95 border border-[#cccac3] dark:border-[#2b2d2a] px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider text-[#151614] dark:text-[#f4f2ed]">
                {service.tag}
              </span>
            </div>

            {/* Service Copy */}
            <div className="border-b border-[#cccac3] dark:border-[#2b2d2a] py-5">
              <h3 className="editorial-h3 text-[#151614] dark:text-[#f4f2ed] group-hover:text-[#096899] dark:group-hover:text-[#8bd4f6] transition-colors flex items-center justify-between">
                <span>{service.title}</span>
                <span aria-hidden="true" className="text-2xl font-normal opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </h3>
              <p className="text-[15px] text-[#4b4c46] dark:text-[#a0a29c] leading-relaxed mt-2.5 max-w-xl">
                {service.summary}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* 3. Bottom Service Action Footer */}
      <div className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-6 font-mono text-[12px] text-[#4b4c46] dark:text-[#a0a29c]">
        <div className="flex items-center gap-6">
          <span>&bull; ALL TEXTURES MATCHED: ORANGE PEEL, KNOCKDOWN, SKIP TROWEL, SMOOTH</span>
        </div>
        <button
          onClick={onOpenConsultation}
          className="ref-link text-[#151614] dark:text-[#f4f2ed] hover:text-[#096899] dark:hover:text-[#8bd4f6] cursor-pointer"
        >
          <span>Need custom drywall hanging? Request estimate</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  );
}
