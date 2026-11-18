import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Sparkles, MapPin, Calendar, FileText } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/drywallData';

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
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-xs transition-opacity duration-300 p-0 md:p-4">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full md:max-w-lg bg-white rounded-t-[32px] md:rounded-3xl shadow-2xl max-h-[88%] md:max-h-[85vh] flex flex-col overflow-hidden animate-slide-up z-10 border-t md:border border-slate-200">
        {/* Grab Handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-12 h-1.5 bg-slate-300 rounded-full" />
        </div>

        {/* Header */}
        <div className="px-5 pb-3 border-b border-slate-100 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Free In-Person or Phone Estimate</span>
            </div>
            <h2 className="text-lg font-extrabold text-slate-900 leading-tight">
              Request Fast Consultation
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Form */}
        <div className="flex-1 overflow-y-auto px-5 py-4 smooth-scroll hide-scrollbar">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-slate-900">Request Received!</h3>
                <p className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                  Jessie Lisardo has been notified. He typically responds within 30 minutes during work hours.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-xs space-y-1.5">
                <p><span className="font-semibold text-slate-500">Service:</span> {formData.service}</p>
                <p><span className="font-semibold text-slate-500">Location:</span> {formData.city}, CA</p>
                <p><span className="font-semibold text-slate-500">Timeline:</span> {formData.urgency}</p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleSendViaSms}
                  className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Text Details to Jessie Directly</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="py-2.5 text-xs text-slate-500 hover:text-slate-800 font-semibold"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Service Selection */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Drywall Service Needed
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Custom Project / Other">Other / Unsure</option>
                </select>
              </div>

              {/* City Selection */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Your City / Area (Riverside & OC)
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                >
                  {COMPANY_INFO.serviceAreas.map((city) => (
                    <option key={city} value={city}>
                      {city}, CA
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Miller"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(951) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                  />
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Desired Timeline
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {['Urgent (1-2 days)', 'This Week', 'Flexible'].map((time) => (
                    <button
                      type="button"
                      key={time}
                      onClick={() => setFormData({ ...formData, urgency: time })}
                      className={`py-2 px-1 text-[11px] rounded-xl font-medium border text-center transition-all ${
                        formData.urgency === time
                          ? 'bg-brand-50 border-brand-500 text-brand-700 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project description */}
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Project Notes / Details (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe damage, room location, approximate dimensions, or texture type..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-brand-500/25 active:scale-[0.98] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Free Quote Request</span>
                </button>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  No credit card required. Free, honest assessment by President Jessie Lisardo.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
