import React, { useState } from 'react';

export default function DesktopRepairGuide({ onOpenConsultation, onOpenCallModal }) {
  const [activeTab, setActiveTab] = useState('holes');

  const guideItems = [
    {
      id: 'holes',
      title: 'Holes & Cracks',
      summary: 'From an aggressive doorknob strike to stress-settling cracks along ceiling joints, we square off the damage, install solid wood backing where needed, and feather joints so the repair disappears into the wall.',
      photo: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3394.jpg',
      badge: 'COMMON ISSUE: DOORKNOB & WALL SETTLING'
    },
    {
      id: 'water',
      title: 'Water Damage & Plumbing Cuts',
      summary: 'Once plumbers repair the leak, we cut back softened gypsum to the studs, inspect for moisture/mildew, replace insulation, and hang new mold-resistant board ready for texture matching.',
      photo: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/MVIMG_20181016_135043.jpg',
      badge: 'URGENT: LEAK & PIPING INSPECTION CUTS'
    },
    {
      id: 'texture',
      title: 'Ceiling Texture Matching',
      summary: 'Ceiling patches are notorious for flashing under sunlight. Jessie blends spray orange peel, heavy knockdown, or skip trowel by hand to match adjacent weathered surfaces perfectly.',
      photo: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3384.jpg',
      badge: 'SPECIALTY: HAND & SPRAY TEXTURE MATCH'
    },
    {
      id: 'popcorn',
      title: 'Popcorn Removal & Level 5 Smooth',
      summary: 'Outdated popcorn ceilings collect dust and darken rooms. We seal off floors and fixtures with 2mil poly plastic, scrape acoustic stipple cleanly, and skim-coat to a contemporary Level 5 smooth surface.',
      photo: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3382.jpg',
      badge: 'UPGRADE: MODERN SMOOTH CEILINGS'
    }
  ];

  const currentItem = guideItems.find(item => item.id === activeTab) || guideItems[0];

  return (
    <section className="shell py-16 lg:py-24 border-b border-[#cccac3]" id="guide" aria-labelledby="guide-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left: Interactive Damage Photo with Monospace Badge */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <figure className="relative w-full h-[clamp(320px,38vw,520px)] overflow-hidden bg-[#c4c4bc] border border-[#cccac3] shadow-xs">
            <img
              src={currentItem.photo}
              alt={currentItem.title}
              className="w-full h-full object-cover transition-opacity duration-300"
              key={currentItem.photo}
            />
            <figcaption className="absolute bottom-4 left-4 bg-[#f4f2ed] border border-[#cccac3] px-3 py-2 font-mono text-[10px] font-medium tracking-[0.08em] flex items-center gap-2 shadow-xs">
              <span className="dot"></span>
              <span>{currentItem.badge}</span>
            </figcaption>
          </figure>
        </div>

        {/* Right: Editorial Diagnostic Options Accordion */}
        <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
          <div>
            <p className="eyebrow text-[#4b4c46]">
              <span className="dot"></span> REPAIR GUIDE
            </p>
            <h2 id="guide-title" className="editorial-h2 text-[#151614] mt-3">
              What needs fixing<span className="text-[#1188c4]">?</span>
            </h2>
          </div>

          <div className="divide-y divide-[#cccac3] border-y border-[#cccac3]">
            {guideItems.map((item) => {
              const isOpen = activeTab === item.id;
              return (
                <div key={item.id} className="py-4">
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className="w-full flex items-center justify-between text-left group cursor-pointer"
                  >
                    <span className={`text-lg lg:text-xl font-semibold tracking-tight transition-colors ${
                      isOpen ? 'text-[#096899]' : 'text-[#151614] group-hover:text-[#096899]'
                    }`}>
                      {item.title}
                    </span>
                    <span className="font-mono text-xl text-[#096899] font-normal leading-none pl-4">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pt-3 pr-6 animate-fade-in">
                      <p className="text-[15px] text-[#4b4c46] leading-relaxed">
                        {item.summary}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-6">
            <button
              onClick={onOpenConsultation}
              className="ref-link text-[#151614] hover:text-[#096899] cursor-pointer"
            >
              <span>Get an estimate with photos</span>
              <span aria-hidden="true">↗</span>
            </button>
            <button
              onClick={onOpenCallModal}
              className="font-mono text-xs text-[#096899] hover:underline cursor-pointer"
            >
              Have urgent water damage? Call (951) 746-8891
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
