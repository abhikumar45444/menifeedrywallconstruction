import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/drywallData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function DesktopTestimonials({ onOpenConsultation }) {
  const [currentPage, setCurrentPage] = useState(0);

  // Complete, punchy authentic quotes extracted from real homeowner reviews
  const punchyReviews = [
    {
      id: 'rev-1',
      name: 'Jenny E.',
      location: 'Murrieta, CA',
      rating: 5,
      avatar: TESTIMONIALS[0]?.avatar,
      service: 'Urgent Escrow Leak Patch',
      quote: 'Jessie saved the day on our move-out escrow deadline. He was quick to respond at 9 PM, arrived right on time, and did flawless repair work for a very reasonable price.'
    },
    {
      id: 'rev-2',
      name: 'Jeff V.',
      location: 'Riverside County, CA',
      rating: 5,
      avatar: TESTIMONIALS[1]?.avatar,
      service: 'Ceiling Mud, Tape & Texture',
      quote: 'Fair pricing, on-time arrival, and great attention to detail across our 240 sq ft ceiling project. I was really happy with the craftsmanship and highly recommend him.'
    },
    {
      id: 'rev-3',
      name: 'Andi S.',
      location: 'Corona, CA',
      rating: 5,
      avatar: TESTIMONIALS[2]?.avatar,
      service: 'Water Damage Restoration',
      quote: 'Water heater burst affected three rooms. Jessie matched the texture in our daughter’s room perfectly. A true professional and an absolute pleasure to work with.'
    },
    {
      id: 'rev-4',
      name: 'Jen Milner',
      location: 'Temecula, CA',
      rating: 5,
      avatar: TESTIMONIALS[3]?.avatar,
      service: 'Bathroom Remodel Drywall',
      quote: 'The texturing is EXACTLY the same as the original texture. I really was not expecting it to be this seamless—he exceeded all my expectations. Will definitely rehire!'
    },
    {
      id: 'rev-5',
      name: 'Kristi Townsend',
      location: 'Murrieta Valley, CA',
      rating: 5,
      avatar: TESTIMONIALS[4]?.avatar,
      service: 'Kitchen Can Lights & Patch',
      quote: 'Redid our kitchen ceiling after can lighting was installed—you cannot tell where it was patched between old and new! Fast, respectful, and spotless clean-up.'
    },
    {
      id: 'rev-6',
      name: 'Natalie F.',
      location: 'Menifee, CA',
      rating: 5,
      avatar: TESTIMONIALS[5]?.avatar,
      service: 'Interior Wall Finishing',
      quote: 'Jessie is very professional and friendly. Our two interior walls turned out completely flawless and timely. The quality of his taping and mudding speaks for itself.'
    }
  ];

  const pageSize = 3;
  const totalPages = Math.ceil(punchyReviews.length / pageSize);
  const currentReviews = punchyReviews.slice(currentPage * pageSize, (currentPage + 1) * pageSize);

  return (
    <section className="shell py-16 lg:py-20 border-b border-[#cccac3]" id="reviews" aria-labelledby="reviews-title">
      {/* 1. Minimal Editorial Header with Stepper Controls */}
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
          <div className="hidden sm:flex items-center gap-2.5 bg-white px-3.5 py-2 border border-[#cccac3] font-mono text-xs shadow-xs">
            <span className="text-amber-500 tracking-wider">★★★★★</span>
            <span className="text-[#151614] font-bold">5.0 / 5.0</span>
            <span className="text-[#73756d]">&bull; Thumbtack Top Pro</span>
          </div>

          {/* Prev / Next Minimal Buttons */}
          <div className="flex items-center border border-[#cccac3] bg-white shadow-xs">
            <button
              onClick={() => setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1))}
              className="p-2.5 text-[#151614] hover:bg-[#f4f2ed] transition-colors border-r border-[#cccac3] cursor-pointer"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="px-3.5 font-mono text-[11px] text-[#4b4c46]">
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
        {currentReviews.map((t) => (
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
              <p className="text-[14px] text-[#151614] leading-[1.6] mt-3.5 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Minimal Author Footer */}
            <div className="pt-4 border-t border-[#e2e0d8] mt-5 flex items-center justify-between font-mono text-xs">
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
        ))}
      </div>

      {/* 3. Subtle Monospace Verification Ticker */}
      <div className="mt-8 pt-4 border-t border-[#cccac3] flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-[#73756d]">
        <span>&bull; ALL REVIEWS WRITTEN BY VERIFIED HOMEOWNERS IN RIVERSIDE &amp; ORANGE COUNTY</span>
        <button
          onClick={onOpenConsultation}
          className="ref-link text-[#151614] hover:text-[#096899] cursor-pointer"
        >
          <span>Ready to start your project? Request free quote</span>
          <span aria-hidden="true">↗</span>
        </button>
      </div>
    </section>
  );
}
