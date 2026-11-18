import React from 'react';
import { Mail, Phone, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../../data/drywallData';
import Reveal from '../Reveal';

export default function DesktopContact({ onOpenCallModal, onOpenConsultation }) {
  return (
    <section className="bg-[#F9F8F6] dark:bg-[#181917] py-16 lg:py-24 border-b border-neutral-200 dark:border-neutral-800 transition-colors" id="contact" aria-labelledby="contact-title">
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <Reveal delay={0}>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            REQUEST SERVICE
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 
            id="contact-title" 
            className="text-4xl lg:text-5xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-3"
          >
            Let’s talk drywall<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
          </h2>
        </Reveal>

        {/* Action Links Row */}
        <Reveal delay={160}>
          <div className="flex flex-wrap items-center gap-5 sm:gap-8 mt-8">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 text-sm font-medium tracking-wide transition-colors cursor-pointer flex items-center gap-2 rounded-xs"
            >
              <span>Request a free estimate</span>
              <span aria-hidden="true">↗</span>
            </button>

            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#096899] dark:hover:text-[#8bd4f6] hover:border-[#096899] dark:hover:border-[#8bd4f6] transition-colors"
            >
              <Phone className="w-4 h-4 text-[#096899] dark:text-[#8bd4f6]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>

            <a
              href={`sms:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#096899] dark:hover:text-[#8bd4f6] hover:border-[#096899] dark:hover:border-[#8bd4f6] transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-[#096899] dark:text-[#8bd4f6]" />
              <span>Text photos or video ↗</span>
            </a>

            <a
              href="mailto:menifeedrywallconstruction@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-950 dark:text-white border-b border-neutral-950 dark:border-white pb-0.5 hover:text-[#096899] dark:hover:text-[#8bd4f6] hover:border-[#096899] dark:hover:border-[#8bd4f6] transition-colors"
            >
              <Mail className="w-4 h-4 text-[#096899] dark:text-[#8bd4f6]" />
              <span>Email Jessie</span>
            </a>
          </div>
        </Reveal>

        {/* Clean Service Area Strip */}
        <Reveal delay={240}>
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 mt-12 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
            <span className="uppercase tracking-wider">Service Areas:</span>
            <span>Menifee &bull; Murrieta &bull; Temecula &bull; Lake Elsinore &bull; Perris &bull; Inland Empire</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
