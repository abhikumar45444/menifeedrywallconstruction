import React, { useState } from 'react';
import { 
  Calculator, Check, ArrowRight, RotateCcw, Phone, Send, 
  Camera, ShieldCheck, Sparkles, Clock, AlertCircle 
} from 'lucide-react';
import { ESTIMATOR_QUESTIONS, COMPANY_INFO } from '../../data/drywallData';

export default function DesktopEstimator({ onOpenCallModal, onOpenConsultation }) {
  const [answers, setAnswers] = useState({
    serviceType: 'patch',
    areaSize: 'small',
    textureFinish: 'orange',
    urgency: 'standard'
  });
  const [hasPhoto, setHasPhoto] = useState(false);

  // Compute live estimate
  const computeEstimate = () => {
    let base = 195;
    const selectedService = ESTIMATOR_QUESTIONS[0].options.find(o => o.id === answers.serviceType);
    if (selectedService) base = selectedService.base;

    const selectedSize = ESTIMATOR_QUESTIONS[1].options.find(o => o.id === answers.areaSize);
    const sizeFactor = selectedSize ? selectedSize.costFactor : 1;

    const selectedTexture = ESTIMATOR_QUESTIONS[2].options.find(o => o.id === answers.textureFinish);
    const textureAdd = selectedTexture ? selectedTexture.textureAdd : 0;

    const selectedUrgency = ESTIMATOR_QUESTIONS[3].options.find(o => o.id === answers.urgency);
    const urgencyAdd = selectedUrgency ? selectedUrgency.urgencyAdd : 0;

    const low = Math.round((base * sizeFactor + textureAdd + urgencyAdd) * 0.9);
    const high = Math.round(base * sizeFactor * 1.35 + textureAdd + urgencyAdd + 40);
    return { low, high };
  };

  const { low, high } = computeEstimate();

  const handleSmsEstimate = () => {
    const sType = ESTIMATOR_QUESTIONS[0].options.find(o => o.id === answers.serviceType)?.label;
    const sSize = ESTIMATOR_QUESTIONS[1].options.find(o => o.id === answers.areaSize)?.label;
    const sTex = ESTIMATOR_QUESTIONS[2].options.find(o => o.id === answers.textureFinish)?.label;
    const sUrg = ESTIMATOR_QUESTIONS[3].options.find(o => o.id === answers.urgency)?.label;

    const body = `Hi Jessie! I calculated a project online:\n- Service: ${sType}\n- Scope: ${sSize}\n- Texture: ${sTex}\n- Timeline: ${sUrg}\n- Est. Range: $${low} - $${high}\nPlease confirm availability and final quote.`;
    window.location.href = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="estimator" className="py-20 bg-[#0c1a27] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#c97a18]/20 border border-[#c97a18]/40 text-[#f5a742] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Tool</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Estimate Your Drywall Repair Cost
          </h2>
          <p className="text-slate-300 text-sm mt-2">
            Transparent pricing with zero hidden fees. Select your project parameters below to see an instant estimate based on Jessie Lisardo's 20+ years of Riverside County drywall work.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Selectors */}
          <div className="lg:col-span-8 bg-[#102334] border border-slate-700/80 rounded-2xl p-8 shadow-xl space-y-8">
            {/* Step 1: Service Type */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded bg-[#c97a18] text-white text-xs font-bold flex items-center justify-center">1</span>
                <h3 className="text-sm font-bold text-white">What kind of drywall work do you need?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {ESTIMATOR_QUESTIONS[0].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setAnswers({ ...answers, serviceType: opt.id })}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      answers.serviceType === opt.id
                        ? 'bg-[#1b4d75] border-[#f5a742] text-white shadow-sm'
                        : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <p className="text-xs font-bold">{opt.label}</p>
                    <p className="text-[10px] text-slate-400 mt-0.5">Typical base: ${opt.base}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope & Size */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded bg-[#c97a18] text-white text-xs font-bold flex items-center justify-center">2</span>
                <h3 className="text-sm font-bold text-white">What is the estimated scope or damaged area size?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {ESTIMATOR_QUESTIONS[1].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setAnswers({ ...answers, areaSize: opt.id })}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      answers.areaSize === opt.id
                        ? 'bg-[#1b4d75] border-[#f5a742] text-white shadow-sm'
                        : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <p className="text-xs font-bold">{opt.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Texture Finish */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded bg-[#c97a18] text-white text-xs font-bold flex items-center justify-center">3</span>
                <h3 className="text-sm font-bold text-white">What texture does your existing wall have?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2.5">
                {ESTIMATOR_QUESTIONS[2].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setAnswers({ ...answers, textureFinish: opt.id })}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      answers.textureFinish === opt.id
                        ? 'bg-[#1b4d75] border-[#f5a742] text-white shadow-sm'
                        : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <p className="text-xs font-bold">{opt.label}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Urgency Timeline */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded bg-[#c97a18] text-white text-xs font-bold flex items-center justify-center">4</span>
                <h3 className="text-sm font-bold text-white">How quickly do you need this completed?</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {ESTIMATOR_QUESTIONS[3].options.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setAnswers({ ...answers, urgency: opt.id })}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      answers.urgency === opt.id
                        ? 'bg-[#1b4d75] border-[#f5a742] text-white shadow-sm'
                        : 'bg-slate-900/90 border-slate-700 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <p className="text-xs font-bold">{opt.label}</p>
                    {opt.tag && (
                      <span className="inline-block text-[10px] px-2 py-0.2 rounded bg-amber-400 text-slate-950 font-black mt-1">
                        {opt.tag}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Grounded Price Card */}
          <div className="lg:col-span-4 sticky top-28 space-y-6">
            <div className="bg-[#102334] rounded-2xl p-6 shadow-xl border border-slate-700 text-white">
              <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-[#f5a742] px-2 py-0.5 rounded border border-slate-700">
                Instant Price Range
              </span>

              <div className="my-4">
                <span className="text-xs text-slate-300 font-semibold">Estimated All-In Cost:</span>
                <p className="text-4xl font-black tracking-tight text-[#f5a742] mt-0.5">
                  ${low} – ${high}
                </p>
                <p className="text-[11px] text-slate-400 mt-1">
                  Includes floor protection, dust masking, mud coats, texture match & clean up.
                </p>
              </div>

              {/* Scope Checklist */}
              <div className="py-3 border-t border-slate-700 space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Labor, mud, tape & fasteners included</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>100% texture blending to invisible seam</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Thorough post-job broom & HEPA cleanup</span>
                </div>
              </div>

              {/* Photo Upload Attachment Simulator */}
              <div className="my-4 p-3 rounded-xl bg-slate-900 border border-dashed border-slate-700 text-center">
                <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-white mb-1">
                  <Camera className="w-3.5 h-3.5 text-[#f5a742]" />
                  <span>Attach Photo for Guaranteed Flat Bid</span>
                </div>
                <button
                  onClick={() => setHasPhoto(!hasPhoto)}
                  className={`mt-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                    hasPhoto
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                  }`}
                >
                  {hasPhoto ? '✓ Photo Attached' : '+ Select Photo'}
                </button>
              </div>

              {/* Conversion Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleSmsEstimate}
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Text Calculation to Jessie</span>
                </button>

                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-[#c97a18] hover:bg-[#b36710] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 cursor-pointer"
                >
                  <span>Submit Free Quote Request</span>
                </button>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="p-4 rounded-xl bg-[#c97a18]/10 border border-[#c97a18]/30 text-amber-200 text-xs flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold">Need Emergency Escrow Service?</strong>
                Call Jessie directly at <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="underline font-bold text-[#f5a742]">{COMPANY_INFO.phone}</a> for immediate same-day scheduling.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
