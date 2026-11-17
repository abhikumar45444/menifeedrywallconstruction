import React, { useState } from 'react';
import { 
  Wrench, Droplets, Sparkles, Layers, ShieldCheck, Star, 
  ArrowRight, Phone, CheckCircle2, MapPin, Award, AlertCircle,
  HelpCircle, ChevronRight, Clock, Hammer
} from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import { COMPANY_INFO, SERVICES, TESTIMONIALS } from '../data/drywallData';
import { ASSETS } from '../utils/assets';

export default function HomeScreen({ 
  onSelectTab, 
  onOpenServiceModal, 
  onOpenCallModal, 
  onOpenConsultation 
}) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'repair', label: 'Patches & Holes' },
    { id: 'water', label: 'Water Leaks' },
    { id: 'popcorn', label: 'Popcorn Removal' },
    { id: 'texture', label: 'Texture Matching' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES.slice(0, 5)
    : SERVICES.filter(s => {
        if (activeCategory === 'repair') return s.id.includes('repair') || s.id.includes('install');
        if (activeCategory === 'water') return s.id.includes('water');
        if (activeCategory === 'popcorn') return s.id.includes('popcorn');
        if (activeCategory === 'texture') return s.id.includes('texture') || s.id.includes('smooth');
        return true;
      });

  return (
    <div className="w-full flex-1 overflow-y-auto smooth-scroll bg-slate-50 pb-28">
      {/* Auto-Rotating Hero Carousel */}
      <HeroCarousel 
        onSelectTab={onSelectTab}
        onOpenCallModal={onOpenCallModal}
        onOpenConsultation={onOpenConsultation}
      />

      <div className="px-4 pt-6 space-y-6">
        {/* Urgent Escrow / Move-Out Emergency Alert Banner */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 p-3.5 text-white shadow-md shadow-amber-500/20">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm shrink-0">
              <AlertCircle className="w-5 h-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/25 px-1.5 py-0.5 rounded">
                  Escrow & Emergency
                </span>
                <span className="text-[10px] text-amber-100 font-medium">Same-Day Dispatch</span>
              </div>
              <h3 className="text-xs font-bold mt-1">Water leak or closing escrow inspection hole?</h3>
              <p className="text-[11px] text-amber-100 mt-0.5 leading-snug">
                Jessie prioritizes urgent move-out deadlines and emergency plumbing cutouts.
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <button
              onClick={onOpenCallModal}
              className="flex-1 py-1.5 px-3 rounded-xl bg-white text-amber-900 font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs active:scale-95 transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call Now (951) 746-8891</span>
            </button>
            <button
              onClick={() => onSelectTab('estimate')}
              className="py-1.5 px-3 rounded-xl bg-amber-700/60 text-white font-semibold text-xs border border-white/20 active:scale-95 transition-all"
            >
              Estimate
            </button>
          </div>
        </div>

        {/* Founder Story Card: Jessie Lisardo (Real 20+ Yrs Craftsmanship) */}
        <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-xs relative overflow-hidden">
          <div className="flex items-start gap-3.5">
            <div className="relative shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-brand-600 to-brand-400 p-0.5 shadow-md">
                <img
                  src={ASSETS.topProBadge}
                  alt="Jessie Lisardo - Top Pro Drywall Contractor"
                  className="w-full h-full object-cover rounded-[14px]"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 bg-brand-600 text-white rounded-full p-1 shadow-sm">
                <Award className="w-3 h-3" />
              </div>
            </div>

            <div className="flex-1">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="text-xs font-black text-slate-900">Jessie Lisardo</span>
                <span className="text-[10px] text-brand-600 font-bold px-1.5 py-0.5 rounded-full bg-brand-50 border border-brand-200">
                  President & Owner
                </span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">
                Started in high school for his uncle &bull; 20+ years mastering hanging, mudding & textures.
              </p>
              <div className="flex items-center gap-2 mt-2 text-[10px] text-slate-600">
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3 h-3 fill-amber-500" /> 4.9 (140+ Reviews)
                </span>
                <span>&bull;</span>
                <span className="text-emerald-600 font-semibold flex items-center gap-0.5">
                  <CheckCircle2 className="w-3 h-3" /> Licensed & Insured
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-slate-100 text-xs text-slate-600 leading-relaxed italic bg-slate-50/70 p-2.5 rounded-xl">
            "Whether your home or business is in Moreno Valley, Corona, Temecula, or right here in Menifee, my crew and I promise fair pricing, punctual service, and flawless finishes."
          </div>
        </div>

        {/* Quick Horizontal Categories */}
        <div>
          <div className="flex items-center justify-between mb-2.5">
            <div>
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
                Drywall Services
              </h2>
              <p className="text-[11px] text-slate-500">Tap for detailed scope & pricing guide</p>
            </div>
            <button
              onClick={() => onSelectTab('services')}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-0.5"
            >
              <span>View All 8</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Scrollable Category Chips */}
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all active:scale-95 ${
                  activeCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-xs'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Filtered Service Cards Feed */}
          <div className="space-y-3 mt-3">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => onOpenServiceModal(service)}
                className="group p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-300 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-between gap-3 active:scale-[0.99]"
              >
                <div className="w-16 h-16 rounded-xl bg-slate-100 overflow-hidden shrink-0 relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-1 left-1 bg-black/60 text-white text-[8px] px-1 py-0.2 rounded font-bold">
                    {service.turnaround.split(' ')[0]}
                  </div>
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] font-bold uppercase text-brand-600 bg-brand-50 px-1.5 py-0.2 rounded">
                      {service.badge}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {service.priceEstimate}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-slate-900 truncate mt-0.5 group-hover:text-brand-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-brand-50 text-slate-400 group-hover:text-brand-600 flex items-center justify-center shrink-0 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Projects Gallery Scroll Preview */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-2.5">
            <div>
              <h2 className="text-base font-extrabold text-slate-900 tracking-tight">
                Recent Projects
              </h2>
              <p className="text-[11px] text-slate-500">Real craftsmanship across Riverside & Orange County</p>
            </div>
            <button
              onClick={() => onSelectTab('reviews')}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-0.5"
            >
              <span>Gallery</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-stretch gap-3 overflow-x-auto hide-scrollbar pb-2">
            {ASSETS.projects.slice(0, 4).map((proj) => (
              <div
                key={proj.id}
                className="w-56 shrink-0 rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs flex flex-col"
              >
                <div className="h-32 w-full relative bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-[9px] font-bold bg-black/60 text-white backdrop-blur-xs flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-brand-400" />
                    {proj.location}
                  </div>
                </div>
                <div className="p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-slate-900 line-clamp-1">
                      {proj.title}
                    </h3>
                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {proj.description}
                    </p>
                  </div>
                  <div className="mt-2 pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-brand-600 font-bold">
                    <span>{proj.category}</span>
                    <span className="text-slate-400">Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real Customer Testimonial Spotlight */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-lg relative overflow-hidden">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="text-xs font-bold text-amber-300">5.0 Star Feedback</span>
            </div>
            <span className="text-[10px] text-slate-400 font-medium">Thumbtack / Google</span>
          </div>

          <p className="text-xs text-slate-200 italic leading-relaxed">
            "{TESTIMONIALS[0].text.substring(0, 240)}..."
          </p>

          <div className="mt-4 pt-3 border-t border-slate-700/80 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <img
                src={TESTIMONIALS[0].avatar}
                alt={TESTIMONIALS[0].name}
                className="w-8 h-8 rounded-full object-cover border border-brand-400/50"
              />
              <div>
                <p className="text-xs font-bold text-white leading-none">{TESTIMONIALS[0].name}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{TESTIMONIALS[0].location}</p>
              </div>
            </div>

            <button
              onClick={() => onSelectTab('reviews')}
              className="text-[11px] font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1"
            >
              <span>All Reviews</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </div>

        {/* Service Area Cities Grid */}
        <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-xs">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-brand-600 shrink-0" />
            <div>
              <h3 className="text-xs font-bold text-slate-900">Service Coverage Area</h3>
              <p className="text-[10px] text-slate-500">All of Riverside County & surrounding communities</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {COMPANY_INFO.serviceAreas.map((city) => (
              <span
                key={city}
                className="px-2 py-1 rounded-lg bg-slate-100 text-slate-700 text-[10px] font-semibold flex items-center gap-1"
              >
                <span className="w-1 h-1 rounded-full bg-brand-500"></span>
                {city}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Consultation Banner */}
        <div className="p-4 rounded-3xl bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-md flex items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-black leading-tight">Need an Expert Opinion?</h3>
            <p className="text-[11px] text-brand-100 mt-0.5">Free in-person consultation & honest estimate</p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="px-3.5 py-2 rounded-xl bg-white text-brand-900 font-bold text-xs shadow-xs active:scale-95 transition-all shrink-0"
          >
            Get Free Quote
          </button>
        </div>
      </div>
    </div>
  );
}
