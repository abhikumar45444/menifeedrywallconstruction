import React, { useState } from 'react';
import { Phone, MessageSquare, Copy, Check, X, ShieldAlert, Clock, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/drywallData';

export default function CallModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard?.writeText(COMPANY_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-xs p-3 transition-opacity">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-sm bg-white rounded-3xl shadow-2xl p-5 overflow-hidden animate-island z-10 border border-slate-100">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
              <Phone className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">Call Menifee Drywall</h3>
              <p className="text-[11px] text-slate-500 font-medium">Direct Line to Jessie Lisardo</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-all"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Priority Dispatch Note */}
        <div className="my-3 p-3 rounded-2xl bg-amber-50/90 border border-amber-200/80 flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div className="text-[11px] text-amber-900 leading-snug">
            <span className="font-bold">Fast Response Guarantee:</span> Urgent escrow deadlines, water leaks, and inspection fixes are prioritized for same-day dispatch.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2 mt-4">
          {/* Direct Phone Call */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-sm shadow-md shadow-brand-500/25 active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 fill-current" />
              <span>Call Now</span>
            </div>
            <span className="text-xs bg-white/20 px-2.5 py-0.5 rounded-full font-mono">
              {COMPANY_INFO.phone}
            </span>
          </a>

          {/* Text Message / SMS */}
          <a
            href={`sms:${COMPANY_INFO.phoneRaw}?body=Hi%20Jessie!%20I%20found%20Menifee%20Drywall%20Construction%20and%20would%20like%20a%20drywall%20quote.`}
            className="w-full flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all"
          >
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4" />
              <span>Send SMS / Photos</span>
            </div>
            <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
              Fastest
            </span>
          </a>

          {/* Copy Phone Number */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs active:scale-[0.98] transition-all"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Copied {COMPANY_INFO.phone} to clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-500" />
                <span>Copy Number ({COMPANY_INFO.phone})</span>
              </>
            )}
          </button>
        </div>

        {/* Operating Hours Note */}
        <p className="text-[10px] text-center text-slate-400 mt-3">
          {COMPANY_INFO.hours}
        </p>
      </div>
    </div>
  );
}
