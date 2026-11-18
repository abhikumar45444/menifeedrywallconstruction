import React, { useState } from 'react';
import { 
  Search, Wrench, Droplets, Sparkles, Layers, Hammer, 
  CheckCircle2, Trash2, Building2, ChevronDown, ChevronUp,
  DollarSign, Clock, ArrowRight, Phone, ShieldCheck
} from 'lucide-react';
import { SERVICES, COMPANY_INFO } from '../data/drywallData';

export default function ServicesScreen({ 
  onOpenServiceModal, 
  onSelectTab, 
  onOpenCallModal 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  const filters = [
    { id: 'all', label: 'All (8)' },
    { id: 'repairs', label: 'Repairs & Leaks' },
    { id: 'textures', label: 'Textures & Popcorn' },
    { id: 'construction', label: 'Installation & Demo' },
  ];

  const filteredServices = SERVICES.filter((s) => {
    const matchesSearch = 
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.overview.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

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

  const toggleExpand = (id, e) => {
    e.stopPropagation();
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="w-full flex-1 overflow-y-auto smooth-scroll hide-scrollbar bg-slate-50 pb-28">
      {/* Header Banner - AssessME screen header spacing */}
      <div className="px-5 pt-3.5 md:pt-12 pb-4 bg-gradient-to-b from-[#0f172a] to-slate-800 text-white shadow-xs">
        <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400 bg-brand-950/60 px-2 py-0.5 rounded-full border border-brand-800">
          Professional Catalog
        </span>
        <h1 className="text-xl font-black tracking-tight text-white mt-1">
          Drywall Services & Solutions
        </h1>
        <p className="text-xs text-slate-300 mt-1 max-w-sm">
          Residential & commercial drywall backed by 20+ years of precision in Riverside County.
        </p>

        {/* Search Input */}
        <div className="relative mt-3.5">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search patches, popcorn, water leaks, textures..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 rounded-2xl bg-white/10 text-white placeholder-slate-400 text-xs border border-white/15 focus:outline-none focus:ring-2 focus:ring-brand-400 backdrop-blur-md"
          />
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto hide-scrollbar mt-3">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-3 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all ${
                activeFilter === f.id
                  ? 'bg-brand-500 text-white shadow-xs'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Services List Feed */}
      <div className="px-4 py-4 space-y-4">
        {filteredServices.length === 0 ? (
          <div className="py-12 text-center text-slate-500">
            <p className="text-sm font-semibold">No services found matching "{searchQuery}"</p>
            <p className="text-xs mt-1">Try searching "repair", "texture", or "water"</p>
            <button
              onClick={() => { setSearchQuery(''); setActiveFilter('all'); }}
              className="mt-3 px-3 py-1.5 rounded-xl bg-brand-50 text-brand-600 text-xs font-bold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredServices.map((service) => {
            const isExpanded = expandedId === service.id;

            return (
              <div
                key={service.id}
                className="rounded-3xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                {/* Main Card Header */}
                <div 
                  onClick={() => onOpenServiceModal(service)}
                  className="p-4 cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-slate-100 shrink-0 relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute bottom-1 right-1 bg-black/60 text-white text-[8px] font-bold px-1 rounded">
                        Details →
                      </span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[9px] font-bold uppercase text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                          {service.badge}
                        </span>
                        <span className="text-[10px] font-bold text-slate-700">
                          {service.priceEstimate}
                        </span>
                      </div>

                      <h2 className="text-sm font-black text-slate-900 mt-1 leading-snug">
                        {service.title}
                      </h2>

                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {service.shortDesc}
                      </p>

                      <div className="flex items-center gap-3 mt-2 text-[10px] text-slate-500">
                        <span className="flex items-center gap-1 font-semibold text-emerald-600">
                          <Clock className="w-3 h-3" />
                          {service.turnaround}
                        </span>
                        <span>&bull;</span>
                        <span className="text-slate-400">Tap for details</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expand Accordion Button */}
                <div className="px-4 py-2 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
                  <button
                    onClick={(e) => toggleExpand(service.id, e)}
                    className="flex items-center gap-1 text-slate-600 font-semibold hover:text-brand-600 text-[11px]"
                  >
                    <span>{isExpanded ? 'Hide Specifications' : 'Quick Specs & Checklist'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onSelectTab('estimate')}
                      className="px-2.5 py-1 rounded-lg bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-[11px] active:scale-95 transition-all"
                    >
                      Estimate Cost
                    </button>
                    <button
                      onClick={() => onOpenServiceModal(service)}
                      className="px-2.5 py-1 rounded-lg bg-brand-600 hover:bg-brand-700 text-white font-bold text-[11px] active:scale-95 transition-all"
                    >
                      View Modal
                    </button>
                  </div>
                </div>

                {/* Expanded Accordion Body */}
                {isExpanded && (
                  <div className="px-4 py-3 bg-slate-50/40 border-t border-slate-100 space-y-2.5 animate-island text-xs">
                    <p className="text-slate-700 font-normal leading-relaxed text-[11px]">
                      {service.overview}
                    </p>

                    <div>
                      <h4 className="text-[10px] font-bold uppercase text-slate-400 tracking-wider mb-1.5">
                        Scope Highlights:
                      </h4>
                      <div className="grid grid-cols-1 gap-1.5">
                        {service.features.slice(0, 4).map((f, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-700 text-[11px]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}

        {/* Custom Project Callout */}
        <div className="p-4 rounded-3xl bg-slate-100 border border-slate-200 text-center space-y-2">
          <h3 className="text-xs font-bold text-slate-800">Have a unique or multi-room project?</h3>
          <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
            Jessie provides free walkthroughs and transparent bids for room additions, custom arches, and commercial jobs.
          </p>
          <button
            onClick={onOpenCallModal}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs shadow-xs active:scale-95 transition-all"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            <span>Call Jessie (951) 746-8891</span>
          </button>
        </div>
      </div>
    </div>
  );
}
