import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/drywallData';
import { ASSETS } from '../../utils/assets';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DesktopTestimonials({ onOpenConsultation }) {
  // Page state: 3 cards per view (2 pages total for 6 reviews)
  const [currentPage, setCurrentPage] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const pageSize = 3;
  const totalPages = Math.ceil(TESTIMONIALS.length / pageSize);
  const currentReviews = TESTIMONIALS.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  // Curated punchy excerpts for clean minimal display
  const getExcerpt = (text, maxLength = 135) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + '…';
  };

  return (
    <section className="shell py-16 lg:py-20 border-b border-[#cccac3]" id="reviews" aria-labelledby="reviews-title">
      {/* 1. Minimal Header with Slider Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="eyebrow text-[#4b4c46]">
            <span className="dot"></span> CLIENT REVIEWS
          </p>
          <h2 id="reviews-title" className="editorial-h2 text-[#151614] mt-3">
            Words from our clients<span className="text-[#1188c4]">.</span>
          </h2>
        </div>

        {/* Minimal Controls: Rating Pill & Page Stepper */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2.5 bg-white px-3.5 py-2 border border-[#cccac3] font-mono text-xs">
            <span className="text-amber-500 tracking-wider">★★★★★</span>
            <span className="text-[#151614] font-bold">5.0 / 5.0</span>
            <span className="text-[#73756d]">&bull; Thumbtack Top Pro</span>
          </div>

          {/* Prev / Next Minimal Buttons */}
          <div className="flex items-center border border-[#cccac3] bg-white">
            <button
              onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
              className="p-2.5 text-[#151614] hover:bg-[#f4f2ed] transition-colors border-r border-[#cccac3] cursor-pointer"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3 font-mono text-[11px] text-[#4b4c46]">
              0{currentPage + 1} / 0{totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
              className="p-2.5 text-[#151614] hover:bg-[#f4f2ed] transition-colors cursor-pointer"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Compact 3-Card Minimal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentReviews.map((t) => {
          const isExpanded = expandedId === t.id;
          return (
            <article
              key={t.id}
              className="bg-white p-6 border border-[#cccac3] shadow-xs flex flex-col justify-between transition-all hover:border-[#151614]"
            >
              <div>
                {/* Minimal Top Tag: Service & Rating */}
                <div className="flex justify-between items-center pb-3 border-b border-[#e2e0d8] font-mono text-[10px]">
                  <span className="text-[#096899] font-medium uppercase tracking-wider truncate max-w-[170px]">
                    {t.service}
                  </span>
                  <span className="text-amber-500 tracking-widest shrink-0">
                    {'★'.repeat(t.rating)}
                  </span>
                </div>

                {/* Minimal Punchy Review Quote */}
                <p className="text-[14px] text-[#151614] leading-[1.55] mt-3.5 italic">
                  &ldquo;{isExpanded ? t.text : getExcerpt(t.text)}&rdquo;
                </p>

                {t.text.length > 135 && (
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : t.id)}
                    className="font-mono text-[10px] text-[#096899] hover:underline mt-1.5 cursor-pointer block"
                  >
                    {isExpanded ? 'Show less' : 'Read full &rarr;'}
                  </button>
                )}
              </div>

              {/* Minimal Author Footer */}
              <div className="pt-4 border-t border-[#e2e0d8] mt-4 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2.5">
                  {t.avatar && (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-7 h-7 rounded-full object-cover border border-[#cccac3]"
                    />
                  )}
                  <div>
                    <strong className="font-bold text-[#151614] block not-italic text-xs font-sans">
                      {t.name}
                    </strong>
                    <span className="text-[#73756d] text-[10px]">{t.location}</span>
                  </div>
                </div>
                <span className="font-mono text-[9px] text-emerald-700 bg-emerald-50 border border-emerald-200 px-1.5 py-0.5 font-semibold">
                  VERIFIED
                </span>
              </div>
            </article>
          );
        })}
      </div>

      {/* 3. Subtle Monospace Verification Ticker */}
      <div className="mt-8 pt-4 border-t border-[#cccac3] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#73756d]">
        <span>&bull; ALL REVIEWS WRITTEN BY VERIFIED HOMEOWNERS IN RIVERSIDE &amp; ORANGE COUNTY</span>
        <button
          onClick={onOpenConsultation}
          className="text-[#151614] hover:text-[#096899] font-bold text-xs underline underline-offset-4 cursor-pointer"
        >
          Ready to start your project? Request free quote &rarr;
        </button>
      </div>
    </section>
  );
}
