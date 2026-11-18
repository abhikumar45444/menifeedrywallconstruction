import React from 'react';
import { SERVICES } from '../../data/drywallData';
import Reveal from '../Reveal';

export default function DesktopServices({ onOpenServiceModal, onOpenConsultation }) {
  // Flagship 2-column services directly matching reference structure
  const flagshipServices = [
    {
      id: 'drywall-repair',
      title: 'Drywall repair',
      summary: 'Holes, cracks, and water damage. We repair walls and ceilings and seamlessly match surrounding textures. Emergency service is available.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3394.jpg',
      tag: 'PATCHING & TEXTURE MATCHING'
    },
    {
      id: 'drywall-installation',
      title: 'Drywall installation',
      summary: 'Complete hanging, taping, and finishing for new construction, additions, and full renovations, with surfaces primed for painting.',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3383.jpg',
      tag: 'RESIDENTIAL & COMMERCIAL'
    }
  ];

  // Additional authentic services available on click
  const otherServices = [
    { id: 'water-damage', label: 'Water damage restoration' },
    { id: 'texture-matching', label: 'Texture matching & blending' },
    { id: 'popcorn-removal', label: 'Acoustic / Popcorn ceiling removal' },
    { id: 'smooth-wall', label: 'Level-5 smooth wall finish' },
    { id: 'demolition', label: 'Demolition & remodeling prep' }
  ];

  return (
    <section className="bg-[#FFFFFF] dark:bg-[#121312] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="services" aria-labelledby="services-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section Head with Tracked Micro-Label */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <Reveal delay={0}>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                OUR SERVICES
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 
                id="services-title" 
                className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-2 leading-tight"
              >
                From the first patch<br />to the final finish<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-sm">
              From a small drywall cutout or settling crack to hanging full additions, we prepare walls and ceilings for a clean, consistent finish.
            </p>
          </Reveal>
        </div>

        {/* 2-Column Clean Hairline-Bordered Services Grid with Staggered Entrance */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {flagshipServices.map((service, index) => (
            <Reveal key={service.id} delay={index * 120} className="h-full">
              <article 
                className="group cursor-pointer flex flex-col h-full"
                onClick={() => {
                  const fullService = SERVICES.find(s => s.id === service.id) || SERVICES[0];
                  onOpenServiceModal(fullService);
                }}
              >
                <div className="relative w-full h-[clamp(260px,28vw,380px)] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/95 dark:bg-[#121312]/95 border border-neutral-200 dark:border-neutral-800 px-2.5 py-1 font-mono text-[10px] tracking-wider text-neutral-800 dark:text-neutral-200">
                    {service.tag}
                  </span>
                </div>

                <div className="border-b border-neutral-200 dark:border-neutral-800 pt-5 pb-6 flex-1 flex flex-col justify-between">
                  <h3 className="text-2xl font-semibold tracking-tight text-neutral-950 dark:text-white group-hover:text-[#096899] dark:group-hover:text-[#8bd4f6] transition-colors flex items-center justify-between">
                    <span>{service.title}</span>
                    <span aria-hidden="true" className="text-xl font-normal opacity-60 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                      ↗
                    </span>
                  </h3>
                  <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed mt-2.5">
                    {service.summary}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Additional Specialty Services Horizontal Strip */}
        <Reveal delay={240}>
          <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
              <span>Specialties:</span>
              {otherServices.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const s = SERVICES.find(srv => srv.id === item.id) || SERVICES[0];
                    onOpenServiceModal(s);
                  }}
                  className="hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer border-b border-neutral-300 dark:border-neutral-700 pb-0.5"
                >
                  {item.label} ↗
                </button>
              ))}
            </div>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 text-xs font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer"
            >
              <span>Schedule free estimate</span>
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
