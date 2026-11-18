import React, { useState } from 'react';
import Reveal from '../Reveal';

export default function DesktopRepairGuide({ onOpenConsultation, onOpenCallModal }) {
  const [activeTab, setActiveTab] = useState('holes');

  const guideItems = [
    {
      id: 'holes',
      title: 'Holes & cracks',
      summary: 'From accidental doorknob punctures to structural settling cracks along ceiling seams, we square off the area, install solid wood backing where needed, and feather the joints so the repair disappears.',
      photo: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3394.jpg',
      badge: 'DOORKNOB & WALL SETTLING'
    },
    {
      id: 'water',
      title: 'Water damage',
      summary: 'After plumbing or roof leaks are resolved, we cut back softened gypsum to the framing studs, inspect for moisture, replace insulation, and hang new mold-resistant greenboard ready for mud and texture.',
      photo: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/MVIMG_20181016_135043.jpg',
      badge: 'LEAK & PLUMBING CUTOUTS'
    },
    {
      id: 'texture',
      title: 'Ceiling texture',
      summary: 'Ceiling repairs are notorious for showing seams under natural light. Jessie hand-blends spray orange peel, knockdown, or skip trowel to match surrounding aged surfaces cleanly.',
      photo: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3384.jpg',
      badge: 'HAND & SPRAY TEXTURE MATCH'
    }
  ];

  const currentItem = guideItems.find(item => item.id === activeTab) || guideItems[0];

  return (
    <section className="bg-[#F9F8F6] dark:bg-[#181917] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="guide" aria-labelledby="guide-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left: Architectural Photo Frame with Scale Settle Reveal */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <Reveal delay={120}>
              <figure className="relative w-full h-[clamp(300px,36vw,480px)] overflow-hidden bg-neutral-200 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-800 rounded-sm group">
                <img
                  src={currentItem.photo}
                  alt={currentItem.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  key={currentItem.photo}
                />
                <figcaption className="absolute bottom-3 left-3 bg-white/95 dark:bg-[#121312]/95 border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 font-mono text-[10px] tracking-wider uppercase text-neutral-800 dark:text-neutral-200 rounded-xs">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#096899] dark:bg-[#8bd4f6] mr-2"></span>
                  {currentItem.badge}
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Right: Clean Diagnostic Accordion Stack */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div>
              <Reveal delay={0}>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                  REPAIR GUIDE
                </p>
              </Reveal>
              <Reveal delay={80}>
                <h2 
                  id="guide-title" 
                  className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-2"
                >
                  What needs fixing<span className="text-[#096899] dark:text-[#8bd4f6]">?</span>
                </h2>
              </Reveal>
            </div>

            {/* Vertical Stack Separated by 1px Dividers with Staggered Entrance */}
            <div className="divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
              {guideItems.map((item, index) => {
                const isOpen = activeTab === item.id;
                return (
                  <Reveal key={item.id} delay={100 + index * 80}>
                    <div className="py-4">
                      <button
                        onClick={() => setActiveTab(item.id)}
                        className="w-full flex items-center justify-between text-left group cursor-pointer"
                      >
                        <span className={`text-xl font-semibold tracking-tight transition-colors ${
                          isOpen 
                            ? 'text-[#096899] dark:text-[#8bd4f6]' 
                            : 'text-neutral-950 dark:text-white group-hover:text-[#096899] dark:group-hover:text-[#8bd4f6]'
                        }`}>
                          {item.title}
                        </span>
                        <span className="font-mono text-xl text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors leading-none pl-4">
                          {isOpen ? '−' : '+'}
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pt-3 pr-6 animate-fade-in">
                          <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
                            {item.summary}
                          </p>
                        </div>
                      )}
                    </div>
                  </Reveal>
                );
              })}
            </div>

            {/* Ending CTA Link */}
            <Reveal delay={340}>
              <div className="pt-2 flex flex-wrap items-center gap-6">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#096899] dark:hover:text-[#8bd4f6] hover:border-[#096899] dark:hover:border-[#8bd4f6] transition-colors cursor-pointer"
                >
                  <span>Get an estimate with photos</span>
                  <span aria-hidden="true">↗</span>
                </button>
                <button
                  onClick={onOpenCallModal}
                  className="text-xs font-mono text-neutral-500 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Urgent leak? Call (951) 746-8891
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
