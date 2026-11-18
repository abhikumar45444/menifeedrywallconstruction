import React, { useState } from 'react';
import { X } from 'lucide-react';
import Reveal from '../Reveal';

export default function DesktopProjects({ onOpenConsultation }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const galleryItems = [
    {
      id: 'proj-1',
      title: 'Drywall hanging & framing prep',
      location: 'Menifee, CA',
      tag: 'NEW CONSTRUCTION',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3383.jpg'
    },
    {
      id: 'proj-2',
      title: 'Level-5 smooth ceiling finish',
      location: 'Murrieta, CA',
      tag: 'SMOOTH WALL',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3382.jpg'
    },
    {
      id: 'proj-3',
      title: 'Invisible repair & patch blending',
      location: 'Corona, CA',
      tag: 'REPAIR & TEXTURE',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3394.jpg'
    },
    {
      id: 'proj-4',
      title: 'Orange peel texture matching',
      location: 'Temecula, CA',
      tag: 'CUSTOM TEXTURE',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3384.jpg'
    },
    {
      id: 'proj-5',
      title: 'Water leak cutback & greenboard',
      location: 'Lake Elsinore, CA',
      tag: 'WATER DAMAGE',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/MVIMG_20181016_135043.jpg'
    },
    {
      id: 'proj-6',
      title: 'Demolition & remodeling cleanout',
      location: 'Perris, CA',
      tag: 'DEMOLITION',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3380.jpg'
    }
  ];

  return (
    <section className="bg-[#FFFFFF] dark:bg-[#121312] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="work" aria-labelledby="work-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <Reveal delay={0}>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                PROJECT GALLERY
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2
                id="work-title"
                className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-2"
              >
                A closer look<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#096899] dark:hover:text-[#8bd4f6] transition-colors cursor-pointer w-max"
            >
              <span>See the full gallery</span>
              <span aria-hidden="true">↗</span>
            </button>
          </Reveal>
        </div>

        {/* 3-Column Uniform Photo Grid with Staggered Cascading Reveals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 100}>
              <button
                onClick={() => setSelectedPhoto(item)}
                type="button"
                className="group relative aspect-[4/3] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-sm text-left cursor-zoom-in"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="lazy"
                />

                {/* Bottom Subtle Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-end text-white">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-300">
                    {item.location} &bull; {item.tag}
                  </span>
                  <p className="text-xs font-semibold mt-0.5 line-clamp-1">
                    {item.title}
                  </p>
                </div>

                {/* Corner ↗ Indicator */}
                <span className="absolute bottom-3 right-3 w-7 h-7 bg-white dark:bg-neutral-900 text-neutral-950 dark:text-white text-xs font-medium flex items-center justify-center border border-neutral-200 dark:border-neutral-800 rounded-xs shadow-xs group-hover:bg-[#096899] group-hover:text-white group-hover:border-[#096899] transition-colors">
                  ↗
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Minimal Bottom Label */}
        <Reveal delay={250}>
          <div className="mt-8 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider">
            <span>&bull; Residential &bull; Commercial &bull; Remodels</span>
            <span>Menifee &bull; Murrieta &bull; Temecula &bull; Corona &bull; Inland Empire</span>
          </div>
        </Reveal>
      </div>

      {/* Lightbox Dialog Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 lg:p-10"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-white dark:bg-[#121312] border border-neutral-200 dark:border-neutral-800 p-2 rounded-sm shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 bg-neutral-950 text-white flex items-center justify-center font-bold hover:bg-neutral-800 transition-colors cursor-pointer rounded-xs"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[75vh] w-auto object-contain rounded-xs"
            />
            <div className="pt-3 px-3 pb-1 flex justify-between items-center font-mono text-xs text-neutral-600 dark:text-neutral-400">
              <span className="font-semibold text-neutral-950 dark:text-white">{selectedPhoto.title}</span>
              <span className="uppercase text-[10px]">{selectedPhoto.location}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
