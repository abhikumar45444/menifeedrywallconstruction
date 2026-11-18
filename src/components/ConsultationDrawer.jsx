import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/drywallData';

export default function ConsultationDrawer({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: 'Menifee',
    service: 'Drywall Repair & Patching',
    urgency: 'This Week',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaSms = () => {
    const text = `Hi Jessie! Consultation Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nService: ${formData.service}\nTimeline: ${formData.urgency}\nDetails: ${formData.notes}`;
    window.location.href = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent(text)}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-xs transition-opacity duration-200 p-0 md:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-title"
    >
      <div className="absolute inset-0" />

      {/* Architectural Dialog Card */}
      <div
        className="relative w-full md:max-w-lg bg-white dark:bg-[#121316] rounded-t-xl md:rounded-sm border-t md:border border-neutral-200 dark:border-white/10 shadow-2xl max-h-[90vh] md:max-h-[85vh] flex flex-col overflow-hidden z-10 animate-fade-in text-neutral-950 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Mobile Grab Handle (Hidden on Desktop) */}
        <div className="md:hidden flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-200 dark:border-white/10 flex items-start justify-between">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
              FAST CONSULTATION / ESTIMATE
            </p>
            <h2
              id="consultation-title"
              className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-1"
            >
              Request Fast Consultation<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              In-person or phone estimate with owner Jessie Lisardo
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 -mr-1.5 text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer rounded-xs"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Form */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {submitted ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-white/10 text-[#096899] dark:text-[#8bd4f6] flex items-center justify-center mx-auto border border-neutral-200 dark:border-white/10">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold tracking-tight text-neutral-950 dark:text-white">Request Received!</h3>
                <p className="text-xs text-neutral-600 dark:text-neutral-300 mt-1 max-w-xs mx-auto">
                  Jessie Lisardo has been notified. Typically responds within 30 minutes during work hours.
                </p>
              </div>

              <div className="p-3.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-left text-xs font-mono space-y-1.5 text-neutral-700 dark:text-neutral-300">
                <p><span className="text-neutral-500 dark:text-neutral-400">Service:</span> {formData.service}</p>
                <p><span className="text-neutral-500 dark:text-neutral-400">Location:</span> {formData.city}, CA</p>
                <p><span className="text-neutral-500 dark:text-neutral-400">Timeline:</span> {formData.urgency}</p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleSendViaSms}
                  className="w-full py-3 px-4 rounded-xs bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Text Details to Jessie Directly ↗</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="py-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer"
                >
                  Done &amp; Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Service Needed
                </label>
                <input
                  type="text"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-950 dark:text-white focus:outline-none focus:border-neutral-950 dark:focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-950 dark:text-white focus:outline-none focus:border-neutral-950 dark:focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-1.5">
                    Phone / Email
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contact Info"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-950 dark:text-white focus:outline-none focus:border-neutral-950 dark:focus:border-white transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-1.5">
                    City
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-950 dark:text-white focus:outline-none focus:border-neutral-950 dark:focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-1.5">
                    Timeline
                  </label>
                  <select
                    value={formData.urgency}
                    onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-950 dark:text-white focus:outline-none focus:border-neutral-950 dark:focus:border-white transition-colors cursor-pointer"
                  >
                    <option value="Urgent / Same Day" className="bg-white dark:bg-[#121316]">Urgent / Same Day</option>
                    <option value="This Week" className="bg-white dark:bg-[#121316]">This Week</option>
                    <option value="Within 2 Weeks" className="bg-white dark:bg-[#121316]">Within 2 Weeks</option>
                    <option value="Flexible / Planning" className="bg-white dark:bg-[#121316]">Flexible / Planning</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-1.5">
                  Project Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe damage, room size, or ceiling height..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-neutral-950 dark:focus:border-white transition-colors resize-none leading-relaxed"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xs bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Submit Consultation Request</span>
                  <span aria-hidden="true">↗</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
