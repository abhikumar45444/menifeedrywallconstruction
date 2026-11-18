import React from 'react';
import { ASSETS } from '../../utils/assets';

export default function DesktopCustomerService({ onOpenConsultation, onOpenCallModal }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="shell py-20 lg:py-24 border-b border-[#cccac3] dark:border-[#2b2d2a]" aria-labelledby="service-promise-title">
      <div className="bg-white dark:bg-[#1a1b18] border border-[#cccac3] dark:border-[#2b2d2a] p-8 lg:p-14 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-5">
            <p className="eyebrow text-[#4b4c46] dark:text-[#a0a29c]">
              <span className="dot"></span> OUR HIGHEST PRIORITY
            </p>
            <h2 id="service-promise-title" className="editorial-h2 text-[#151614] dark:text-[#f4f2ed]">
              The Customer Service<br />
              You Deserve<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span>
            </h2>
            <p className="font-mono text-sm text-[#096899] dark:text-[#8bd4f6] font-semibold uppercase tracking-wider">
              Never settle for less than the best, especially when it comes to your home or business
            </p>
            <p className="text-[16px] text-[#4b4c46] dark:text-[#a0a29c] leading-[1.6] max-w-2xl">
              At Menifee Drywall Construction, customer service is our highest priority. We understand how important it is to complete drywall projects in a timely manner, as well as to ensure they are exactly what you envisioned. Our team is dedicated to working closely with each customer throughout the duration of the project in order to make sure it is a success. Don’t believe us? Take a look at our customer testimonials to see for yourself.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <button
                onClick={() => scrollTo('reviews')}
                className="ref-link text-[#151614] dark:text-[#f4f2ed] hover:text-[#096899] dark:hover:text-[#8bd4f6] cursor-pointer"
              >
                <span>Read our customer testimonials</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <button
                onClick={onOpenConsultation}
                className="ref-button dark:bg-[#1188c4] dark:hover:bg-[#096899] cursor-pointer"
              >
                <span>Schedule a Free Consultation</span>
                <span aria-hidden="true">↗</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-[#f4f2ed] dark:bg-[#121312] border border-[#cccac3] dark:border-[#2b2d2a] text-center space-y-4">
            <img
              src={ASSETS.topProBadge}
              alt="Thumbtack Top Pro"
              className="w-20 h-20 object-contain border border-[#cccac3] dark:border-[#2b2d2a] bg-white p-1"
            />
            <div>
              <span className="font-bold text-base text-[#151614] dark:text-[#f4f2ed] block">
                Thumbtack Top Pro
              </span>
              <span className="font-mono text-xs text-[#096899] dark:text-[#8bd4f6] uppercase">
                Awarded for Customer Service &amp; Quality
              </span>
            </div>
            <p className="font-mono text-xs text-[#4b4c46] dark:text-[#a0a29c]">
              Over 20 Years Delivering Superior Drywall Work Across Riverside County
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
