import React from 'react';
import { ASSETS } from '../../utils/assets';
import Reveal from '../Reveal';

export default function DesktopHero({ onOpenCallModal, onOpenConsultation }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#FFFFFF] dark:bg-[#121312] pt-12 pb-16 border-b border-neutral-200 dark:border-neutral-800 transition-colors" aria-labelledby="hero-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Top Tracked Micro-Label */}
        <Reveal delay={0}>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            MENIFEE, CA <span className="opacity-40">/</span> LICENSED &amp; INSURED
          </p>
        </Reveal>

        {/* Hero Copy Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end my-6 lg:my-8">
          <Reveal delay={80}>
            <h1 
              id="hero-title" 
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-neutral-950 dark:text-white leading-[1.08]"
            >
              Drywall done.<br />Done right<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
            </h1>
          </Reveal>

          <Reveal delay={160} className="max-w-md pb-1 space-y-4">
            <p className="text-[15px] lg:text-[16px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
              Drywall repair, installation, and seamless texture matching for Menifee, Murrieta, Temecula, and the Inland Empire.
            </p>
            <div>
              <button 
                onClick={() => scrollTo('services')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#096899] dark:hover:text-[#8bd4f6] hover:border-[#096899] dark:hover:border-[#8bd4f6] transition-colors cursor-pointer"
              >
                <span>Explore our services</span>
                <span aria-hidden="true">↘</span>
              </button>
            </div>
          </Reveal>
        </div>

        {/* Architectural Hero Image Frame with Scale Settle Reveal */}
        <Reveal delay={240}>
          <figure className="relative w-full h-[clamp(280px,36vw,480px)] overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm group">
            <img
              src={ASSETS.heroBanner}
              alt="Menifee Drywall Construction hanging and finishing drywall"
              className="w-full h-full object-cover object-[50%_40%] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              fetchPriority="high"
            />
            <figcaption className="absolute bottom-3 left-3 bg-white/95 dark:bg-[#121312]/95 border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-neutral-800 dark:text-neutral-200 rounded-xs">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#096899] dark:bg-[#8bd4f6] mr-2"></span>
              DRYWALL REPAIR &bull; INSTALLATION &bull; TEXTURE MATCHING
            </figcaption>
          </figure>
        </Reveal>

        {/* 3-Column Hairline Trust Strip */}
        <Reveal delay={320}>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-b border-neutral-200 dark:border-neutral-800 font-mono text-[11px] uppercase tracking-[0.08em] text-neutral-600 dark:text-neutral-400 mt-6">
            <div className="py-4 text-center border-b md:border-b-0 border-neutral-200 dark:border-neutral-800">
              <span>Locally owned &amp; operated</span>
            </div>
            <div className="py-4 text-center border-b md:border-b-0 md:border-l border-neutral-200 dark:border-neutral-800">
              <span>Licensed &amp; insured</span>
            </div>
            <div className="py-4 text-center md:border-l border-neutral-200 dark:border-neutral-800">
              <span>Workmanship warranty</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
