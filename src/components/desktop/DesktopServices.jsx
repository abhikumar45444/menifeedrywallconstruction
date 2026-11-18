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
    <section id="services" className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="w-3.5 h-3.5 text-brand-600" />
              <span>Full Service Drywall Contractor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Professional Drywall Services
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl text-base">
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
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (4 Columns / 2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              onClick={() => onOpenServiceModal(service)}
              className="group bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
            >
              {/* Service Thumbnail */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-brand-600 text-white text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-xs">
                  {service.badge}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-lg flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-400" />
                  <span>{service.turnaround}</span>
                </div>
              </div>

              {/* Service Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-extrabold text-slate-900 group-hover:text-brand-600 transition-colors leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {service.overview}
                  </p>

                  {/* Feature Checkpoints */}
                  <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
                    {service.features.slice(0, 3).map((feat, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Pricing & Trigger */}
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold uppercase">Pricing</span>
                    <p className="font-extrabold text-slate-900 text-xs">{service.priceEstimate}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 font-bold text-brand-600 group-hover:translate-x-1 transition-transform">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Project Callout Bar */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl font-black">Need custom texture matching or multi-room remodel drywall?</h3>
            <p className="text-xs text-slate-300 max-w-xl">
              President Jessie Lisardo personally conducts free in-person walkthroughs across Riverside County and parts of Orange County.
            </p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3 rounded-2xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-sm shadow-md transition-all active:scale-95 shrink-0 cursor-pointer"
          >
            Schedule Free Walkthrough
          </button>
        </div>
      </div>
    </section>
  );
}
