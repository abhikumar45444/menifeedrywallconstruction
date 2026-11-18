import React from 'react';
import { ASSETS } from '../../utils/assets';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopAbout({ onOpenCallModal, onOpenConsultation }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="shell py-20 lg:py-28 border-b border-[#cccac3] dark:border-[#2b2d2a]" id="about" aria-labelledby="about-title">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Authentic Craftsmanship Photo */}
        <div className="lg:col-span-6">
          <figure className="relative w-full h-[clamp(340px,42vw,580px)] overflow-hidden bg-[#d3c9b8] dark:bg-[#1a1b18] border border-[#cccac3] dark:border-[#2b2d2a]">
            <img
              src="https://menifeedrywallconstruction.com/wp-content/uploads/2018/10/IMG_3384.jpg"
              alt="President and Owner Jessie Lisardo at Menifee Drywall Construction"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <figcaption className="absolute bottom-4 left-4 bg-[#f4f2ed] dark:bg-[#121312] border border-[#cccac3] dark:border-[#2b2d2a] px-3.5 py-2 font-mono text-[10px] font-medium tracking-[0.08em] flex items-center gap-2.5 text-[#151614] dark:text-[#f4f2ed]">
              <span className="dot"></span>
              <span>PRESIDENT / OWNER: JESSIE LISARDO &bull; OVER 20 YEARS EXP</span>
            </figcaption>
          </figure>
        </div>

        {/* Right: Authentic Story from the Original Website */}
        <div className="lg:col-span-6 space-y-6">
          <p className="eyebrow text-[#4b4c46] dark:text-[#a0a29c]">
            <span className="dot"></span> ABOUT US &bull; MENIFEE DRYWALL CONSTRUCTION
          </p>

          <h2 id="about-title" className="editorial-h2 text-[#151614] dark:text-[#f4f2ed]">
            Over Two Decades of<br />
            Drywall Excellence<span className="text-[#1188c4] dark:text-[#8bd4f6]">.</span>
          </h2>

          <div className="space-y-4 text-[16px] text-[#4b4c46] dark:text-[#a0a29c] leading-[1.6]">
            <p>
              <strong className="text-[#151614] dark:text-[#f4f2ed] font-semibold">Jessie Lisardo</strong> first got a taste of the drywall trade in high school, working as a general laborer for his uncle. As he continued to learn the trade, becoming a professional at hanging, taping, and finishing, Jessie developed a passion for the work and decided to turn it into his career.
            </p>
            <p>
              Now, over two decades later, Jessie is the owner of <strong className="text-[#151614] dark:text-[#f4f2ed] font-semibold">Menifee Drywall Construction</strong>, and he has tirelessly worked to make it the best of its kind in Riverside County. Whether your home or business is located in Moreno Valley, Corona, Temecula, or somewhere in between, you can trust Jessie and his team at Menifee Drywall Construction with all of your drywall needs.
            </p>
            <p>
              From homes to commercial properties to the smallest repair imaginable, we pride ourselves in doing things the right way, both in the field and as a reputable member of the business community. We take a great deal of satisfaction in the service provided to our general contractors as well as individual homeowners. We are committed to getting your project done in a timely manner without sacrificing quality.
            </p>
            <p className="font-semibold text-[#151614] dark:text-[#f4f2ed] italic pt-1">
              &ldquo;It would be our privilege to be a part of your project!&rdquo;
            </p>
          </div>

          {/* Authentic Monospace Badges */}
          <div className="grid grid-cols-3 gap-4 border-y border-[#cccac3] dark:border-[#2b2d2a] py-5 font-mono text-[11px] text-[#151614] dark:text-[#f4f2ed]">
            <div>
              <span className="text-xl lg:text-2xl font-bold font-sans block text-[#096899] dark:text-[#8bd4f6]">20+</span>
              <span className="text-[#4b4c46] dark:text-[#a0a29c] text-[10px] uppercase">Years Experience</span>
            </div>
            <div>
              <span className="text-xl lg:text-2xl font-bold font-sans block text-[#096899] dark:text-[#8bd4f6]">Riverside</span>
              <span className="text-[#4b4c46] dark:text-[#a0a29c] text-[10px] uppercase">County &amp; Beyond</span>
            </div>
            <div>
              <span className="text-xl lg:text-2xl font-bold font-sans block text-[#096899] dark:text-[#8bd4f6]">Top Pro</span>
              <span className="text-[#4b4c46] dark:text-[#a0a29c] text-[10px] uppercase">Thumbtack Award</span>
            </div>
          </div>

          <div className="pt-2 flex items-center gap-6">
            <button
              onClick={() => scrollTo('contact')}
              className="ref-link text-[#151614] dark:text-[#f4f2ed] hover:text-[#096899] dark:hover:text-[#8bd4f6] cursor-pointer"
            >
              <span>Schedule a free consultation</span>
              <span aria-hidden="true">↘</span>
            </button>
            <button
              onClick={onOpenCallModal}
              className="font-mono text-xs text-[#096899] dark:text-[#8bd4f6] hover:underline cursor-pointer"
            >
              Call Today! 951-746-8891
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
