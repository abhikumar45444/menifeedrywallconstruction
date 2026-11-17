import React from 'react';
import { X, CheckCircle2, Phone, Calculator, Clock, DollarSign, Shield, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/drywallData';

export default function ServiceModal({ service, onClose, onSelectTab, onOpenCallModal }) {
  if (!service) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-end justify-center bg-black/60 backdrop-blur-xs transition-opacity duration-300">
      {/* Backdrop tap dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Sheet Content */}
      <div className="relative w-full bg-white rounded-t-[32px] shadow-2xl max-h-[85%] flex flex-col overflow-hidden animate-slide-up z-10 border-t border-slate-200">
        {/* Grab Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
        </div>

        {/* Header with image */}
        <div className="relative h-44 w-full bg-slate-900 shrink-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white backdrop-blur-md transition-all active:scale-95"
            aria-label="Close details"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Service Title on image bottom */}
          <div className="absolute bottom-3 left-4 right-4 text-white">
            <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-brand-500 text-white mb-1 shadow-xs">
              {service.badge}
            </span>
            <h2 className="text-xl font-black tracking-tight leading-tight">
              {service.title}
            </h2>
          </div>
        </div>

        {/* Scrollable details body */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4 smooth-scroll hide-scrollbar">
          {/* Quick stats pills */}
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-2xl bg-brand-50/70 border border-brand-100 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-brand-600 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Typical Range</p>
                <p className="font-bold text-slate-800">{service.priceEstimate}</p>
              </div>
            </div>
            <div className="p-2.5 rounded-2xl bg-emerald-50/70 border border-emerald-100 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600 shrink-0" />
              <div>
                <p className="text-[10px] text-slate-500 uppercase font-semibold">Turnaround</p>
                <p className="font-bold text-slate-800">{service.turnaround}</p>
              </div>
            </div>
          </div>

          {/* Overview text */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
              Service Overview
            </h3>
            <p className="text-xs text-slate-700 leading-relaxed font-normal">
              {service.overview}
            </p>
          </div>

          {/* What's Included / Features Checklist */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              What We Deliver
            </h3>
            <div className="space-y-2">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          {service.faqs && service.faqs.length > 0 && (
            <div className="pt-2 border-t border-slate-100">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                Frequently Asked
              </h3>
              <div className="space-y-2.5">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                    <p className="font-bold text-slate-900 mb-1">{faq.q}</p>
                    <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Guarantee banner */}
          <div className="p-3 rounded-2xl bg-amber-50/80 border border-amber-200/60 flex items-center gap-3">
            <Shield className="w-5 h-5 text-amber-600 shrink-0" />
            <div className="text-[11px]">
              <p className="font-bold text-amber-900">{COMPANY_INFO.guarantee}</p>
              <p className="text-amber-700">Clean job site guaranteed. 20+ years of Riverside County trust.</p>
            </div>
          </div>
        </div>

        {/* Sticky bottom CTA actions */}
        <div className="p-4 bg-white border-t border-slate-100 shrink-0 flex items-center gap-2">
          <button
            onClick={() => {
              onClose();
              onSelectTab('estimate');
            }}
            className="flex-1 py-3 px-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-brand-500/20 active:scale-[0.98] transition-all"
          >
            <Calculator className="w-4 h-4" />
            <span>Calculate Cost</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => {
              onClose();
              onOpenCallModal();
            }}
            className="py-3 px-4 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all"
          >
            <Phone className="w-4 h-4 text-brand-600" />
            <span>Call Jessie</span>
          </button>
        </div>
      </div>
    </div>
  );
}
