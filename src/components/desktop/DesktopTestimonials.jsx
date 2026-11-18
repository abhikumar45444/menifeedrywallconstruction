import React from 'react';
import { TESTIMONIALS } from '../../data/drywallData';
import { ASSETS } from '../../utils/assets';

export default function DesktopTestimonials({ onOpenConsultation }) {
  return (
    <section className="shell py-20 lg:py-28 border-b border-[#cccac3]" id="reviews" aria-labelledby="reviews-title">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow text-[#4b4c46]">
            <span className="dot"></span> CLIENT TESTIMONIALS
          </p>
          <h2 id="reviews-title" className="editorial-h2 text-[#151614] mt-4">
            Words from<br />
            our clients<span className="text-[#1188c4]">.</span>
          </h2>
        </div>

        <div className="flex items-center gap-4 bg-white p-3.5 border border-[#cccac3] shadow-xs">
          <img
            src={ASSETS.topProBadge}
            alt="Thumbtack Top Pro"
            className="w-10 h-10 object-contain border border-[#cccac3]"
          />
          <div className="font-mono text-xs">
            <span className="font-bold text-[#151614] block">5.0 / 5.0 STAR AVERAGE</span>
            <span className="text-[#4b4c46]">Thumbtack Top Pro &bull; Yelp &bull; Google</span>
          </div>
        </div>
      </div>

      {/* Grid of Verified Client Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <article
            key={t.id}
            className="bg-white p-6 lg:p-7 border border-[#cccac3] shadow-xs flex flex-col justify-between"
          >
            <div>
              {/* Star Rating and Project Type */}
              <div className="flex justify-between items-center pb-4 border-b border-[#e2e0d8] font-mono text-[11px]">
                <div className="flex text-amber-500 tracking-widest">
                  {'★'.repeat(t.rating)}
                </div>
                <span className="text-[#096899] font-medium uppercase truncate max-w-[180px]">
                  {t.service || t.project}
                </span>
              </div>

              {/* Review Text */}
              <p className="text-[15px] text-[#151614] leading-[1.6] mt-4 italic">
                &ldquo;{t.text || t.comment}&rdquo;
              </p>
            </div>

            {/* Author Footer */}
            <div className="pt-6 border-t border-[#e2e0d8] mt-6 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-3">
                {t.avatar && (
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-9 h-9 rounded-full object-cover border border-[#cccac3]"
                  />
                )}
                <div>
                  <strong className="font-bold text-[#151614] block not-italic font-sans">
                    {t.name}
                  </strong>
                  <span className="text-[#4b4c46] text-[11px]">{t.location}</span>
                </div>
              </div>
              <span className="text-[#096899] bg-[#096899]/10 px-2 py-0.5 text-[10px] font-bold shrink-0">
                VERIFIED
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
