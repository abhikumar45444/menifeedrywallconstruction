import React, { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { COMPANY_INFO, SERVICES, FAQS_GENERAL } from '../../data/drywallData';

export default function DesktopContact({ onOpenCallModal }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Drywall Repair & Patching',
    city: 'Menifee',
    timeline: 'This Upcoming Week',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendViaSms = () => {
    const text = `Hi Jessie! Consultation Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nService: ${formData.service}\nTimeline: ${formData.timeline}\nNotes: ${formData.notes}`;
    window.location.href = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent(text)}`;
  };

  return (
    <section id="contact" className="py-20 bg-[#fbf9f5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Coverage */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#163a63]/10 text-[#163a63] text-xs font-bold uppercase tracking-wider mb-3">
                <Phone className="w-3.5 h-3.5 text-[#163a63]" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-900 tracking-tight">
                Need an Expert? We’re Ready to Help
              </h2>
              <p className="text-stone-600 mt-2 text-sm leading-relaxed">
                Call, text, or fill out the form to schedule your free estimate. President Jessie Lisardo personally reviews every inquiry and responds promptly.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="p-4 rounded-xl bg-white border border-stone-200 hover:border-[#163a63] shadow-xs flex items-center gap-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-[#163a63] group-hover:bg-[#163a63] group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-semibold uppercase">Direct Phone Line</p>
                  <p className="text-base font-extrabold text-stone-900">{COMPANY_INFO.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="p-4 rounded-xl bg-white border border-stone-200 hover:border-[#163a63] shadow-xs flex items-center gap-4 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-stone-100 flex items-center justify-center text-[#163a63] group-hover:bg-[#163a63] group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-semibold uppercase">Email Direct</p>
                  <p className="text-sm font-extrabold text-stone-900 truncate">{COMPANY_INFO.email}</p>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-white border border-stone-200 shadow-xs flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-700">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-stone-500 font-semibold uppercase">Operating Hours</p>
                  <p className="text-xs font-bold text-stone-900">{COMPANY_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Coverage Cities Grid */}
            <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-xs">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[#163a63]" />
                <h3 className="text-xs font-bold text-stone-900 uppercase tracking-wider">Service Coverage Hubs</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {COMPANY_INFO.serviceAreas.map((city) => (
                  <span
                    key={city}
                    className="px-2.5 py-1 rounded-md bg-stone-100 text-stone-700 text-xs font-semibold"
                  >
                    {city}, CA
                  </span>
                ))}
              </div>
            </div>

            {/* FAQ Accordions */}
            <div className="space-y-3">
              <h3 className="text-sm font-black text-stone-900 uppercase tracking-wider">Frequently Asked Questions</h3>
              {FAQS_GENERAL.map((faq, idx) => (
                <div
                  key={idx}
                  className="rounded-xl bg-white border border-stone-200 overflow-hidden text-xs"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-4 text-left font-bold text-stone-900 flex items-center justify-between cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {openFaq === idx ? <ChevronUp className="w-4 h-4 text-[#163a63] shrink-0" /> : <ChevronDown className="w-4 h-4 text-stone-400 shrink-0" />}
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 pb-4 text-stone-600 leading-relaxed border-t border-stone-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Free Estimate & Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-lg">
              <h3 className="text-xl font-black text-stone-900">Request a Free Estimate</h3>
              <p className="text-xs text-stone-500 mt-1 mb-6">
                Fill in the details below. For urgent water leaks or escrow repairs, please call directly.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-black text-stone-900">Thank You, {formData.name}!</h4>
                  <p className="text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                    Your quote request has been sent directly to President Jessie Lisardo. He will review your project and get in touch within 30 minutes during business hours.
                  </p>
                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={handleSendViaSms}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs flex items-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Also Send Via SMS to Jessie</span>
                    </button>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-4 py-2.5 rounded-xl bg-stone-100 text-stone-700 text-xs font-semibold cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Service & Area Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Drywall Service Needed
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#163a63]"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                        <option value="Other / Multiple Services">Other / Multiple Services</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Your City / Location
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#163a63]"
                      >
                        {COMPANY_INFO.serviceAreas.map((city) => (
                          <option key={city} value={city}>{city}, CA</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. John Miller"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#163a63]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(951) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#163a63]"
                      />
                    </div>
                  </div>

                  {/* Email & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#163a63]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-xs font-medium text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#163a63]"
                      >
                        <option value="Urgent (1-2 Days / Escrow)">Urgent (1-2 Days / Escrow)</option>
                        <option value="This Upcoming Week">This Upcoming Week</option>
                        <option value="Next 2-3 Weeks">Next 2-3 Weeks</option>
                        <option value="Flexible / Gathering Bids">Flexible / Gathering Bids</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Details */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Project Details / Damage Notes
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Please describe the damaged area, room location, approximate dimensions, or texture type..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-stone-50 border border-stone-300 text-xs text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#163a63]"
                    />
                  </div>

                  {/* Submit CTA */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#c97a18] hover:bg-[#b36710] text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Free Estimate Request</span>
                    </button>
                    <p className="text-[11px] text-center text-stone-400 mt-2.5">
                      No credit card required. Free, honest assessment by President Jessie Lisardo.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
