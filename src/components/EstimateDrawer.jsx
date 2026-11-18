import React, { useState, useEffect, useRef } from 'react';
import { X, Upload, CheckCircle2, MessageSquare, ArrowRight, Camera, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/drywallData';

const SERVICE_OPTIONS = [
  'Drywall Repair',
  'New Installation',
  'Water Damage',
  'Texture Matching',
  'Popcorn Removal'
];

const CITIES = [
  'Menifee',
  'Murrieta',
  'Temecula',
  'Lake Elsinore',
  'Perris',
  'Other Riverside County'
];

export default function EstimateDrawer({
  isOpen,
  onClose,
  initialService = 'Drywall Repair'
}) {
  const [service, setService] = useState(initialService);
  const [city, setCity] = useState('Menifee');
  const [description, setDescription] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [photos, setPhotos] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef(null);

  // Sync initialService when drawer opens or initialService changes
  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService, isOpen]);

  // Lock background scroll when open
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

  // Keyboard shortcut: Escape to close
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handlePhotoChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setPhotos((prev) => [...prev, ...newFiles]);
    }
  };

  const removePhoto = (indexToRemove) => {
    setPhotos((prev) => prev.filter((_, idx) => idx !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate instantaneous local processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setDescription('');
    setName('');
    setContact('');
    setPhotos([]);
    onClose();
  };

  const handleTextDirectly = () => {
    const textMsg = `Hi Jessie! Free Estimate Request:\nService: ${service}\nCity: ${city}, CA\nName: ${name}\nContact: ${contact}\nDetails: ${description || 'N/A'}`;
    window.location.href = `sms:${COMPANY_INFO.phoneRaw}?body=${encodeURIComponent(textMsg)}`;
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/40 dark:bg-black/70 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="drawer-title"
    >
      {/* Slide-Over Right Panel */}
      <div
        className="relative max-w-md w-full h-full bg-white dark:bg-[#121316] border-l border-neutral-200 dark:border-white/10 shadow-2xl flex flex-col z-50 overflow-hidden transform transition-transform duration-300 ease-out"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="px-6 py-5 border-b border-neutral-200 dark:border-white/10 flex items-start justify-between bg-white dark:bg-[#121316]">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
              FREE ESTIMATE
            </p>
            <h2
              id="drawer-title"
              className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-1"
            >
              Tell us about your project<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 -mr-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer rounded-xs"
            aria-label="Close Estimate Drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {isSubmitted ? (
            /* Confirmation State */
            <div className="py-6 flex flex-col items-start space-y-5 animate-fade-in text-neutral-950 dark:text-white">
              <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-white/10 text-[#096899] dark:text-[#8bd4f6] flex items-center justify-center border border-neutral-200 dark:border-white/10">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white">
                  Estimate request received<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-2 leading-relaxed">
                  We'll contact you within 2 business hours with an accurate quote and timeline.
                </p>
              </div>

              {/* Receipt Summary */}
              <div className="w-full p-4 rounded-xs bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 space-y-2 font-mono text-xs text-neutral-700 dark:text-neutral-300">
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Service:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">{service}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500 dark:text-neutral-400">Location:</span>
                  <span className="font-semibold text-neutral-900 dark:text-white">{city}, CA</span>
                </div>
                {name && (
                  <div className="flex justify-between">
                    <span className="text-neutral-500 dark:text-neutral-400">Contact:</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">{name} ({contact})</span>
                  </div>
                )}
                {photos.length > 0 && (
                  <div className="flex justify-between">
                    <span className="text-neutral-500 dark:text-neutral-400">Photos:</span>
                    <span className="font-semibold text-neutral-900 dark:text-white">{photos.length} attached</span>
                  </div>
                )}
              </div>

              <div className="w-full pt-2 space-y-3">
                <button
                  type="button"
                  onClick={handleTextDirectly}
                  className="w-full py-3 px-4 bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 text-xs font-semibold tracking-wide transition-colors flex items-center justify-center gap-2 rounded-xs cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Text Photos Directly to Jessie (Faster) ↗</span>
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full py-2 text-xs font-mono text-neutral-500 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer text-center"
                >
                  Done & Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Estimate Request Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* 1. Service Type Selector (Tactile Hairline Pills) */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2.5">
                  1. Select Service Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((item) => {
                    const isSelected = service === item;
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setService(item)}
                        className={`px-3 py-1.5 text-xs font-medium rounded-xs transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border border-neutral-950 dark:border-white shadow-xs'
                            : 'bg-neutral-50 hover:bg-neutral-100 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-white/10'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. City Selector */}
              <div>
                <label
                  htmlFor="drawer-city"
                  className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2"
                >
                  2. Project Location
                </label>
                <select
                  id="drawer-city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white text-xs font-sans rounded-xs focus:border-neutral-900 dark:focus:border-white focus:outline-none transition-colors cursor-pointer"
                >
                  {CITIES.map((c) => (
                    <option key={c} value={c} className="bg-white dark:bg-[#121316] text-neutral-950 dark:text-white">
                      {c}, CA
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Project Details */}
              <div>
                <label
                  htmlFor="drawer-description"
                  className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2"
                >
                  3. Project Details
                </label>
                <textarea
                  id="drawer-description"
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Briefly describe the room, ceiling height, or damage..."
                  className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-xs rounded-xs focus:border-neutral-900 dark:focus:border-white focus:outline-none transition-colors resize-none leading-relaxed"
                />
              </div>

              {/* 4. Optional Photo Upload Dropzone */}
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-2">
                  4. Photos of the area (Optional)
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handlePhotoChange}
                  accept="image/*"
                  multiple
                  className="hidden"
                />
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full p-4 border border-dashed border-neutral-300 dark:border-white/20 hover:border-neutral-950 dark:hover:border-white/40 bg-neutral-50/50 dark:bg-white/[0.02] rounded-xs flex flex-col items-center justify-center text-center cursor-pointer transition-colors group"
                >
                  <Camera className="w-5 h-5 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors mb-1.5" />
                  <span className="text-xs font-medium text-neutral-800 dark:text-neutral-200">
                    Attach photos of the area (optional)
                  </span>
                  <span className="text-[10px] text-neutral-500 dark:text-neutral-400 mt-0.5 font-mono">
                    JPG, PNG, or HEIC &bull; Helps provide exact pricing
                  </span>
                </div>

                {/* Selected Photos List */}
                {photos.length > 0 && (
                  <div className="mt-2.5 space-y-1.5">
                    {photos.map((file, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between px-3 py-1.5 bg-neutral-100 dark:bg-white/10 rounded-xs text-xs font-mono text-neutral-800 dark:text-neutral-200"
                      >
                        <span className="truncate max-w-[240px] text-[11px]">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removePhoto(idx)}
                          className="text-neutral-400 hover:text-red-500 transition-colors cursor-pointer text-sm leading-none pl-2"
                          aria-label={`Remove ${file.name}`}
                        >
                          &times;
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 5. Contact Information */}
              <div className="space-y-3 pt-1 border-t border-neutral-200 dark:border-white/10">
                <label className="block text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400 mb-1">
                  5. Contact Information
                </label>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-xs rounded-xs focus:border-neutral-900 dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Phone Number or Email"
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-neutral-50 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-xs rounded-xs focus:border-neutral-900 dark:focus:border-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-4 bg-neutral-950 hover:bg-neutral-800 text-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200 text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 rounded-xs cursor-pointer disabled:opacity-50"
                >
                  <span>{isSubmitting ? 'Sending Request...' : 'Submit Estimate Request'}</span>
                  <span aria-hidden="true">↗</span>
                </button>
                <p className="font-mono text-[10px] text-center text-neutral-500 dark:text-neutral-400 mt-2">
                  No commitment &bull; Direct quote from owner Jessie Lisardo
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
