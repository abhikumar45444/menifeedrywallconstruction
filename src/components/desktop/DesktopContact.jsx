import React, { useState } from 'react';
import { Send, Phone, Mail, CheckCircle2 } from 'lucide-react';
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
            <span className="dot bg-white"></span> CONTACT US &bull; MENIFEE DRYWALL CONSTRUCTION
          </p>
          <h2 id="contact-title" className="editorial-h2 text-white mt-4">
            Contact Us<span className="text-[#8bd4f6]">.</span>
          </h2>
          <p className="font-mono text-base text-[#8bd4f6] font-semibold mt-2">
            Need an expert? Call 951-746-8891 or complete the form below to get started
          </p>

          <div className="flex flex-wrap items-center gap-6 lg:gap-10 mt-8">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="inline-flex items-center gap-3 bg-white text-[#096899] px-6 py-4 font-bold text-sm hover:bg-[#e0f3fc] transition-colors"
            >
              <span>Call Today! 951-746-8891</span>
              <span className="text-lg">↗</span>
            </a>

            <a
              href="mailto:menifeedrywallconstruction@gmail.com"
              className="font-mono text-sm font-semibold text-white/90 hover:text-white border-b border-white/50 pb-1 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#8bd4f6]" />
              <span>menifeedrywallconstruction@gmail.com</span>
            </a>

            <div className="font-mono text-xs text-white/70">
              <span>SERVING ALL OF RIVERSIDE COUNTY &bull; OVER 20 YEARS EXP</span>
            </div>
          </div>
        </div>

        {/* 2. Authentic Free Consultation Request Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4 text-white/90 text-[15px] leading-relaxed">
            <p>
              Have a project in mind or need an emergency repair estimate? Call Jessie directly or request a free consultation below.
            </p>
            <div className="pt-4 border-t border-white/20 font-mono text-xs space-y-2.5 text-white/80">
              <div>&bull; Free Consultation &amp; Transparent Quotes</div>
              <div>&bull; Serving All of Riverside County</div>
              <div>&bull; Owner Jessie Lisardo Directly Available</div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-[#075176] p-8 border border-white/20 shadow-xl">
            {isSubmitted ? (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-12 h-12 text-[#8bd4f6] mx-auto" />
                <h3 className="text-2xl font-bold font-sans">Thank You!</h3>
                <p className="text-sm text-white/80 max-w-md mx-auto">
                  Thank you, {formData.name}. Jessie Lisardo will be in touch with you shortly at {formData.phone || formData.email}.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[11px] text-white/80 uppercase block mb-1.5">
                      Your Name (required)
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="w-full bg-[#096899] border border-white/30 text-white placeholder-white/40 px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-white/80 uppercase block mb-1.5">
                      Your Email (required)
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full bg-[#096899] border border-white/30 text-white placeholder-white/40 px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[11px] text-white/80 uppercase block mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(951) 000-0000"
                      className="w-full bg-[#096899] border border-white/30 text-white placeholder-white/40 px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-white"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] text-white/80 uppercase block mb-1.5">
                      Service Needed
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#096899] border border-white/30 text-white px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-white"
                    >
                      <option value="Drywall Installation" className="text-[#151614]">Drywall Installation</option>
                      <option value="Drywall Repair" className="text-[#151614]">Drywall Repair</option>
                      <option value="Water Damage" className="text-[#151614]">Water Damage</option>
                      <option value="Texture Matching" className="text-[#151614]">Texture Matching</option>
                      <option value="Acoustic/popcorn Removal" className="text-[#151614]">Acoustic/popcorn Removal</option>
                      <option value="Smooth Wall Finish" className="text-[#151614]">Smooth Wall Finish</option>
                      <option value="Custom Texture" className="text-[#151614]">Custom Texture</option>
                      <option value="Demolition" className="text-[#151614]">Demolition</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[11px] text-white/80 uppercase block mb-1.5">
                    Your Message / Project Details
                  </label>
                  <textarea
                    rows={3}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Tell us about your project, room size, or timeline..."
                    className="w-full bg-[#096899] border border-white/30 text-white placeholder-white/40 px-3.5 py-2.5 text-sm focus:outline-hidden focus:border-white"
                  />
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-xs text-white/80">
                    Call Today! 951-746-8891
                  </span>

                  <button
                    type="submit"
                    className="bg-white text-[#096899] font-bold text-sm px-6 py-3 hover:bg-[#e0f3fc] transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <span>Send Message</span>
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
