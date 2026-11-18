import React, { useState } from 'react';
import Reveal from '../Reveal';

export default function DesktopFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Do you take on small drywall repairs and single patches?',
      a: 'Yes. Jessie regularly repairs small damages—from single doorknob strike-throughs and ceiling stress cracks to inspection cuts from plumbing or electrical repairs.'
    },
    {
      q: 'Can you match my existing wall or ceiling texture?',
      a: 'Yes. Texture matching is Jessie’s recognized specialty. Whether your home has orange peel, knockdown, skip trowel, or a smooth finish, we blend the repair so seams disappear under paint.'
    },
    {
      q: 'How do you contain drywall dust during repair?',
      a: 'We hang poly-plastic draping to isolate the work area, lay heavy drop cloths across walking paths, and use dust-contained sanding pads to leave your home clean.'
    },
    {
      q: 'Where do you work in Riverside County?',
      a: 'We serve Menifee, Murrieta, Temecula, Lake Elsinore, Wildomar, Corona, Hemet, Perris, and surrounding Inland Empire communities.'
    },
    {
      q: 'Do you offer free estimates or urgent leak dispatch?',
      a: 'Yes. Free estimates are provided either via photo submission or quick on-site consultation. For urgent escrow closing repairs and water leaks, same-day dispatch is prioritized.'
    }
  ];

  return (
    <section className="bg-[#FFFFFF] dark:bg-[#121312] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="faq" aria-labelledby="faq-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Heading & Micro-Label */}
          <div className="lg:col-span-5">
            <Reveal delay={0}>
              <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                COMMON QUESTIONS
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h2 
                id="faq-title" 
                className="text-3xl lg:text-4xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-2"
              >
                Good to know<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed mt-4 max-w-sm">
                Common questions about our repair process, texture matching guarantees, and dust containment.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Minimal Vertical List with + / − Toggles */}
          <div className="lg:col-span-7 divide-y divide-neutral-200 dark:divide-neutral-800 border-y border-neutral-200 dark:border-neutral-800">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <Reveal key={index} delay={index * 60}>
                  <div className="py-5">
                    <button
                      onClick={() => setOpenIndex(isOpen ? -1 : index)}
                      className="w-full flex items-center justify-between text-left group cursor-pointer"
                    >
                      <span className={`text-lg font-semibold tracking-tight transition-colors ${
                        isOpen 
                          ? 'text-[#096899] dark:text-[#8bd4f6]' 
                          : 'text-neutral-950 dark:text-white group-hover:text-[#096899] dark:group-hover:text-[#8bd4f6]'
                      }`}>
                        {faq.q}
                      </span>
                      <span className="font-mono text-xl text-neutral-400 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors leading-none pl-4">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    {isOpen && (
                      <div className="pt-3 pr-6 animate-fade-in">
                        <p className="text-[15px] text-neutral-600 dark:text-neutral-300 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
