import React from 'react';
import Reveal from '../Reveal';

export default function DesktopAbout({ onOpenCallModal, onOpenConsultation }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-[#F9F8F6] dark:bg-[#181917] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="about" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Craftsmanship Photo with Reveal */}
          <div className="lg:col-span-5">
            <Reveal delay={120}>
              <figure className="relative w-full h-[clamp(320px,36vw,480px)] overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-sm group">
                <img
                  src="https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3382.jpg"
                  alt="Finished smooth-wall interior craftsmanship by Menifee Drywall Construction"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <figcaption className="absolute bottom-3 left-3 bg-white/95 dark:bg-[#121312]/95 border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 font-mono text-[10px] uppercase tracking-wider text-neutral-800 dark:text-neutral-200 rounded-xs">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#096899] dark:bg-[#8bd4f6] mr-2"></span>
                  PRESIDENT &amp; OWNER: JESSIE LISARDO
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Right: Editorial Story */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <Reveal delay={0}>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  ABOUT MENIFEE DRYWALL
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 
                  id="about-title" 
                  className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-2"
                >
                  Over 20 years of<br />drywall craftsmanship<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={140} className="space-y-3 text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
              <p>
                <strong className="text-neutral-950 dark:text-white font-medium">Jessie Lisardo</strong> first learned the trade in high school working alongside his uncle, developing a passion for clean hanging, taping, and invisible mudding finishes.
              </p>
              <p>
                Now, more than two decades later, Jessie personally supervises every residential and commercial project across Menifee, Murrieta, Temecula, and surrounding communities, ensuring prompt turnaround without sacrificing quality.
              </p>
            </Reveal>

            {/* Clean Monospace Metric Strip */}
            <Reveal delay={200}>
              <div className="grid grid-cols-3 gap-4 border-y border-neutral-200 dark:border-neutral-800 py-4 font-mono text-xs text-neutral-950 dark:text-white">
                <div>
                  <span className="text-2xl font-semibold block text-[#096899] dark:text-[#8bd4f6]">20+</span>
                  <span className="text-neutral-500 text-[10px] uppercase tracking-wider">Years Exp</span>
                </div>
                <div>
                  <span className="text-2xl font-semibold block text-[#096899] dark:text-[#8bd4f6]">5.0 ★</span>
                  <span className="text-neutral-500 text-[10px] uppercase tracking-wider">Top Pro</span>
                </div>
                <div>
                  <span className="text-2xl font-semibold block text-[#096899] dark:text-[#8bd4f6]">100%</span>
                  <span className="text-neutral-500 text-[10px] uppercase tracking-wider">Texture Match</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="pt-1 flex items-center gap-6">
                <button
                  onClick={() => scrollTo('contact')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#096899] dark:hover:text-[#8bd4f6] hover:border-[#096899] dark:hover:border-[#8bd4f6] transition-colors cursor-pointer"
                >
                  <span>Get in touch</span>
                  <span aria-hidden="true">↘</span>
                </button>
                <button
                  onClick={onOpenCallModal}
                  className="font-mono text-xs text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Call Jessie: (951) 746-8891
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
