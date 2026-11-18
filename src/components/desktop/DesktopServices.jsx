import React from 'react';
import { SERVICES } from '../../data/drywallData';
import { ASSETS } from '../../utils/assets';

export default function DesktopServices({ onOpenServiceModal, onOpenConsultation }) {
  // All 8 authentic services directly from menifeedrywallconstruction.com/services/
  const authenticServices = [
    {
      id: 'drywall-installation',
      title: 'Drywall Installation',
      summary: 'Professional sheetrock hanging, framing, and clean finishing for new construction and remodels.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3383.jpg',
      tag: 'RESIDENTIAL & COMMERCIAL'
    },
    {
      id: 'drywall-repair',
      title: 'Drywall Repair',
      summary: 'Flawless restoration for holes, stress cracks, settlement damage, and plumbing cutouts.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3394.jpg',
      tag: 'HOLES & CRACKS'
    },
    {
      id: 'water-damage',
      title: 'Water Damage',
      summary: 'Rapid cutback, moisture assessment, and mold-resistant drywall replacement after leaks.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/MVIMG_20181016_135043.jpg',
      tag: 'LEAKS & RESTORATION'
    },
    {
      id: 'texture-matching',
      title: 'Texture Matching',
      summary: 'Seamless blending for orange peel, knockdown, and custom hand-applied wall textures.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3384.jpg',
      tag: 'SEAMLESS BLENDING'
    },
    {
      id: 'popcorn-removal',
      title: 'Acoustic / Popcorn Removal',
      summary: 'Clean acoustic ceiling removal with dust containment for modern, dust-free interiors.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3382.jpg',
      tag: 'CEILING UPGRADE'
    },
    {
      id: 'smooth-wall',
      title: 'Smooth Wall Finish',
      summary: 'Level-5 skim coating transforming outdated textured walls into sleek, contemporary surfaces.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/cache/2018/10/IMG_3382/3002124147.jpg',
      tag: 'CLEAN MODERN WALLS'
    },
    {
      id: 'custom-texture',
      title: 'Custom Texture',
      summary: 'Personalized troweled textures crafted to match your aesthetic and remodeling vision.',
      image: ASSETS.heroBanner,
      tag: 'CUSTOM TEXTURES'
    },
    {
      id: 'demolition',
      title: 'Demolition Services',
      summary: 'Precise tear-outs, wall removals, and complete debris cleanup ready for new framing.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3380.jpg',
      tag: 'REMODELING & TEAR-OUTS'
    }
  ];

  return (
    <section className="shell py-16 lg:py-24 border-b border-[#cccac3] dark:border-[#2b2d2a]" id="services" aria-labelledby="services-title">
      {/* 1. Section Header with Minimal Authentic Copy */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow text-[#4b4c46] dark:text-[#a0a29c]">
            <span className="dot"></span> SERVICES &bull; MENIFEE DRYWALL CONSTRUCTION
          </p>
          <h2 id="services-title" className="editorial-h2 text-[#151614] dark:text-[#f4f2ed] mt-4">
            Riverside County’s Premier<br />
            Drywall Contractor<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span>
          </h2>
        </div>
        <p className="text-[15px] text-[#4b4c46] dark:text-[#a0a29c] leading-relaxed max-w-md">
          Complete drywall solutions for homeowners and general contractors throughout Riverside County.
        </p>
      </div>

      {/* 2. Authentic Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {authenticServices.map((service) => (
          <article 
            key={service.id} 
            className="group cursor-pointer bg-white dark:bg-[#1a1b18] border border-[#cccac3] dark:border-[#2b2d2a] p-6 shadow-xs hover:border-[#151614] dark:hover:border-white transition-all flex flex-col justify-between"
            onClick={() => {
              const fullService = SERVICES.find(s => s.id === service.id) || SERVICES[0];
              onOpenServiceModal(fullService);
            }}
          >
            <div>
              {/* Image Container with hover zoom */}
              <div className="relative w-full h-[240px] lg:h-[280px] overflow-hidden bg-[#d3c9b8] dark:bg-[#121312] border border-[#cccac3] dark:border-[#2b2d2a] mb-5">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-[#f4f2ed]/95 dark:bg-[#121312]/95 border border-[#cccac3] dark:border-[#2b2d2a] px-2.5 py-1 font-mono text-[10px] font-medium tracking-wider text-[#151614] dark:text-[#f4f2ed]">
                  {service.tag}
                </span>
              </div>

              {/* Service Copy directly from the original website */}
              <h3 className="editorial-h3 text-[#151614] dark:text-[#f4f2ed] group-hover:text-[#096899] dark:group-hover:text-[#8bd4f6] transition-colors flex items-center justify-between">
                <span>{service.title}</span>
                <span aria-hidden="true" className="text-xl font-normal opacity-70 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                  ↗
                </span>
              </h3>
              <p className="text-[14px] text-[#4b4c46] dark:text-[#a0a29c] leading-relaxed mt-2.5">
                {service.summary}
              </p>
            </div>

            <div className="pt-4 border-t border-[#e2e0d8] dark:border-[#2b2d2a] mt-5 flex items-center justify-between font-mono text-[11px] text-[#096899] dark:text-[#8bd4f6]">
              <span>LEARN MORE &bull; FREE ESTIMATE</span>
              <span>↗</span>
            </div>
          </article>
        ))}
      </div>

      {/* 3. Bottom Service Action Footer */}
      <div className="mt-12 pt-6 flex flex-wrap items-center justify-between gap-6 font-mono text-[11px] text-[#4b4c46] dark:text-[#a0a29c]">
        <div className="flex items-center gap-4">
          <span>&bull; REMODELS &bull; ADDITIONS &bull; RESTORATION &bull; FLOOD DAMAGE</span>
        </div>
        <button
          onClick={onOpenConsultation}
          className="ref-link text-[#151614] dark:text-[#f4f2ed] hover:text-[#096899] dark:hover:text-[#8bd4f6] cursor-pointer"
        >
          <span>Schedule a free consultation</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  );
}
