import React, { useState, useEffect, useRef } from 'react';
import { Phone, Calculator, ShieldCheck, Star, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../utils/assets';
import { COMPANY_INFO } from '../data/drywallData';

const SLIDES = [
  {
    id: 1,
    tag: 'Riverside County • 20+ Years Exp',
    title: 'Full Service Drywall Contractor in Menifee, CA',
    subtitle: 'The craftsmanship, fair pricing, and customer service you deserve. Residential & commercial drywall done right.',
    badge: 'Top Pro Rated',
    primaryCta: 'Instant Repair Estimate',
    primaryTab: 'estimate',
    secondaryCta: 'Call Jessie',
    secondaryAction: 'call',
    image: ASSETS.heroBanner,
    overlay: 'from-slate-950/90 via-slate-900/60 to-slate-950/80'
  },
  {
    id: 2,
    tag: 'Emergency & Urgent Leaks',
    title: 'Water Damage Leaks & Escrow Closings',
    subtitle: 'Pipe burst, water heater leaks, or last-minute move-out patches? Rapid response across Riverside County.',
    badge: '24-48hr Rapid Response',
    primaryCta: 'Diagnostic & Quote',
    primaryTab: 'estimate',
    secondaryCta: 'Emergency Call',
    secondaryAction: 'call',
    image: ASSETS.servicePhotos.waterDamage,
    overlay: 'from-sky-950/90 via-slate-900/60 to-slate-950/80'
  },
  {
    id: 3,
    tag: 'Artisan Precision',
    title: 'Flawless Texture Matching & Popcorn Removal',
    subtitle: 'No more bald spots or mismatched seams. Seamless orange peel, knockdown, and Level 5 silky smooth wall finishes.',
    badge: '100% Match Guarantee',
    primaryCta: 'View Textures & Services',
    primaryTab: 'services',
    secondaryCta: 'Call (951) 746-8891',
    secondaryAction: 'call',
    image: ASSETS.servicePhotos.smoothWall,
    overlay: 'from-amber-950/90 via-slate-900/65 to-slate-950/80'
  },
  {
    id: 4,
    tag: 'Real Local Reputation',
    title: 'Trusted by Hundreds of Local Homeowners',
    subtitle: '"Jessie was quick to respond, fair priced, showed up on time, and the texture was identical!" — Verified Reviews.',
    badge: '5.0 ★ Google & Thumbtack',
    primaryCta: 'See Verified Reviews',
    primaryTab: 'reviews',
    secondaryCta: 'Free Consultation',
    secondaryAction: 'consultation',
    image: ASSETS.servicePhotos.installation,
    overlay: 'from-slate-950/90 via-slate-900/60 to-slate-950/80'
  }
];

export default function HeroCarousel({
  headerHeight = 96,
  parallaxOffset = 0,
  onSelectTab,
  onOpenCallModal,
  onOpenConsultation
}) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance every 3.5s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  // Touch swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 40;
    if (diff > threshold) {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    } else if (diff < -threshold) {
      setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }
  };

  const activeSlide = SLIDES[current];

  return (
    <div
      className="relative w-full rounded-b-3xl overflow-hidden shadow-xl bg-slate-950 select-none"
      style={{
        marginTop: -headerHeight, // Tucks the hero full-bleed right under the sticky header
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Parallax & Crossfade */}
      <div className="relative h-[480px] md:h-[500px] w-full overflow-hidden">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
              style={{
                transform: `translateY(${parallaxOffset}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            />
            {/* Top dark gradient overlay for top bar readability */}
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/85 via-black/40 to-transparent pointer-events-none" />
            {/* Scrim Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-t ${slide.overlay}`} />
          </div>
        ))}

        {/* Foreground Content */}
        <div className="relative z-20 h-full flex flex-col justify-end px-5 pb-6 pt-32 md:pt-36 text-white">
          {/* Top Pill / Badge */}
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold bg-[#c97a18]/90 text-white backdrop-blur-md shadow-sm border border-amber-400/30">
              <Sparkles className="w-3 h-3 text-amber-200" />
              {activeSlide.badge}
            </span>
            <span className="text-[11px] text-slate-300 font-medium">
              {activeSlide.tag}
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight mb-2 drop-shadow-sm">
            {activeSlide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mb-4 leading-relaxed max-w-sm">
            {activeSlide.subtitle}
          </p>

          {/* Dual CTAs */}
          <div className="flex items-center gap-2.5 mb-4">
            <button
              onClick={() => onSelectTab(activeSlide.primaryTab)}
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#c97a18] hover:bg-[#b36710] text-white font-bold text-xs sm:text-sm shadow-md active:scale-[0.98] transition-all"
            >
              <Calculator className="w-4 h-4" />
              <span>{activeSlide.primaryCta}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-80" />
            </button>

            <button
              onClick={() => {
                if (activeSlide.secondaryAction === 'call') onOpenCallModal();
                else if (activeSlide.secondaryAction === 'consultation') onOpenConsultation();
                else onSelectTab('services');
              }}
              className="flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-xl bg-white/15 hover:bg-white/25 text-white backdrop-blur-md border border-white/20 font-semibold text-xs active:scale-[0.98] transition-all"
            >
              <Phone className="w-3.5 h-3.5 fill-current text-[#f5a742]" />
              <span>{activeSlide.secondaryCta}</span>
            </button>
          </div>

          {/* Trust Value Badges Row */}
          <div className="flex items-center justify-between pt-2 border-t border-white/15 text-[11px] text-slate-300">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Free Quotes</span>
            </div>
            <div className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>5.0 Star Rated</span>
            </div>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
              <span>Licensed & Insured</span>
            </div>
          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-1.5 mt-3">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 rounded-full ${i === current
                  ? 'w-6 h-1.5 bg-brand-400'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                  }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
