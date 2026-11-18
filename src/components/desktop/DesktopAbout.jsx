import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Star, Users, Phone } from 'lucide-react';
import { ASSETS } from '../../utils/assets';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopAbout({ onOpenCallModal, onOpenConsultation }) {
  const stats = [
    { value: '20+', label: 'Years in Business', desc: 'Family-taught master craftsman' },
    { value: '140+', label: '5-Star Reviews', desc: 'Google & Thumbtack verified' },
    { value: '100%', label: 'Texture Match', desc: 'Orange peel, knockdown & smooth' },
    { value: 'Same-Day', label: 'Emergency Leaks', desc: 'Rapid response for escrow deadlines' }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Visual Portrait & Top Pro Credential */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 border-4 border-slate-100">
              <img
                src={ASSETS.heroBanner}
                alt="Jessie Lisardo Drywall Work"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-400 bg-brand-950/70 px-2.5 py-1 rounded-full border border-brand-800">
                  President & Owner
                </span>
                <h3 className="text-2xl font-black mt-2">Jessie Lisardo</h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Master Drywall Installer, Taper & Texture Specialist
                </p>
              </div>
            </div>

            {/* Floating Top Pro Badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-slate-150 flex items-center gap-3.5 max-w-[240px]">
              <img
                src={ASSETS.topProBadge}
                alt="Thumbtack Top Pro Badge"
                className="w-12 h-12 object-contain rounded-xl shrink-0"
              />
              <div>
                <p className="text-xs font-black text-slate-900">Thumbtack Top Pro</p>
                <p className="text-[10px] text-slate-500 mt-0.5">Ranked in the top 3% of Southern California contractors</p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Story & Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand-700 text-xs font-bold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5 text-brand-600" />
              <span>Riverside County’s Premier Drywall Contractor</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              The Craftsmanship, Pricing, and Customer Service You Deserve
            </h2>

            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                <strong className="text-slate-900">Jessie Lisardo</strong> first got a taste of the drywall trade in high school, working as a general laborer for his uncle. As he continued to learn the trade, becoming a master at hanging, taping, and finishing, Jessie developed a lifelong passion for the work and turned it into his dedicated career.
              </p>
              <p>
                Now, over two decades later, Jessie is the proud president and owner of <strong className="text-slate-900">Menifee Drywall Construction</strong>. He has tirelessly worked to make it the premier contractor of its kind in Riverside County. Whether your home or business is located in Menifee, Murrieta, Temecula, Moreno Valley, Corona, or Orange County, you can trust Jessie and his team with all your drywall needs.
              </p>
              <p>
                We take immense satisfaction in serving both general contractors and individual homeowners. Our core philosophy is simple: complete drywall projects on time, price honestly without hidden surprise charges, and deliver seamless finishes that look like nothing ever happened.
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
              {stats.map((s, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-2xl font-black text-brand-600 tracking-tight">{s.value}</p>
                  <p className="text-xs font-bold text-slate-800 mt-0.5">{s.label}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{s.desc}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex items-center gap-4 pt-2">
              <button
                onClick={onOpenCallModal}
                className="px-6 py-3 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5 text-brand-400 fill-current" />
                <span>Speak Directly with Jessie</span>
              </button>
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-2xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs border border-brand-200 cursor-pointer"
              >
                Request Free In-Person Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
