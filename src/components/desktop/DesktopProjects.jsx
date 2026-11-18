import React, { useState } from 'react';
import { ASSETS } from '../../utils/assets';
import { X } from 'lucide-react';

export default function DesktopProjects({ onOpenConsultation }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  // Official projects directly from menifeedrywallconstruction.com/projects/
  const galleryItems = [
    {
      id: 'proj-1',
      title: 'Drywall Installation & Hanging',
      location: 'Riverside County, CA',
      tag: 'NEW HOMES',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3383.jpg',
      aspect: 'col-span-12 md:col-span-6 lg:col-span-6'
    },
    {
      id: 'proj-2',
      title: 'Smooth Wall Finish',
      location: 'Menifee, CA',
      tag: 'SMOOTH WALL',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3382.jpg',
      aspect: 'col-span-12 md:col-span-6 lg:col-span-3'
    },
    {
      id: 'proj-3',
      title: 'Drywall Repair & Patching',
      location: 'Corona, CA',
      tag: 'DRYWALL REPAIR',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3394.jpg',
      aspect: 'col-span-12 md:col-span-6 lg:col-span-3'
    },
    {
      id: 'proj-4',
      title: 'Texture Matching & Remodel Mudding',
      location: 'Menifee, CA',
      tag: 'TEXTURE MATCHING',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3384.jpg',
      aspect: 'col-span-12 md:col-span-6 lg:col-span-4'
    },
    {
      id: 'proj-5',
      title: 'Water Damage Restoration',
      location: 'Murrieta, CA',
      tag: 'WATER DAMAGE',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/MVIMG_20181016_135043.jpg',
      aspect: 'col-span-12 md:col-span-6 lg:col-span-4'
    },
    {
      id: 'proj-6',
      title: 'Demolition & Framing Cleanout',
      location: 'Temecula, CA',
      tag: 'DEMOLITION',
      image: 'https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3380.jpg',
      aspect: 'col-span-12 md:col-span-6 lg:col-span-4'
    }
  ];

  return (
    <section className="bg-[#181a18] text-[#f4f2ed] py-20 lg:py-28" id="projects" aria-labelledby="projects-title">
      <div className="shell">
        {/* 1. Gallery Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="eyebrow text-[#d5d5cd]">
              <span className="dot bg-[#8bd4f6]"></span> PORTFOLIO &bull; MENIFEE DRYWALL CONSTRUCTION
            </p>
            <h2 id="projects-title" className="editorial-h2 text-[#f4f2ed] mt-4">
              Latest Projects<span className="text-[#8bd4f6]">.</span>
            </h2>
            <p className="font-mono text-xs text-[#8bd4f6] uppercase tracking-wider mt-2">
              Work Completed Across Riverside &amp; Orange County
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="ref-link text-[#f4f2ed] hover:text-[#8bd4f6] cursor-pointer"
          >
            <span>Schedule a free consultation for your project</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>

        {/* 2. Masonry Gallery Grid with Corner Arrow Zoom Indicator */}
        <div className="grid grid-cols-12 gap-4">
          {galleryItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              type="button"
              className={`${item.aspect} relative h-[320px] lg:h-[380px] overflow-hidden bg-[#30302c] group cursor-zoom-in text-left border border-[#51544e]/60`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              {/* Bottom Gradient Overlay & Info */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#181a18]/90 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
              
              <div className="absolute bottom-4 left-4 right-16">
                <span className="font-mono text-[10px] text-[#8bd4f6] tracking-wider uppercase block">
                  {item.location} &bull; {item.tag}
                </span>
                <p className="text-sm font-semibold text-white tracking-tight mt-1 line-clamp-1">
                  {item.title}
                </p>
              </div>

              {/* Monospace Zoom Trigger Badge */}
              <span className="absolute bottom-4 right-4 w-9 h-9 bg-[#f4f2ed] text-[#151614] font-mono text-base font-bold flex items-center justify-center group-hover:bg-[#8bd4f6] transition-colors shadow-xs">
                ↗
              </span>
            </button>
          ))}
        </div>

        {/* 3. Monospace Metadata Divider */}
        <div className="flex justify-between items-center border-t border-[#51544e] pt-4 mt-8 font-mono text-[11px] text-[#d5d5cd] tracking-wider uppercase">
          <p>LATEST PROJECTS &bull; MENIFEE DRYWALL CONSTRUCTION</p>
          <p>MORENO VALLEY &bull; CORONA &bull; TEMECULA &bull; MENIFEE</p>
        </div>
      </div>

      {/* 4. Lightbox Zoom Dialog Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-[#101110]/95 backdrop-blur-md flex items-center justify-center p-4 lg:p-10"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-5xl max-h-[90vh] bg-[#181a18] border border-[#51544e] p-3 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-[#f4f2ed] text-[#151614] flex items-center justify-center font-bold hover:bg-[#8bd4f6] transition-colors cursor-pointer"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-h-[75vh] w-auto object-contain"
            />
            <div className="pt-3 px-2 flex justify-between items-center font-mono text-xs text-[#d5d5cd]">
              <span>{selectedPhoto.title} &bull; {selectedPhoto.location}</span>
              <span className="text-[#8bd4f6]">{selectedPhoto.tag}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
