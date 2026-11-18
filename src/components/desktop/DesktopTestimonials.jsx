import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/drywallData';
import { ChevronLeft, ChevronRight, X, Star } from 'lucide-react';

export default function DesktopTestimonials({ onOpenConsultation }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);

  // Curated punchy quotes paired with the complete full-length authentic review
  const reviewsData = [
    {
      id: 'rev-1',
      name: 'Jenny E.',
      location: 'Murrieta, CA',
      rating: 5,
      date: 'Verified Client',
      avatar: TESTIMONIALS[0]?.avatar,
      service: 'Urgent Escrow Leak Patch',
      preview: 'Quick to respond at 9 PM, arrived right on time, and did flawless repair work for a very reasonable price.',
      fullText: TESTIMONIALS[0]?.text
    },
    {
      id: 'rev-2',
      name: 'Jeff V.',
      location: 'Riverside County, CA',
      rating: 5,
      date: 'Verified Homeowner',
      avatar: TESTIMONIALS[1]?.avatar,
      service: 'Ceiling Mud, Tape & Texture',
      preview: 'Fair pricing, on-time arrival, and great attention to detail across our 240 sq ft ceiling project.',
      fullText: TESTIMONIALS[1]?.text
    },
    {
      id: 'rev-3',
      name: 'Andi Shepherd Albright',
      location: 'Corona, CA',
      rating: 5,
      date: 'Verified Client',
      avatar: TESTIMONIALS[2]?.avatar,
      service: 'Water Damage Restoration',
      preview: 'Matched the texture in our daughter’s room perfectly after a leak. A true professional and pleasure to work with.',
      fullText: TESTIMONIALS[2]?.text
    },
    {
      id: 'rev-4',
      name: 'Jen Milner',
      location: 'Temecula, CA',
      rating: 5,
      date: 'Verified Homeowner',
      avatar: TESTIMONIALS[3]?.avatar,
      service: 'Bathroom Remodel Drywall',
      preview: 'The texturing is exactly the same as original. Seamless finish exceeding expectations—will definitely rehire!',
      fullText: TESTIMONIALS[3]?.text
    },
    {
      id: 'rev-5',
      name: 'Kristi Townsend',
      location: 'Murrieta Valley, CA',
      rating: 5,
      date: 'Community / Residential',
      avatar: TESTIMONIALS[4]?.avatar,
      service: 'Kitchen Can Lights & Patch',
      preview: 'You cannot tell where it was patched between old and new. Fast, respectful, and spotless clean-up.',
      fullText: TESTIMONIALS[4]?.text
    },
    {
      id: 'rev-6',
      name: 'Natalie Flores Valenzuela',
      location: 'Menifee, CA',
      rating: 5,
      date: 'Verified Client',
      avatar: TESTIMONIALS[5]?.avatar,
      service: 'Interior Wall Finishing',
      preview: 'Our two interior walls turned out completely flawless. The quality of his taping and mudding speaks for itself.',
      fullText: TESTIMONIALS[5]?.text
    }
  ];

  const pageSize = 3;
  const totalPages = Math.ceil(reviewsData.length / pageSize);
  const currentReviews = reviewsData.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <section className="shell py-16 lg:py-20 border-b border-[#cccac3] dark:border-[#2b2d2a]" id="reviews" aria-labelledby="reviews-title">
      {/* 1. Minimal Editorial Header with Stepper Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <p className="eyebrow text-[#4b4c46] dark:text-[#a0a29c]">
            <span className="dot"></span> CUSTOMER TESTIMONIALS
          </p>
          <h2 id="reviews-title" className="editorial-h2 text-[#151614] dark:text-[#f4f2ed] mt-3">
            Client Testimonials<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span>
          </h2>
          <p className="font-mono text-xs text-[#096899] dark:text-[#8bd4f6] uppercase tracking-wider mt-2">
            Verified Reviews from Riverside County Homeowners
          </p>
        </div>

        {/* Minimal Controls: Rating Pill & Page Stepper */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2.5 bg-white dark:bg-[#1a1b18] px-3.5 py-2 border border-[#cccac3] dark:border-[#2b2d2a] font-mono text-xs shadow-xs text-[#151614] dark:text-[#f4f2ed]">
            <span className="text-amber-500 tracking-wider">★★★★★</span>
            <span className="font-bold">5.0 / 5.0</span>
            <span className="text-[#73756d] dark:text-[#9e9d96]">&bull; Thumbtack Top Pro</span>
          </div>

          {/* Prev / Next Minimal Buttons */}
          <div className="flex items-center border border-[#cccac3] dark:border-[#2b2d2a] bg-white dark:bg-[#1a1b18] shadow-xs">
            <button
              onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
              className="p-2.5 text-[#151614] dark:text-[#f4f2ed] hover:bg-[#f4f2ed] dark:hover:bg-[#252723] transition-colors border-r border-[#cccac3] dark:border-[#2b2d2a] cursor-pointer"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3.5 font-mono text-[11px] text-[#4b4c46] dark:text-[#a0a29c]">
              0{currentPage + 1} / 0{totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0))}
              className="p-2.5 text-[#151614] dark:text-[#f4f2ed] hover:bg-[#f4f2ed] dark:hover:bg-[#252723] transition-colors cursor-pointer"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 2. Compact 3-Card Minimal Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentReviews.map((t) => (
          <article
            key={t.id}
            className="bg-[#fcfbf9] dark:bg-[#161715] p-6 border border-[#cccac3] dark:border-[#2b2d2a] flex flex-col justify-between transition-colors hover:border-[#151614] dark:hover:border-white group"
          >
            <div>
              {/* Minimal Top Tag: Service & Rating */}
              <div className="flex justify-between items-center pb-3 border-b border-[#e2e0d8] dark:border-[#2b2d2a] font-mono text-[10px]">
                <span className="text-[#096899] dark:text-[#8bd4f6] font-medium uppercase tracking-wider truncate max-w-[170px]">
                  {t.service}
                </span>
                <span className="text-amber-500 tracking-widest shrink-0">
                  {'★'.repeat(t.rating)}
                </span>
              </div>

              {/* Minimal Punchy Review Quote */}
              <p className="text-[14px] text-[#151614] dark:text-[#e5e4de] leading-[1.6] mt-3.5 italic">
                &ldquo;{t.preview}&rdquo;
              </p>

              {/* Read Full Review Modal Trigger */}
              <button
                type="button"
                onClick={() => setSelectedReview(t)}
                className="inline-flex items-center gap-1 font-mono text-[11px] text-[#096899] dark:text-[#8bd4f6] hover:text-[#075176] dark:hover:text-white font-semibold mt-3 cursor-pointer group-hover:underline"
              >
                <span>Read full review</span>
                <span aria-hidden="true" className="text-xs">↗</span>
              </button>
            </div>

            {/* Minimal Author Footer */}
            <div className="pt-4 border-t border-[#e2e0d8] dark:border-[#2b2d2a] mt-5 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2.5">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-7 h-7 rounded-full object-cover border border-[#cccac3] dark:border-[#383a36]"
                  />
                )}
                <div>
                  <strong className="font-bold text-[#151614] dark:text-[#f4f2ed] block not-italic text-xs font-sans">
                    {t.name}
                  </strong>
                  <span className="text-[#73756d] dark:text-[#9e9d96] text-[10px]">{t.location}</span>
                </div>
              </div>
              <span className="font-mono text-[9px] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-1.5 py-0.5 font-semibold">
                VERIFIED
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* 3. Subtle Monospace Verification Ticker */}
      <div className="mt-8 pt-4 border-t border-[#cccac3] dark:border-[#2b2d2a] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#73756d] dark:text-[#a0a29c]">
        <span>&bull; ALL REVIEWS WRITTEN BY VERIFIED HOMEOWNERS IN RIVERSIDE &amp; ORANGE COUNTY</span>
        <button
          onClick={onOpenConsultation}
          className="ref-link text-[#151614] dark:text-[#f4f2ed] hover:text-[#096899] dark:hover:text-[#8bd4f6] cursor-pointer"
        >
          <span>Ready to start your project? Request free quote</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>

      {/* 4. Full Review Modal Dialog */}
      {selectedReview && (
        <div
          className="fixed inset-0 z-50 bg-[#101110]/80 backdrop-blur-sm flex items-center justify-center p-4 lg:p-8"
          onClick={() => setSelectedReview(null)}
        >
          <div
            className="relative w-full max-w-xl bg-[#f4f2ed] dark:bg-[#1a1b18] border border-[#cccac3] dark:border-[#383a36] p-6 lg:p-8 shadow-2xl space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedReview(null)}
              className="absolute top-4 right-4 w-9 h-9 bg-white dark:bg-[#252723] border border-[#cccac3] dark:border-[#383a36] flex items-center justify-center text-[#151614] dark:text-[#f4f2ed] hover:bg-[#151614] hover:text-white dark:hover:bg-white dark:hover:text-[#151614] transition-colors cursor-pointer"
              aria-label="Close review"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3.5 pr-10">
              {selectedReview.avatar && (
                <img
                  src={selectedReview.avatar}
                  alt={selectedReview.name}
                  className="w-12 h-12 rounded-full object-cover border border-[#cccac3] dark:border-[#383a36]"
                />
              )}
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-bold font-sans text-[#151614] dark:text-[#f4f2ed]">
                    {selectedReview.name}
                  </h3>
                  <span className="font-mono text-[9px] text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 px-1.5 py-0.5 font-semibold">
                    VERIFIED
                  </span>
                </div>
                <p className="font-mono text-xs text-[#4b4c46] dark:text-[#a0a29c] mt-0.5">
                  {selectedReview.location} &bull; {selectedReview.service}
                </p>
              </div>
            </div>

            {/* Star Rating & Project Badge */}
            <div className="flex items-center justify-between border-y border-[#cccac3] dark:border-[#2b2d2a] py-2.5 font-mono text-xs">
              <span className="text-amber-500 tracking-wider text-sm">
                {'★'.repeat(selectedReview.rating)} (5.0 / 5.0)
              </span>
              <span className="text-[#096899] dark:text-[#8bd4f6] font-medium">
                {selectedReview.date}
              </span>
            </div>

            {/* Full Story Content */}
            <div className="max-h-[50vh] overflow-y-auto pr-2">
              <p className="text-[15px] text-[#151614] dark:text-[#f4f2ed] leading-[1.7] italic">
                &ldquo;{selectedReview.fullText}&rdquo;
              </p>
            </div>

            {/* Modal Footer Action */}
            <div className="pt-4 border-t border-[#cccac3] dark:border-[#2b2d2a] flex items-center justify-between">
              <span className="font-mono text-[11px] text-[#73756d] dark:text-[#a0a29c]">
                Thumbtack Top Pro &bull; Verified Homeowner
              </span>
              <button
                onClick={() => {
                  setSelectedReview(null);
                  onOpenConsultation();
                }}
                className="ref-button text-xs py-2.5 px-4 cursor-pointer"
              >
                <span>Get a Free Quote</span>
                <span className="text-sm">↗</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
