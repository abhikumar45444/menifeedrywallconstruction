import React, { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { COMPANY_INFO } from '../../data/drywallData';

export default function DesktopEstimator({ onOpenCallModal, onOpenConsultation }) {
  const [damageType, setDamageType] = useState('patch');
  const [damageSize, setDamageSize] = useState('medium');
  const [textureType, setTextureType] = useState('orange-peel');
  const [ceilingHeight, setCeilingHeight] = useState('standard');
  const [isWaterDamage, setIsWaterDamage] = useState(false);

  // Accurate drywall estimating algorithm
  const calculateEstimate = () => {
    let base = 195;
    if (damageType === 'crack') base = 160;
    if (damageType === 'water') base = 350;
    if (damageType === 'popcorn') base = 520;
    if (damageType === 'hanging') base = 780;

    let sizeMultiplier = 1.0;
    if (damageSize === 'small') sizeMultiplier = 0.85;
    if (damageSize === 'medium') sizeMultiplier = 1.35;
    if (damageSize === 'large') sizeMultiplier = 2.1;
    if (damageSize === 'multiple') sizeMultiplier = 3.2;

    let textureFee = 0;
    if (textureType === 'knockdown') textureFee = 45;
    if (textureType === 'smooth') textureFee = 90;
    if (textureType === 'skip-trowel') textureFee = 55;

    let heightFee = ceilingHeight === 'high' ? 85 : 0;
    let waterAdd = isWaterDamage ? 95 : 0;

    const subtotal = (base * sizeMultiplier) + textureFee + heightFee + waterAdd;
    const low = Math.round(subtotal * 0.92);
    const high = Math.round(subtotal * 1.32);

    return { low, high };
  };

  const { low, high } = calculateEstimate();

  return (
    <section className="shell py-20 lg:py-28 border-b border-[#cccac3]" id="estimator" aria-labelledby="estimator-title">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
        <div>
          <p className="eyebrow text-[#4b4c46]">
            <span className="dot"></span> INTERACTIVE ESTIMATOR
          </p>
          <h2 id="estimator-title" className="editorial-h2 text-[#151614] mt-4">
            Instant repair quote<span className="text-[#1188c4]">.</span>
          </h2>
        </div>
        <p className="text-[17px] text-[#4b4c46] leading-[1.5] max-w-md">
          Transparent, fair trade pricing based on Riverside County standard labor and material costs. No surprise fees.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Inputs: Architectural Monospace Controls */}
        <div className="lg:col-span-7 space-y-8 bg-white p-8 border border-[#cccac3] shadow-xs">
          {/* Step 1: Damage Type */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="font-mono text-[11px] text-[#4b4c46] uppercase tracking-wider">
                01 &bull; DAMAGE CATEGORY
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {[
                { id: 'patch', label: 'Hole / Patch' },
                { id: 'crack', label: 'Stress Crack' },
                { id: 'water', label: 'Water Leak' },
                { id: 'popcorn', label: 'Popcorn Removal' },
                { id: 'hanging', label: 'Sheetrock Hanging' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setDamageType(item.id)}
                  type="button"
                  className={`py-3 px-3.5 text-xs font-semibold text-left border transition-all cursor-pointer ${
                    damageType === item.id
                      ? 'border-[#096899] bg-[#096899] text-white'
                      : 'border-[#cccac3] bg-[#f4f2ed]/60 text-[#151614] hover:border-[#151614]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Size of Area */}
          <div>
            <span className="font-mono text-[11px] text-[#4b4c46] uppercase tracking-wider block mb-3">
              02 &bull; APPROXIMATE SIZE
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'small', label: 'Small (< 1 ft)' },
                { id: 'medium', label: 'Medium (1–3 ft)' },
                { id: 'large', label: 'Large (3–6 ft)' },
                { id: 'multiple', label: 'Full Room / Multi' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setDamageSize(item.id)}
                  type="button"
                  className={`py-3 px-2.5 text-xs font-semibold text-center border transition-all cursor-pointer ${
                    damageSize === item.id
                      ? 'border-[#096899] bg-[#096899] text-white'
                      : 'border-[#cccac3] bg-[#f4f2ed]/60 text-[#151614] hover:border-[#151614]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Texture Finish */}
          <div>
            <span className="font-mono text-[11px] text-[#4b4c46] uppercase tracking-wider block mb-3">
              03 &bull; TEXTURE FINISH
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {[
                { id: 'orange-peel', label: 'Orange Peel' },
                { id: 'knockdown', label: 'Knockdown' },
                { id: 'skip-trowel', label: 'Skip Trowel' },
                { id: 'smooth', label: 'Smooth Wall' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setTextureType(item.id)}
                  type="button"
                  className={`py-3 px-2.5 text-xs font-semibold text-center border transition-all cursor-pointer ${
                    textureType === item.id
                      ? 'border-[#096899] bg-[#096899] text-white'
                      : 'border-[#cccac3] bg-[#f4f2ed]/60 text-[#151614] hover:border-[#151614]'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Height & Water Damage Add-ons */}
          <div className="pt-4 border-t border-[#cccac3] flex flex-wrap items-center justify-between gap-4 font-mono text-[12px]">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={ceilingHeight === 'high'}
                onChange={(e) => setCeilingHeight(e.target.checked ? 'high' : 'standard')}
                className="w-4 h-4 accent-[#096899]"
              />
              <span className="text-[#151614]">High Ceiling / Scaffolding Needed (&gt; 9 ft)</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={isWaterDamage}
                onChange={(e) => setIsWaterDamage(e.target.checked)}
                className="w-4 h-4 accent-[#096899]"
              />
              <span className="text-[#151614]">Insulation / Wet Backing Replacement</span>
            </label>
          </div>
        </div>

        {/* Right Output: Bold Editorial Price Card */}
        <div className="lg:col-span-5 bg-[#151614] text-[#f4f2ed] p-8 border border-[#2b2d2a] shadow-lg sticky top-28">
          <div className="flex justify-between items-center border-b border-[#2b2d2a] pb-4">
            <span className="font-mono text-[11px] text-[#8bd4f6] uppercase tracking-wider">
              ESTIMATED PROJECT RANGE
            </span>
            <span className="font-mono text-[11px] text-[#d5d5cd]">
              RIVERSIDE CO. RATES
            </span>
          </div>

          {/* Massive Price Display */}
          <div className="py-6 border-b border-[#2b2d2a]">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl lg:text-5xl font-bold font-sans tracking-tight text-white">
                ${low} &ndash; ${high}
              </span>
            </div>
            <p className="font-mono text-xs text-[#d5d5cd] mt-2">
              Includes labor, materials, dust containment &amp; texture matching.
            </p>
          </div>

          {/* Itemized Specification */}
          <div className="py-5 border-b border-[#2b2d2a] space-y-2 font-mono text-xs text-[#d5d5cd]">
            <div className="flex justify-between">
              <span>Category:</span>
              <span className="text-white capitalize">{damageType}</span>
            </div>
            <div className="flex justify-between">
              <span>Scope:</span>
              <span className="text-white capitalize">{damageSize}</span>
            </div>
            <div className="flex justify-between">
              <span>Finish:</span>
              <span className="text-white capitalize">{textureType.replace('-', ' ')}</span>
            </div>
            <div className="flex justify-between">
              <span>Warranty:</span>
              <span className="text-[#8bd4f6]">1-Year Workmanship</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-6 space-y-3">
            <button
              onClick={onOpenConsultation}
              className="w-full py-4 px-6 bg-white hover:bg-[#8bd4f6] text-[#151614] font-bold text-sm flex items-center justify-between transition-colors cursor-pointer"
            >
              <span>Lock in this estimate</span>
              <span className="text-lg">↗</span>
            </button>
            <button
              onClick={onOpenCallModal}
              className="w-full py-3 text-center font-mono text-xs text-[#8bd4f6] hover:underline cursor-pointer"
            >
              Or call Jessie directly: (951) 746-8891
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
