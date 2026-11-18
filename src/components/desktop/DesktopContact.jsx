import React from 'react';
import { Mail, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopContact({ onOpenCallModal, onOpenConsultation }) {
  return (
    <section className="bg-[#096899] dark:bg-[#073650] text-white py-20 lg:py-28" id="contact" aria-labelledby="contact-title">
      <div className="shell">
        <p className="eyebrow text-white/80">
          <span className="dot bg-white"></span> REQUEST SERVICE
        </p>
        <h2 id="contact-title" className="editorial-h2 text-white mt-4">
          Let’s talk drywall<span className="text-[#8bd4f6]">.</span>
        </h2>
        
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 mt-8">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-3 bg-white text-[#096899] px-7 py-4 font-bold text-sm hover:bg-[#e0f3fc] transition-colors cursor-pointer"
          >
            <span>Request a free consultation</span>
            <span aria-hidden="true" className="text-lg leading-none">↗</span>
          </button>

          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="font-mono text-sm font-semibold text-white/95 border-b border-white/50 pb-1 hover:border-white transition-colors"
          >
            Call {COMPANY_INFO.phone}
          </a>

          <a
            href="mailto:menifeedrywallconstruction@gmail.com"
            className="font-mono text-sm font-semibold text-white/95 border-b border-white/50 pb-1 hover:border-white transition-colors flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#8bd4f6]" />
            <span>menifeedrywallconstruction@gmail.com</span>
          </a>
        </div>

        {/* Minimalist Hairline Divider & Verification Metadata */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-white/20 pt-8 mt-12 font-mono text-[11px] text-white/80 uppercase tracking-wider">
          <div className="py-2">
            <span>&bull; Serving All of Riverside County</span>
          </div>
          <div className="py-2 md:border-l md:border-white/20 md:pl-6">
            <span>&bull; Owner Jessie Lisardo Directly Available</span>
          </div>
          <div className="py-2 md:border-l md:border-white/20 md:pl-6">
            <span>&bull; {COMPANY_INFO.hours}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
