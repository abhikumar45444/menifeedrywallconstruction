import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, ChevronRight } from 'lucide-react';
import { ASSETS } from '../utils/assets';

const SLIDES = [
  {
    id: 1,
    tag: 'Licensed & Insured • Menifee, CA',
    title: 'Custom Drywall & Framing',
    subtitle: 'Over 20 years of premier residential & commercial craftsmanship in Riverside County.',
    cta: 'Get Free Estimate →',
    actionTab: 'estimate',
    image: ASSETS.heroBanner,
  },
  {
    id: 2,
    tag: 'Artisan Precision • Level 5',
    title: 'Smooth Level-5 & Texture Finishes',
    subtitle: 'Flawless orange peel, knockdown, and museum-grade smooth wall conversions.',
    cta: 'Explore Textures →',
    actionTab: 'services',
    image: ASSETS.servicePhotos.smoothWall,
  },
  {
    id: 3,
    tag: 'Fast Dispatch • 24-48hr Rapid',
    title: 'Fast Patch & Water Damage Repair',
    subtitle: 'Burst pipe, escrow inspection holes, or ceiling leaks restored seamlessly.',
    cta: 'Emergency Repair →',
    actionTab: 'estimate',
    image: ASSETS.servicePhotos.waterDamage,
  }
];

export default function HeroCarousel({ scrollTop = 0, onSelectTab, onOpenCallModal }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-advance through slides every 3.5s
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
      // Swiped left -> next
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    } else if (diff < -threshold) {
      // Swiped right -> prev
      setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    }
  };

  const activeSlide = SLIDES[current];

  // Smooth scroll-linked collapse / parallax calculation
  const parallaxOffset = Math.min(160, scrollTop * 0.42);
  const contentOpacity = Math.max(0, 1 - scrollTop / 250);

  return (
    <div
      className="relative -mt-[72px] md:-mt-[88px] w-full rounded-b-3xl overflow-hidden shadow-lg bg-slate-950 select-none"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Images with Crossfade & Parallax */}
      <div 
        className="relative h-[410px] md:h-[430px] w-full will-change-transform"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            {/* Top dark gradient scrim for overlaid status bar & header */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/40 to-transparent" />
            {/* Bottom dark gradient anchored for text and CTAs */}
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
          </div>
        ))}
      </div>

      {/* Foreground Content: Cleanly Anchored at Bottom with Scroll-Fade */}
      <div 
        className="absolute inset-0 z-20 flex flex-col justify-end px-5 pb-5 pt-28 text-white transition-opacity duration-150"
        style={{ opacity: contentOpacity }}
      >
        {/* Bold Headline */}
        <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-tight mb-1.5 drop-shadow-md">
          {activeSlide.title}
        </h1>

        {/* Concise Subtitle */}
        <p className="text-xs sm:text-sm text-slate-200 line-clamp-2 mb-3.5 leading-relaxed max-w-sm drop-shadow-sm">
          {activeSlide.subtitle}
        </p>

        {/* Bottom Action Row: Bottom-Left Pill Tag & Bottom-Right Primary Pill CTA */}
        <div className="flex items-center justify-between gap-2.5">
          {/* Bottom-left dark pill tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-black/55 text-slate-200 backdrop-blur-md border border-white/20 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="truncate max-w-[160px] sm:max-w-none">{activeSlide.tag}</span>
          </div>

          {/* Bottom-right primary pill CTA button */}
          <button
            onClick={() => onSelectTab(activeSlide.actionTab)}
            className="flex items-center gap-1.5 py-2 px-3.5 rounded-full bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-600 text-white font-extrabold text-xs shadow-md shadow-brand-600/30 active:scale-95 transition-all shrink-0"
          >
            <span>{activeSlide.cta}</span>
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-1.5 mt-3.5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-6 h-1.5 bg-brand-400'
                  : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
