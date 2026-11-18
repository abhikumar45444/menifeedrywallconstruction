import React from 'react';
import { Star, MapPin, ThumbsUp, Quote, Award } from 'lucide-react';
import { TESTIMONIALS } from '../../data/drywallData';
import { ASSETS } from '../../utils/assets';

export default function DesktopTestimonials({ onOpenConsultation }) {
  return (
    <section id="reviews" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading & Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider mb-3">
              <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>Verified Client Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              See What Our Customers Have to Say
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl text-base">
              Over two decades of 5-star ratings across Thumbtack, Google, and word-of-mouth recommendations throughout Riverside County.
            </p>
          </div>

          <div className="flex items-center gap-4 bg-slate-50 border border-slate-200 p-3.5 rounded-2xl shadow-xs">
            <img
              src={ASSETS.topProBadge}
              alt="Thumbtack Top Pro Badge"
              className="w-12 h-12 object-contain rounded-xl"
            />
            <div>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-black text-slate-900 mt-0.5">5.0 Star Rating (140+ Reviews)</p>
              <p className="text-[10px] text-slate-500">100% Verified Customer Satisfaction</p>
            </div>
          </div>
        </div>

        {/* 3-Column Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-slate-50 rounded-3xl p-6 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Header with avatar & name */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-xs"
                    />
                    <div>
                      <h3 className="text-sm font-extrabold text-slate-900 leading-tight">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-slate-500 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        <span>{item.location}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Service Tag */}
                <div className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-50 text-brand-700 border border-brand-100 mb-3">
                  Job: {item.service}
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  "{item.text}"
                </p>
              </div>

              {/* Bottom Verified Badge */}
              <div className="mt-5 pt-4 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <ThumbsUp className="w-3.5 h-3.5 text-brand-600" />
                  <span>Verified Customer Story</span>
                </span>
                <span className="font-semibold text-slate-400">{item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
