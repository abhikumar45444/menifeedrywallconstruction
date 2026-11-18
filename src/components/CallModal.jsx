import React, { useState } from 'react';
import { Phone, MessageSquare, Copy, Check, X, Clock } from 'lucide-react';
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
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-xs p-0 sm:p-4 transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="call-modal-title"
    >
      <div className="absolute inset-0" />

      {/* Architectural Dialog Card */}
      <div
        className="relative w-full sm:max-w-md bg-white dark:bg-[#121316] rounded-t-xl sm:rounded-sm border-t sm:border border-neutral-200 dark:border-white/10 shadow-2xl p-6 overflow-hidden z-10 animate-fade-in text-neutral-950 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Mobile Grab Handle (Hidden on Desktop) */}
        <div className="sm:hidden flex justify-center pb-3">
          <div className="w-10 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-neutral-200 dark:border-white/10">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
              DIRECT LINE / OWNER DISPATCH
            </p>
            <h3
              id="call-modal-title"
              className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-1"
            >
              Call Menifee Drywall<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Direct line to owner &amp; supervisor Jessie Lisardo
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 -mr-1.5 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer rounded-xs"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Priority Dispatch Guarantee Banner */}
        <div className="my-4 p-3.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 flex items-start gap-3">
          <Clock className="w-4 h-4 text-[#096899] dark:text-[#8bd4f6] shrink-0 mt-0.5" />
          <div className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed font-sans">
            <span className="font-semibold text-neutral-950 dark:text-white">Priority Dispatch:</span> Urgent leaks, escrow inspection cutouts, and emergency wall repairs are evaluated promptly for same-day scheduling.
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 mt-4">
          {/* Direct Phone Call */}
          <a
            href={`tel:${COMPANY_INFO.phoneRaw}`}
            className="w-full flex items-center justify-between p-3.5 rounded-xs bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-semibold text-xs tracking-wide transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4" />
              <span>Call Jessie Directly</span>
            </div>
            <span className="font-mono text-xs opacity-80">
              {COMPANY_INFO.phone} ↗
            </span>
          </a>

          {/* Text Message / SMS */}
          <a
            href={`sms:${COMPANY_INFO.phoneRaw}?body=Hi%20Jessie!%20I%20found%20Menifee%20Drywall%20Construction%20and%20would%20like%20a%20drywall%20quote.`}
            className="w-full flex items-center justify-between p-3.5 rounded-xs bg-neutral-50 hover:bg-neutral-100 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-950 dark:text-white border border-neutral-200 dark:border-white/10 font-semibold text-xs tracking-wide transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-4 h-4 text-[#096899] dark:text-[#8bd4f6]" />
              <span>Text Photos or Video</span>
            </div>
            <span className="font-mono text-[11px] text-neutral-500 dark:text-neutral-400">
              Fastest Response ↗
            </span>
          </a>

          {/* Copy Phone Number */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xs border border-dashed border-neutral-300 dark:border-white/20 hover:border-neutral-950 dark:hover:border-white text-neutral-600 dark:text-neutral-300 font-mono text-xs transition-colors cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#096899] dark:text-[#8bd4f6]" />
                <span className="text-neutral-950 dark:text-white font-sans font-semibold">
                  Copied {COMPANY_INFO.phone} to clipboard!
                </span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-neutral-400" />
                <span>Copy Phone Number ({COMPANY_INFO.phone})</span>
              </>
            )}
          </button>
        </div>

        {/* Operating Hours Note */}
        <p className="font-mono text-[10px] text-center text-neutral-400 dark:text-neutral-500 mt-4">
          Hours: {COMPANY_INFO.hours} &bull; Menifee, Murrieta &amp; IE
        </p>
      </div>
    </div>
  );
}
