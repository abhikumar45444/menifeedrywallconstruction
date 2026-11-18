import React, { useState } from 'react';
import { 
  Phone, Calculator, ShieldCheck, Star, ArrowRight, Sparkles, 
  CheckCircle2, Clock, Wrench, Droplets, Layers, ChevronRight 
} from 'lucide-react';
import { ASSETS } from '../../utils/assets';
import { COMPANY_INFO, ESTIMATOR_QUESTIONS } from '../../data/drywallData';

export default function DesktopHero({ onOpenCallModal, onOpenConsultation }) {
  // Quick hero widget state
  const [selectedService, setSelectedService] = useState('patch');
  const [selectedSize, setSelectedSize] = useState('small');
  const [selectedTexture, setSelectedTexture] = useState('orange');

  // Compute live quick estimate
  const getQuickCost = () => {
    let base = 195;
    if (selectedService === 'water') base = 340;
    if (selectedService === 'popcorn') base = 450;
    if (selectedService === 'texture') base = 260;
    if (selectedService === 'remodel') base = 750;

    let sizeFactor = 1.0;
    if (selectedSize === 'medium') sizeFactor = 1.45;
    if (selectedSize === 'large') sizeFactor = 2.3;
    if (selectedSize === 'xlarge') sizeFactor = 3.8;

    let textureAdd = 0;
    if (selectedTexture === 'knockdown') textureAdd = 35;
    if (selectedTexture === 'smooth') textureAdd = 75;

    const low = Math.round((base * sizeFactor + textureAdd) * 0.9);
    const high = Math.round(base * sizeFactor * 1.35 + textureAdd + 30);
    return { low, high };
  };

  const { low, high } = getQuickCost();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full bg-slate-950 text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.heroBanner}
          alt="Drywall Construction"
          className="w-full h-full object-cover object-center opacity-30 brightness-75 scale-105 transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Headlines & Value Propositions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/15 border border-brand-400/30 text-brand-300 text-xs font-bold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Riverside County's Premier Drywall Contractor &bull; 20+ Years Exp</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Full Service Drywall Contractor in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-sky-300">
              Menifee, CA
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-2xl">
            The craftsmanship, pricing, and customer service you deserve. Residential & commercial drywall hanging, water damage repairs, texture matching, and popcorn ceiling removal by President/Owner <strong className="text-white font-semibold">Jessie Lisardo</strong>.
          </p>

          {/* Value Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>100% Invisible Texture Match Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Same-Day Dispatch for Urgent Escrow Leaks</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Licensed, Bonded & Insured Professional</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dust-Free Plastic Masking & Cleanup</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={() => scrollTo('estimator')}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-600 text-white font-bold text-sm shadow-xl shadow-brand-500/25 transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <Calculator className="w-4 h-4" />
              <span>Calculate Your Repair Cost</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCallModal}
              className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 backdrop-blur-md transition-all active:scale-95 flex items-center gap-2.5 cursor-pointer"
            >
              <Phone className="w-4 h-4 text-brand-300 fill-current" />
              <span>Call (951) 746-8891</span>
            </button>
          </div>

          {/* Trust Badges Bar */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center gap-8 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <img
                src={ASSETS.topProBadge}
                alt="Thumbtack Top Pro"
                className="w-10 h-10 rounded-xl object-contain border border-slate-700"
              />
              <div>
                <p className="font-bold text-white text-xs">Thumbtack Top Pro</p>
                <p className="text-[11px] text-slate-400">Awarded for craftsmanship</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <div>
                <p className="font-bold text-white text-xs">5.0 Star Rated</p>
                <p className="text-[11px] text-slate-400">140+ verified local reviews</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-brand-400 shrink-0" />
              <div>
                <p className="font-bold text-white text-xs">20+ Years In Business</p>
                <p className="text-[11px] text-slate-400">Riverside County trusted</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Quick Estimate Card */}
        <div className="lg:col-span-5">
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 shadow-2xl backdrop-blur-md">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800">
                  Instant Calculator
                </span>
                <h3 className="text-lg font-black text-white mt-1">Get an Instant Quote</h3>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-400">Est. Range</span>
                <p className="text-xl font-black text-brand-400">${low} – ${high}</p>
              </div>
            </div>

            {/* Form Controls */}
            <div className="space-y-4 my-5 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">
                  1. What service do you need?
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium focus:ring-2 focus:ring-brand-500 focus:outline-none"
                >
                  <option value="patch">Wall or Ceiling Hole Patch</option>
                  <option value="water">Water Damage & Leak Cutback</option>
                  <option value="popcorn">Popcorn / Acoustic Ceiling Removal</option>
                  <option value="texture">Texture Matching or Smooth Wall</option>
                  <option value="remodel">Room Remodel & Installation</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">
                  2. Approximate Size or Scope
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'small', label: 'Small (Under 12")' },
                    { id: 'medium', label: 'Medium (1-3 Spots)' },
                    { id: 'large', label: 'Single Full Room' },
                    { id: 'xlarge', label: 'Multiple Rooms' }
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedSize(s.id)}
                      className={`p-2 rounded-xl text-center font-medium border transition-all ${
                        selectedSize === s.id
                          ? 'bg-brand-600 border-brand-500 text-white font-bold'
                          : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">
                  3. Existing Wall Texture
                </label>
                <select
                  value={selectedTexture}
                  onChange={(e) => setSelectedTexture(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white font-medium focus:ring-2 focus:ring-brand-500 focus:outline-none"
                >
                  <option value="orange">Orange Peel (Standard Spray)</option>
                  <option value="knockdown">Knockdown / Troweled Texture</option>
                  <option value="smooth">Smooth Level 5 Skim Coat</option>
                </select>
              </div>
            </div>

            {/* Result & Submit Action */}
            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={onOpenConsultation}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 text-white font-bold text-sm shadow-lg shadow-emerald-600/25 transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-white" />
                <span>Lock In This Quote with Jessie</span>
              </button>
              <p className="text-[10px] text-center text-slate-400 mt-2">
                Free assessment &bull; No obligation &bull; Direct quote from owner
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
