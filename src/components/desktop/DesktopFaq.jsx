import React, { useState } from 'react';

export default function DesktopFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'Do you take on small drywall repairs and single patches?',
      a: 'Yes. Jessie regularly takes on smaller repairs—from single doorknob punctures and ceiling stress cracks to small drywall cutouts made during electrical or plumbing work. No job is too small to deserve proper craftsmanship.'
    },
    {
      q: 'Can you match our existing texture so the patch is invisible?',
      a: 'Absolutely. Texture matching is Jessie’s recognized specialty. Whether your home features orange peel, knockdown, heavy hand trowel, or smooth finish, we feather the repair into surrounding paint so you cannot tell where the damage was.'
    },
    {
      q: 'How do you keep the workspace clean and contain drywall dust?',
      a: 'We set up heavy-duty poly plastic containment, lay floor protection along all access paths, and use dust-shrouded sanding pads. When the job is finished, we vacuum and leave the area completely broom-clean.'
    },
    {
      q: 'Where do you work across Southern California?',
      a: 'We are based in Menifee, CA and serve all of Riverside County (Murrieta, Temecula, Lake Elsinore, Wildomar, Corona, Hemet, Perris, Riverside) and Orange County.'
    },
    {
      q: 'Do you offer free estimates or same-day dispatch for escrow / water leaks?',
      a: 'Yes. We offer free estimates either over the phone with photos or through a quick on-site consultation. For urgent escrow inspection deadlines and active plumbing cutouts, same-day dispatch is available.'
    }
  ];

  return (
    <section className="shell py-20 lg:py-28 border-b border-[#cccac3]" id="faq" aria-labelledby="faq-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
        {/* Left Column: Heading */}
        <div className="lg:col-span-5">
          <p className="eyebrow text-[#4b4c46]">
            <span className="dot"></span> COMMON QUESTIONS
          </p>
          <h2 id="faq-title" className="editorial-h2 text-[#151614] mt-4">
            Good to know<span className="text-[#1188c4]">.</span>
          </h2>
          <p className="text-[17px] text-[#4b4c46] leading-relaxed mt-4 max-w-sm">
            Everything you need to know about our repair process, texture matching guarantees, and job site protection.
          </p>
        </div>

        {/* Right Column: Editorial Minimal Accordion with + and − */}
        <div className="lg:col-span-7 divide-y divide-[#cccac3] border-y border-[#cccac3]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className={`text-lg font-semibold tracking-tight transition-colors ${
                    isOpen ? 'text-[#096899]' : 'text-[#151614] group-hover:text-[#096899]'
                  }`}>
                    {faq.q}
                  </span>
                  <span className="font-mono text-xl text-[#096899] font-normal leading-none pl-4">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="pt-3 pr-6 animate-fade-in">
                    <p className="text-[15px] text-[#4b4c46] leading-[1.6]">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
