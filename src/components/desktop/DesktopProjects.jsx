import React, { useState } from 'react';
import { MapPin, Image as ImageIcon, ArrowRight, X, ExternalLink } from 'lucide-react';
import { ASSETS } from '../../utils/assets';

export default function DesktopProjects({ onOpenConsultation }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', label: 'All Jobs' },
    { id: 'New Construction', label: 'New Construction' },
    { id: 'Smooth Wall', label: 'Smooth Wall Finish' },
    { id: 'Installation & Repair', label: 'Ceiling & Repairs' },
    { id: 'Water Damage', label: 'Water Damage' },
  ];

  const filtered = activeCategory === 'all'
    ? ASSETS.projects
    : ASSETS.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#163a63]/10 text-[#163a63] text-xs font-bold uppercase tracking-wider mb-3">
              <ImageIcon className="w-3.5 h-3.5 text-[#163a63]" />
              <span>Job Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Recent Completed Drywall Work
            </h2>
            <p className="text-stone-600 mt-2 max-w-2xl text-base">
              Real craftsmanship across Riverside, Corona, Mission Viejo, and Menifee. Click any project to view high-resolution photography.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === c.id
                    ? 'bg-[#163a63] text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Column Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3 h-3 text-brand-400" />
                  <span>{proj.location}</span>
                </div>
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-xl bg-white text-slate-900 font-bold text-xs shadow-lg">
                    Enlarge Photo
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase text-brand-600 tracking-wider">
                    {proj.category}
                  </span>
                  <h3 className="text-base font-extrabold text-slate-900 mt-1 leading-snug group-hover:text-brand-600 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-brand-600 font-bold">
                  <span>View Project Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-6">
            <div className="relative max-w-3xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 animate-fadeIn">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white z-10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-96 w-full bg-black flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-6 text-white bg-slate-900">
                <div className="flex items-center gap-2 text-xs text-brand-400 font-bold mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>{selectedProject.location}</span>
                  <span>&bull;</span>
                  <span>{selectedProject.category}</span>
                </div>
                <h3 className="text-xl font-black">{selectedProject.title}</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{selectedProject.description}</p>
                <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenConsultation();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-[#c97a18] hover:bg-[#b36710] text-white font-bold text-xs cursor-pointer shadow-sm"
                  >
                    Request Similar Work for Your Home
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
