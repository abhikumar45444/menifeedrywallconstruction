import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function GalleryLightbox({
  isOpen,
  onClose,
  items = [],
  currentIndex = 0,
  onIndexChange,
  onRequestEstimate
}) {
  const currentItem = items[currentIndex] || items[0];

  const handlePrev = useCallback((e) => {
    if (e) e.stopPropagation();
    if (onIndexChange) {
      onIndexChange((currentIndex - 1 + items.length) % items.length);
    }
  }, [currentIndex, items.length, onIndexChange]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (onIndexChange) {
      onIndexChange((currentIndex + 1) % items.length);
    }
  }, [currentIndex, items.length, onIndexChange]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Prevent background scrolling while open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !currentItem) return null;

  const handleRequestSimilar = () => {
    onClose();
    if (onRequestEstimate) {
      // Map tag/title to service preset
      let servicePreset = 'Drywall Repair';
      const tag = (currentItem.tag || '').toLowerCase();
      const title = (currentItem.title || '').toLowerCase();
      if (tag.includes('new') || tag.includes('framing') || title.includes('hanging')) {
        servicePreset = 'New Installation';
      } else if (tag.includes('water') || title.includes('water') || title.includes('leak')) {
        servicePreset = 'Water Damage';
      } else if (tag.includes('texture') || title.includes('texture')) {
        servicePreset = 'Texture Matching';
      } else if (tag.includes('smooth') || tag.includes('popcorn')) {
        servicePreset = 'Popcorn Removal';
      }
      onRequestEstimate(servicePreset);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 lg:p-12 bg-white/95 dark:bg-black/90 backdrop-blur-md transition-all animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Project Gallery Lightbox"
    >
      {/* Top Controls Bar */}
      <div className="absolute top-4 left-4 right-4 md:top-6 md:left-8 md:right-8 flex items-center justify-between pointer-events-auto z-10">
        <div className="flex items-center gap-3 font-mono text-xs text-neutral-600 dark:text-neutral-400">
          <span className="uppercase tracking-[0.14em] font-medium text-neutral-900 dark:text-white">PROJECT GALLERY</span>
          <span className="opacity-40">/</span>
          <span>{currentIndex + 1} of {items.length}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2.5 rounded-sm bg-neutral-100 hover:bg-neutral-200 dark:bg-white/10 dark:hover:bg-white/20 text-neutral-900 dark:text-white transition-colors cursor-pointer"
          aria-label="Close Lightbox"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Image Frame (Clicks inside do not close) */}
      <div
        className="relative max-w-5xl w-full flex flex-col items-center my-auto pointer-events-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Photo Box */}
        <div className="relative w-full flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-h-[68vh] md:max-h-[72vh] w-auto max-w-full object-contain rounded-sm border border-neutral-200 dark:border-white/10 bg-neutral-100 dark:bg-neutral-950 shadow-xs"
          />

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:-left-12 lg:-left-14 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-sm bg-white/90 hover:bg-white dark:bg-black/60 dark:hover:bg-black/90 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/15 shadow-sm transition-all cursor-pointer group"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-2 md:-right-12 lg:-right-14 top-1/2 -translate-y-1/2 p-2.5 md:p-3 rounded-sm bg-white/90 hover:bg-white dark:bg-black/60 dark:hover:bg-black/90 text-neutral-900 dark:text-white border border-neutral-200 dark:border-white/15 shadow-sm transition-all cursor-pointer group"
            aria-label="Next photo"
          >
            <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Clean Metadata Bar Underneath */}
        <div className="w-full mt-4 pt-4 border-t border-neutral-200 dark:border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-neutral-950 dark:text-white">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-4 font-mono text-xs">
            <span className="font-semibold text-sm font-sans tracking-tight">{currentItem.title}</span>
            <span className="hidden sm:inline opacity-30">&bull;</span>
            <span className="text-neutral-500 dark:text-neutral-400">{currentItem.location}</span>
            <span className="hidden sm:inline opacity-30">&bull;</span>
            <span className="text-[#096899] dark:text-[#8bd4f6] uppercase tracking-wider">{currentItem.tag}</span>
          </div>

          {/* Request Similar Work CTA */}
          <button
            onClick={handleRequestSimilar}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 dark:text-white border-b border-neutral-900 dark:border-white pb-0.5 hover:text-[#096899] dark:hover:text-[#8bd4f6] hover:border-[#096899] dark:hover:border-[#8bd4f6] transition-colors cursor-pointer self-start sm:self-auto"
          >
            <span>Request similar work</span>
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}
