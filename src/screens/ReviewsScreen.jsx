import React, { useState } from 'react';
import { 
  Star, MapPin, CheckCircle2, ShieldCheck, Phone, 
  ExternalLink, ThumbsUp, Filter, MessageSquare, Image as ImageIcon, X
} from 'lucide-react';
import { TESTIMONIALS, COMPANY_INFO } from '../data/drywallData';
import { ASSETS } from '../utils/assets';

export default function ReviewsScreen({ onOpenCallModal, onOpenConsultation }) {
  const [activeSubTab, setActiveSubTab] = useState('reviews'); // 'reviews' | 'gallery'
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="w-full flex-1 overflow-y-auto smooth-scroll bg-slate-50 pb-28">
      {/* Top Banner */}
      <div className="p-5 bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-6">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="flex text-amber-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="text-xs font-bold text-amber-300">5.0 Star Rating</span>
        </div>

        <h1 className="text-xl font-black tracking-tight text-white">
          Client Feedback & Project Gallery
        </h1>
        <p className="text-xs text-slate-300 mt-0.5">
          Authentic testimonials and completed drywall jobs across Riverside & Orange County.
        </p>

        {/* Sub-Tab Navigation */}
        <div className="flex items-center p-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 mt-4">
          <button
            onClick={() => setActiveSubTab('reviews')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'reviews'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Testimonials ({TESTIMONIALS.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('gallery')}
            className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
              activeSubTab === 'gallery'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>Job Gallery ({ASSETS.projects.length})</span>
          </button>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {activeSubTab === 'reviews' ? (
          /* Testimonials Stream */
          <div className="space-y-3.5">
            {/* Top Pro Rating Banner */}
            <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-xs flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src={ASSETS.topProBadge}
                  alt="Thumbtack Top Pro Badge"
                  className="w-12 h-12 rounded-xl object-contain border border-slate-100"
                />
                <div>
                  <h3 className="text-xs font-black text-slate-900 leading-tight">Thumbtack Top Pro & 5-Star Local</h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">Awarded for punctuality, quality, and fair pricing</p>
                </div>
              </div>
              <div className="text-right shrink-0">
                <span className="text-lg font-black text-slate-900">100%</span>
                <p className="text-[9px] text-emerald-600 font-bold uppercase">Satisfaction</p>
              </div>
            </div>

            {/* Testimonials List */}
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3 hover:border-slate-300 transition-all"
              >
                {/* Review Header */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200"
                    />
                    <div>
                      <h4 className="text-xs font-extrabold text-slate-900 leading-none">
                        {item.name}
                      </h4>
                      <p className="text-[10px] text-slate-500 mt-1 flex items-center gap-1">
                        <MapPin className="w-2.5 h-2.5 text-slate-400" />
                        {item.location}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end">
                    <div className="flex text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[9px] font-bold text-emerald-600 mt-0.5">
                      {item.date}
                    </span>
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-50 text-brand-700 border border-brand-100">
                  Project: {item.service}
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-700 leading-relaxed font-normal">
                  "{item.text}"
                </p>

                {/* Bottom Trust verification */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="flex items-center gap-1 text-slate-500">
                    <ThumbsUp className="w-3 h-3 text-brand-600" /> Verified Customer Story
                  </span>
                  <span className="text-brand-600 font-semibold">Menifee Drywall Construction</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Project Gallery Grid */
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {ASSETS.projects.map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => setSelectedProject(proj)}
                  className="group rounded-2xl bg-white border border-slate-200/80 overflow-hidden shadow-xs cursor-pointer hover:shadow-md transition-all flex flex-col active:scale-[0.98]"
                >
                  <div className="relative h-28 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-1.5 left-1.5 px-2 py-0.5 rounded-md bg-black/60 text-white text-[9px] font-bold backdrop-blur-xs flex items-center gap-1">
                      <MapPin className="w-2.5 h-2.5 text-brand-400" />
                      {proj.location.split(',')[0]}
                    </div>
                  </div>

                  <div className="p-2.5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] font-bold text-brand-600 uppercase">
                        {proj.category}
                      </span>
                      <h4 className="text-[11px] font-bold text-slate-900 line-clamp-1 mt-0.5">
                        {proj.title}
                      </h4>
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1 line-clamp-1">
                      Tap to enlarge photo
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Image Lightbox Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 animate-island">
            <div className="relative max-w-sm w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black text-white z-10 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="h-64 w-full bg-black flex items-center justify-center">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="p-4 text-white">
                <div className="flex items-center gap-2 text-xs text-brand-400 font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{selectedProject.location}</span>
                  <span>&bull;</span>
                  <span>{selectedProject.category}</span>
                </div>
                <h3 className="text-sm font-black leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {selectedProject.description}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center gap-2">
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      onOpenConsultation();
                    }}
                    className="flex-1 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs"
                  >
                    Request Similar Work
                  </button>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA for Reviews */}
        <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-xs text-center space-y-2">
          <h3 className="text-xs font-bold text-slate-900">Ready to join our happy clients?</h3>
          <p className="text-[11px] text-slate-500 max-w-xs mx-auto">
            Call or text Jessie Lisardo today for a friendly, no-pressure drywall assessment.
          </p>
          <div className="flex items-center justify-center gap-2 pt-1">
            <button
              onClick={onOpenCallModal}
              className="px-4 py-2 rounded-xl bg-brand-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-current" />
              <span>Call (951) 746-8891</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
