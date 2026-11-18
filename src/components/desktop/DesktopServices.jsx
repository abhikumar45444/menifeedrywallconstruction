import React, { useState } from 'react';
import { 
  Wrench, Droplets, Sparkles, Layers, Hammer, 
  CheckCircle2, Clock, DollarSign, ArrowRight, ShieldCheck 
} from 'lucide-react';
import { SERVICES } from '../../data/drywallData';

export default function DesktopServices({ onOpenServiceModal, onOpenConsultation }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All Services (8)' },
    { id: 'repairs', label: 'Repairs & Water Damage' },
    { id: 'textures', label: 'Textures & Popcorn Removal' },
    { id: 'construction', label: 'Installations & Demolition' },
  ];

  const filteredServices = SERVICES.filter((s) => {
    if (activeFilter === 'repairs') {
      return s.id === 'drywall-repair' || s.id === 'water-damage';
    }
    if (activeFilter === 'textures') {
      return s.id === 'texture-matching' || s.id === 'popcorn-removal' || s.id === 'smooth-wall-finish';
    }
    if (activeFilter === 'construction') {
      return s.id === 'drywall-installation' || s.id === 'demolition' || s.id === 'commercial-drywall';
    }
    return true;
  });

  return (
    <section id="services" className="py-20 bg-[#fbf9f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#163a63]/10 text-[#163a63] text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5 text-[#163a63]" />
              <span>Full Service Drywall Contractor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
              Our Professional Drywall Services
            </h2>
            <p className="text-stone-600 mt-2 max-w-2xl text-base">
              From residential patchwork to whole-home installations, ADUs, and commercial builds, Jessie Lisardo brings two decades of flawless craftsmanship to every job.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeFilter === f.id
                    ? 'bg-[#163a63] text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-300'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onOpenServiceModal(service)}
              className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Service Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-stone-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#c97a18] text-white text-[10px] font-black uppercase px-2.5 py-1 rounded shadow-xs">
                  {service.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  <span>{service.turnaround}</span>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-stone-900 group-hover:text-[#163a63] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-2 line-clamp-3 leading-relaxed">
                    {service.overview}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-4 pt-3 border-t border-stone-100 space-y-1.5 text-xs text-stone-600">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Pricing & Trigger */}
                <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-stone-400 font-semibold uppercase">Pricing</span>
                    <p className="font-extrabold text-stone-900 text-xs">{service.priceEstimate}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-bold text-[#163a63] group-hover:translate-x-1 transition-transform">
                    <span>Details & Scope</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Callout Bar */}
        <div className="mt-12 p-8 rounded-2xl bg-[#122538] text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-black">Need custom texture matching or multi-room remodel drywall?</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              President Jessie Lisardo personally conducts free in-person walkthroughs across Riverside County and parts of Orange County.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-xl bg-[#c97a18] hover:bg-[#b36710] text-white font-bold text-xs shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            Schedule Free Walkthrough
          </button>
        </div>
      </div>
    </section>
  );
}
