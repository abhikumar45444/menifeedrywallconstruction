import React, { useState } from 'react';
import { 
  Calculator, Check, ArrowRight, RotateCcw, Phone, Send, 
  Camera, ShieldCheck, Sparkles, HelpCircle, AlertCircle, Clock
} from 'lucide-react';
import { ESTIMATOR_QUESTIONS, COMPANY_INFO } from '../data/drywallData';

export default function EstimatorScreen({ onOpenCallModal }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({
    serviceType: 'patch',
    areaSize: 'small',
    textureFinish: 'orange',
    urgency: 'standard'
  });
  const [hasPhoto, setHasPhoto] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  // Compute live price estimate
  const computeEstimate = () => {
    let base = 195;
    let multiplier = 1;

    // Service Type
    const selectedService = ESTIMATOR_QUESTIONS[0].options.find(o => o.id === answers.serviceType);
    if (selectedService) {
      base = selectedService.base;
      multiplier = selectedService.multiplier;
    }

    // Area Size
    const selectedSize = ESTIMATOR_QUESTIONS[1].options.find(o => o.id === answers.areaSize);
    const sizeFactor = selectedSize ? selectedSize.costFactor : 1;

    // Texture finish add
    const selectedTexture = ESTIMATOR_QUESTIONS[2].options.find(o => o.id === answers.textureFinish);
    const textureAdd = selectedTexture ? selectedTexture.textureAdd : 0;

    // Urgency add
    const selectedUrgency = ESTIMATOR_QUESTIONS[3].options.find(o => o.id === answers.urgency);
    const urgencyAdd = selectedUrgency ? selectedUrgency.urgencyAdd : 0;

    const low = Math.round((base * sizeFactor + textureAdd + urgencyAdd) * 0.9);
    const high = Math.round((base * sizeFactor * 1.35 + textureAdd + urgencyAdd + 40));

    return { low, high };
  };

  const { low, high } = computeEstimate();

  const handleSelectOption = (questionId, optionId) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    if (currentStep < ESTIMATOR_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowSummary(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setShowSummary(false);
    setAnswers({
      serviceType: 'patch',
      areaSize: 'small',
      textureFinish: 'orange',
      urgency: 'standard'
    });
  };

  const handleSmsEstimate = () => {
    const sType = ESTIMATOR_QUESTIONS[0].options.find(o => o.id === answers.serviceType)?.label;
    const sSize = ESTIMATOR_QUESTIONS[1].options.find(o => o.id === answers.areaSize)?.label;
    const sTex = ESTIMATOR_QUESTIONS[2].options.find(o => o.id === answers.textureFinish)?.label;
    const sUrg = ESTIMATOR_QUESTIONS[3].options.find(o => o.id === answers.urgency)?.label;

    const body = `Hi Jessie! I ran your app estimator:\n- Service: ${sType}\n- Scope: ${sSize}\n- Texture: ${sTex}\n- Timeline: ${sUrg}\n- Est. Range: $${low} - $${high}\nPlease confirm availability and final quote.`;
    window.location.href = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="w-full flex-1 overflow-y-auto smooth-scroll bg-slate-50 pb-28">
      {/* Top Header Banner */}
      <div className="p-5 bg-gradient-to-b from-slate-900 to-slate-800 text-white pt-6">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800 flex items-center gap-1">
            <Sparkles className="w-2.5 h-2.5" />
            Instant Drywall Calculator
          </span>
          <button
            onClick={handleReset}
            className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset</span>
          </button>
        </div>

        <h1 className="text-xl font-black tracking-tight text-white mt-1">
          Estimate Your Repair Cost
        </h1>
        <p className="text-xs text-slate-300 mt-0.5">
          Get a real, data-driven estimate based on Jessie’s 20+ years of Riverside County pricing.
        </p>

        {/* Dynamic Live Price Preview Card */}
        <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-brand-600 to-brand-700 text-white shadow-lg border border-brand-400/30">
          <div className="flex items-center justify-between text-xs text-brand-100 mb-1">
            <span className="font-semibold uppercase tracking-wider text-[10px]">Estimated Price Range</span>
            <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold">No Obligation</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl sm:text-3xl font-black tracking-tight">
              ${low} – ${high}
            </span>
            <span className="text-xs text-brand-200">typical all-in cost</span>
          </div>
          <p className="text-[10px] text-brand-100 mt-1">
            Includes plastic masking, dust containment, mud coats, texture match & clean up.
          </p>
        </div>

        {/* Step Progress Bar */}
        <div className="flex items-center gap-1.5 mt-4">
          {ESTIMATOR_QUESTIONS.map((q, idx) => (
            <button
              key={q.id}
              onClick={() => { setCurrentStep(idx); setShowSummary(false); }}
              className={`h-1.5 flex-1 rounded-full transition-all ${
                idx === currentStep
                  ? 'bg-brand-400'
                  : idx < currentStep || showSummary
                  ? 'bg-emerald-400'
                  : 'bg-white/20'
              }`}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
          <span>Step {currentStep + 1} of 4</span>
          <span>{ESTIMATOR_QUESTIONS[currentStep].question.split(' ')[0]}...</span>
        </div>
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Active Question Card */}
        {!showSummary ? (
          <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-brand-100 text-brand-700 text-xs font-bold flex items-center justify-center shrink-0">
                {currentStep + 1}
              </span>
              <h2 className="text-sm font-bold text-slate-900 leading-snug">
                {ESTIMATOR_QUESTIONS[currentStep].question}
              </h2>
            </div>

            {/* Options list */}
            <div className="space-y-2 pt-1">
              {ESTIMATOR_QUESTIONS[currentStep].options.map((opt) => {
                const isSelected = answers[ESTIMATOR_QUESTIONS[currentStep].id] === opt.id;

                return (
                  <button
                    key={opt.id}
                    onClick={() => handleSelectOption(ESTIMATOR_QUESTIONS[currentStep].id, opt.id)}
                    className={`w-full p-3.5 rounded-2xl border text-left flex items-center justify-between transition-all active:scale-[0.99] ${
                      isSelected
                        ? 'bg-brand-50/80 border-brand-500 shadow-xs text-brand-950'
                        : 'bg-slate-50/70 border-slate-200/80 hover:bg-slate-100 text-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected
                            ? 'border-brand-600 bg-brand-600 text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-xs font-semibold leading-tight">
                        {opt.label}
                      </span>
                    </div>

                    {opt.tag && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">
                        {opt.tag}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Stepper Navigation Buttons */}
            <div className="pt-2 flex items-center justify-between">
              <button
                disabled={currentStep === 0}
                onClick={() => setCurrentStep(prev => Math.max(0, prev - 1))}
                className={`text-xs font-semibold px-3 py-1.5 rounded-xl ${
                  currentStep === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                Back
              </button>

              <button
                onClick={() => {
                  if (currentStep < ESTIMATOR_QUESTIONS.length - 1) {
                    setCurrentStep(prev => prev + 1);
                  } else {
                    setShowSummary(true);
                  }
                }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold shadow-xs active:scale-95 transition-all"
              >
                <span>{currentStep === ESTIMATOR_QUESTIONS.length - 1 ? 'View Estimate Summary' : 'Next Step'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* Estimate Summary & Direct Dispatch */
          <div className="p-4 rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-4 animate-island">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <h2 className="text-sm font-extrabold text-slate-900">
                Your Project Calculation
              </h2>
              <button
                onClick={() => setShowSummary(false)}
                className="text-xs text-brand-600 font-bold hover:underline"
              >
                Edit Answers
              </button>
            </div>

            {/* Breakdown table */}
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Job Category:</span>
                <span className="font-bold text-slate-800">
                  {ESTIMATOR_QUESTIONS[0].options.find(o => o.id === answers.serviceType)?.label}
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Approx. Scope:</span>
                <span className="font-bold text-slate-800">
                  {ESTIMATOR_QUESTIONS[1].options.find(o => o.id === answers.areaSize)?.label}
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Texture Style:</span>
                <span className="font-bold text-slate-800">
                  {ESTIMATOR_QUESTIONS[2].options.find(o => o.id === answers.textureFinish)?.label}
                </span>
              </div>
              <div className="flex items-center justify-between p-2 rounded-xl bg-slate-50">
                <span className="text-slate-500 font-medium">Timeline:</span>
                <span className="font-bold text-emerald-700">
                  {ESTIMATOR_QUESTIONS[3].options.find(o => o.id === answers.urgency)?.label}
                </span>
              </div>
            </div>

            {/* Photo Attachment Simulator */}
            <div className="p-3 rounded-2xl bg-slate-50 border border-dashed border-slate-300 text-center">
              <div className="flex items-center justify-center gap-2 text-xs font-semibold text-slate-700 mb-1">
                <Camera className="w-4 h-4 text-brand-600" />
                <span>Snap or Attach Photo of Damaged Area</span>
              </div>
              <p className="text-[10px] text-slate-500 mb-2">
                Sending a photo allows Jessie to give you a guaranteed fixed-price estimate in minutes.
              </p>
              <button
                onClick={() => setHasPhoto(!hasPhoto)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  hasPhoto
                    ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                    : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {hasPhoto ? '✓ 1 Photo Selected' : '+ Select Photo'}
              </button>
            </div>

            {/* Direct Conversion Actions */}
            <div className="space-y-2 pt-2">
              <button
                onClick={handleSmsEstimate}
                className="w-full py-3.5 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 active:scale-[0.98] transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Text This Calculation Directly to Jessie</span>
              </button>

              <button
                onClick={onOpenCallModal}
                className="w-full py-3 px-4 rounded-2xl bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call to Lock In Quote: (951) 746-8891</span>
              </button>
            </div>
          </div>
        )}

        {/* Trust Guarantees */}
        <div className="p-4 rounded-3xl bg-amber-50/70 border border-amber-200/60 space-y-2">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-xs">
            <ShieldCheck className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Honest Contractor Guarantee</span>
          </div>
          <p className="text-[11px] text-amber-800 leading-relaxed">
            No surprise price hikes. Jessie Lisardo gives accurate quotes upfront with all materials and labor included.
          </p>
        </div>
      </div>
    </div>
  );
}
