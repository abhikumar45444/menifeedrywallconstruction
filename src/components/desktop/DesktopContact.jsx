import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopContact({ onOpenCallModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Menifee',
    service: 'Drywall Repair & Texture Matching',
    description: '',
    urgent: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="bg-[#096899] text-white py-20 lg:py-28" id="contact" aria-labelledby="contact-title">
      <div className="shell">
        {/* 1. Header & Direct Communication Channels */}
        <div className="border-b border-white/20 pb-12 mb-12">
          <p className="eyebrow text-white/80">
            <span className="dot bg-white"></span> REQUEST SERVICE
          </p>
          <h2 id="contact-title" className="editorial-h2 text-white mt-4">
            Let’s talk drywall<span className="text-[#8bd4f6]">.</span>
          </h2>

          <div className="flex flex-wrap items-center gap-6 lg:gap-10 mt-8">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-white text-[#096899] px-6 py-4 font-bold text-sm hover:bg-[#e0f3fc] transition-colors"
            >
              <span>Call (951) 746-8891</span>
              <span className="text-lg">↗</span>
            </a>

            <a
              href={`sms:${COMPANY_INFO.phoneRaw}`}
              className="font-mono text-sm font-semibold text-white/90 hover:text-white border-b border-white/50 pb-1 transition-colors flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#8bd4f6]" />
              <span>Text photos or video of damage</span>
            </a>

            <div className="font-mono text-xs text-white/70">
              <span>RIVERSIDE &amp; ORANGE COUNTY &bull; MON&ndash;SAT 7AM&ndash;6PM</span>
            </div>
          </div>
        </div>

        {/* 2. Editorial Free Estimate Request Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4 text-white/90 text-[16px] leading-relaxed">
            <p>
              Send photos of your ceiling damage, wall hole, or remodeling blueprints directly to Jessie Lisardo.
            </p>
            <p className="text-white/70 text-sm">
              We respond promptly with realistic pricing, timeline expectations, and immediate availability for urgent escrow or plumbing repairs.
            </p>
            <div className="pt-4 border-t border-white/20 font-mono text-xs space-y-2 text-white/80">
              <div>&bull; 100% Free On-Site or Photo Estimates</div>
              <div>&bull; No Obligation Consultation</div>
              <div>&bull; Direct Communication with Owner Jessie</div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#075176] p-8 border border-white/20 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#8bd4f6] mx-auto" />
                <h3 className="text-2xl font-bold font-sans">Request Received!</h3>
                <p className="text-sm text-white/80 max-w-md mx-auto">
                  Thank you, {formData.name}. Jessie Lisardo will review your project details and contact you at {formData.phone} shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[11px] text-white/80 uppercase block mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Robert Keller"
                      className="w-full bg-[#096899] border border-white/30 text-white placeholder-white/40 px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-white/80 uppercase block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(951) 000-0000"
                      className="w-full bg-[#096899] border border-white/30 text-white placeholder-white/40 px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[11px] text-white/80 uppercase block mb-1.5">
                      City / Area *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Menifee, Murrieta, etc."
                      className="w-full bg-[#096899] border border-white/30 text-white placeholder-white/40 px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-white/80 uppercase block mb-1.5">
                      Service Type
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#096899] border border-white/30 text-white px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-white"
                    >
                      <option value="Drywall Repair & Texture Matching" className="text-[#151614]">Drywall Repair &amp; Texture Match</option>
                      <option value="Water Damage Restoration" className="text-[#151614]">Water Damage Restoration</option>
                      <option value="Popcorn Ceiling Removal" className="text-[#151614]">Popcorn Ceiling Removal</option>
                      <option value="Residential Installation" className="text-[#151614]">New Drywall Hanging &amp; Remodel</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-white/80 uppercase block mb-1.5">
                    Project Details &amp; Dimensions
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe hole size, ceiling height, whether leak is stopped, or urgency..."
                    className="w-full bg-[#096899] border border-white/30 text-white placeholder-white/40 px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-white"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <label className="flex items-center gap-2 cursor-pointer font-mono text-xs">
                    <input
                      type="checkbox"
                      checked={formData.urgent}
                      onChange={(e) => setFormData({ ...formData, urgent: e.target.checked })}
                      className="w-4 h-4 accent-[#8bd4f6]"
                    />
                    <span>Urgent (Move-Out / Escrow Deadline)</span>
                  </label>

                  <button
                    type="submit"
                    className="bg-white text-[#096899] font-bold text-sm px-6 py-3 hover:bg-[#e0f3fc] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Send to Jessie</span>
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
