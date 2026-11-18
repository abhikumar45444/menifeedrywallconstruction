import React from 'react';
import { X, CheckCircle2, Phone, DollarSign, Clock, Shield, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/drywallData';

export default function ServiceModal({
  service,
  onClose,
  onSelectTab,
  onOpenCallModal,
  onOpenEstimate
}) {
  if (!service) return null;

  const handleEstimateAction = () => {
    onClose();
    if (onOpenEstimate) {
      onOpenEstimate(service.title);
    } else if (onSelectTab) {
      onSelectTab('estimate');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-xs transition-opacity duration-200 p-0 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" />

      {/* Architectural Modal Card */}
      <div
        className="relative w-full md:max-w-2xl bg-white dark:bg-[#121316] rounded-t-xl md:rounded-sm border-t md:border border-neutral-200 dark:border-white/10 shadow-2xl max-h-[90vh] md:max-h-[85vh] flex flex-col overflow-hidden z-10 animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Mobile Grab Handle (Hidden on Desktop) */}
        <div className="md:hidden flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
        </div>

        {/* Hero Image Frame with Minimal Architectural Caption */}
        <div className="relative h-44 md:h-52 w-full bg-neutral-900 shrink-0 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent pointer-events-none" />

          {/* Close Button: Subtle Dark-Glass Pill */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-xs bg-black/60 hover:bg-black/90 text-white backdrop-blur-sm border border-white/20 transition-all cursor-pointer z-10"
            aria-label="Close details"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Service Title & Micro-Tag */}
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <span className="inline-block px-2 py-0.5 rounded-xs text-[10px] font-mono tracking-wider uppercase bg-white/95 text-neutral-950 dark:bg-white/15 dark:text-white border border-white/20 mb-2">
              {service.badge || 'SPECIALTY SERVICE'}
            </span>
            <h2
              id="service-modal-title"
              className="text-xl md:text-2xl font-semibold tracking-tight text-white leading-tight"
            >
              {service.title}<span className="text-[#8bd4f6]">.</span>
            </h2>
          </div>
        </div>

        {/* Scrollable Details Body */}
        <div className="flex-1 overflow-y-auto p-5 md:p-6 space-y-5 text-neutral-950 dark:text-white">
          {/* Quick Metrics Hairline Strip */}
          <div className="grid grid-cols-2 gap-3 text-xs font-mono">
            <div className="p-3 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-wider mb-1">
                <DollarSign className="w-3.5 h-3.5 text-[#096899] dark:text-[#8bd4f6]" />
                <span>Typical Range</span>
              </div>
              <p className="font-semibold text-sm font-sans text-neutral-950 dark:text-white">
                {service.priceEstimate}
              </p>
            </div>

            <div className="p-3 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10">
              <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 text-[10px] uppercase tracking-wider mb-1">
                <Clock className="w-3.5 h-3.5 text-[#096899] dark:text-[#8bd4f6]" />
                <span>Turnaround</span>
              </div>
              <p className="font-semibold text-sm font-sans text-neutral-950 dark:text-white">
                {service.turnaround}
              </p>
            </div>
          </div>

          {/* Service Overview */}
          <div>
            <h3 className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-1.5">
              Service Overview
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
              {service.overview}
            </p>
          </div>

          {/* What We Deliver (Feature Checklist) */}
          {service.features && service.features.length > 0 && (
            <div>
              <h3 className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2">
                What We Deliver
              </h3>
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs md:text-[13px] text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#096899] dark:text-[#8bd4f6] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* FAQs Accordion */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="pt-2 border-t border-neutral-200 dark:border-white/10">
              <h3 className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2.5">
                Common Questions
              </h3>
              <div className="space-y-2.5">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="p-3.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs">
                    <p className="font-semibold text-neutral-950 dark:text-white mb-1">{faq.q}</p>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guarantee Banner */}
          <div className="p-3.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-center gap-3 font-mono text-xs text-neutral-700 dark:text-neutral-300">
            <Shield className="w-4 h-4 text-[#096899] dark:text-[#8bd4f6] shrink-0" />
            <div>
              <span className="font-semibold text-neutral-950 dark:text-white block font-sans">
                {COMPANY_INFO.guarantee}
              </span>
              <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                Clean job site guarantee &bull; 20+ years of Riverside County craftsmanship.
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="p-4 md:px-6 md:py-4 bg-white dark:bg-[#121316] border-t border-neutral-200 dark:border-white/10 shrink-0 flex items-center justify-between gap-3">
          <button
            onClick={handleEstimateAction}
            className="flex-1 py-3 px-4 rounded-xs bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <span>Request Free Estimate</span>
            <span aria-hidden="true">↗</span>
          </button>

          <button
            onClick={() => {
              onClose();
              if (onOpenCallModal) onOpenCallModal();
            }}
            className="py-3 px-4 rounded-xs border border-neutral-200 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-950 dark:text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <Phone className="w-3.5 h-3.5 text-[#096899] dark:text-[#8bd4f6]" />
            <span>Call Jessie</span>
          </button>
        </div>
      </div>
    </div>
  );
}
