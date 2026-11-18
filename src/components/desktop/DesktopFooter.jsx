import React from 'react';
import { Phone, Mail, Clock, MapPin, ShieldCheck, Star } from 'lucide-react';
import { ASSETS } from '../../utils/assets';
import { COMPANY_INFO, SERVICES } from '../../data/drywallData';

export default function DesktopFooter({ onOpenCallModal, onOpenConsultation }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      {/* Upper Footer: 4-Column Layout */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 p-1.5 border border-white/20 flex items-center justify-center">
                <img
                  src={ASSETS.logo}
                  alt="Menifee Drywall Construction"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="text-base font-black text-white leading-tight">Menifee Drywall Construction</h3>
                <p className="text-[10px] text-brand-400 font-bold uppercase tracking-wider">Riverside County's Premier Contractor</p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-xs max-w-sm">
              With over 20 years of experience in the industry, Menifee Drywall Construction delivers superior drywall hanging, invisible patch repairs, water damage restoration, and texture matching across Southern California.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <img
                src={ASSETS.topProBadge}
                alt="Thumbtack Top Pro"
                className="w-10 h-10 object-contain rounded-xl border border-slate-800"
              />
              <div>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400" />
                  ))}
                </div>
                <p className="text-[11px] font-bold text-white mt-0.5">Top Pro Rated &bull; 140+ Reviews</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo('services')} className="hover:text-white transition-colors cursor-pointer">All Services</button></li>
              <li><button onClick={() => scrollTo('about')} className="hover:text-white transition-colors cursor-pointer">About Jessie Lisardo</button></li>
              <li><button onClick={() => scrollTo('estimator')} className="hover:text-white transition-colors cursor-pointer">Cost Estimator</button></li>
              <li><button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors cursor-pointer">Completed Projects</button></li>
              <li><button onClick={() => scrollTo('reviews')} className="hover:text-white transition-colors cursor-pointer">Customer Testimonials</button></li>
              <li><button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors cursor-pointer">Contact Us</button></li>
            </ul>
          </div>

          {/* Column 3: Services Directory */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Drywall Services</h4>
            <ul className="space-y-2">
              {SERVICES.slice(0, 6).map((s) => (
                <li key={s.id}>
                  <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors text-left cursor-pointer truncate max-w-[200px]">
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Service Areas */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact & Hours</h4>
            <div className="space-y-2.5">
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-brand-400 fill-current" />
                <span className="font-bold text-white">{COMPANY_INFO.phone}</span>
              </a>
              <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2 hover:text-white transition-colors truncate">
                <Mail className="w-3.5 h-3.5 text-brand-400" />
                <span className="truncate">{COMPANY_INFO.email}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-brand-400" />
                <span>Mon – Sat: 7am – 6pm</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-brand-400" />
                <span>Menifee, CA &bull; Riverside & OC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright & License */}
      <div className="border-t border-slate-900 bg-black/60 py-5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500">
          <p>&copy; {new Date().getFullYear()} Menifee Drywall Construction. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>President & Owner: Jessie Lisardo</span>
            <span>&bull;</span>
            <span className="text-slate-400">Licensed, Bonded & Insured Professional Contractor</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
