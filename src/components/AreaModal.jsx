import React, { useState } from 'react';
import { MapPin, Navigation, Search, Check, X } from 'lucide-react';

const SERVICE_ZONES = [
  { id: 'menifee', name: 'Menifee & Sun City Hub', county: 'Riverside County', cities: 'Menifee, Sun City, Romoland, Homeland' },
  { id: 'murrieta', name: 'Murrieta & Temecula Valley', county: 'Southwest Riverside County', cities: 'Murrieta, Temecula, French Valley, Winchester' },
  { id: 'corona', name: 'Corona & Norco Corridor', county: 'West Riverside County', cities: 'Corona, Norco, Eastvale, El Cerrito' },
  { id: 'moreno', name: 'Riverside & Moreno Valley', county: 'Inland Empire Central', cities: 'Riverside, Moreno Valley, Woodcrest, Grand Terrace' },
  { id: 'elsinore', name: 'Lake Elsinore & Wildomar', county: 'Elsinore Valley', cities: 'Lake Elsinore, Wildomar, Canyon Lake, Lakeland' },
  { id: 'oc', name: 'South Orange County Area', county: 'Orange County', cities: 'Mission Viejo, Rancho Santa Margarita, Ladera Ranch' }
];

export default function AreaModal({ isOpen, onClose, selectedArea, onSelectArea }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isDetecting, setIsDetecting] = useState(false);

  if (!isOpen) return null;

  const filteredZones = SERVICE_ZONES.filter(z =>
    z.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    z.county.toLowerCase().includes(searchQuery.toLowerCase()) ||
    z.cities.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAutoDetect = () => {
    setIsDetecting(true);
    setTimeout(() => {
      setIsDetecting(false);
      onSelectArea('Menifee & Sun City Hub');
      onClose();
    }, 400);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 dark:bg-black/80 backdrop-blur-xs p-0 md:p-6 transition-opacity"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="area-modal-title"
    >
      <div className="absolute inset-0" />

      {/* Architectural Dialog Card */}
      <div
        className="relative w-full md:max-w-lg bg-white dark:bg-[#121316] rounded-t-xl md:rounded-sm border-t md:border border-neutral-200 dark:border-white/10 shadow-2xl max-h-[90vh] md:max-h-[85vh] flex flex-col overflow-hidden z-10 animate-fade-in text-neutral-950 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle Mobile Grab Handle (Hidden on Desktop) */}
        <div className="md:hidden flex justify-center pt-2.5 pb-1">
          <div className="w-10 h-1 bg-neutral-300 dark:bg-neutral-700 rounded-full" />
        </div>

        {/* Header */}
        <div className="px-6 py-5 border-b border-neutral-200 dark:border-white/10 flex items-start justify-between">
          <div>
            <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
              SERVICE COVERAGE / RIVERSIDE COUNTY
            </p>
            <h3
              id="area-modal-title"
              className="text-xl font-semibold tracking-tight text-neutral-950 dark:text-white mt-1"
            >
              Service Area &amp; Coverage Hub<span className="text-[#096899] dark:text-[#8bd4f6]">.</span>
            </h3>
            <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
              Menifee, Murrieta, Temecula &amp; Greater Inland Empire
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 -mr-1.5 text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors cursor-pointer rounded-xs"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search & Location Action Bar */}
        <div className="px-6 py-4 border-b border-neutral-200 dark:border-white/10 space-y-3 bg-neutral-50/50 dark:bg-white/[0.02]">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="Search by city, town, or region..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2.5 rounded-xs bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-xs text-neutral-950 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-neutral-600 focus:outline-none focus:border-neutral-950 dark:focus:border-white transition-colors"
            />
          </div>

          <button
            onClick={handleAutoDetect}
            className="w-full py-2 px-3 rounded-xs border border-neutral-200 dark:border-white/15 hover:bg-neutral-100 dark:hover:bg-white/5 text-neutral-800 dark:text-neutral-200 font-mono text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
          >
            <Navigation className={`w-3.5 h-3.5 ${isDetecting ? 'animate-spin' : ''}`} />
            <span>{isDetecting ? 'Detecting Location...' : 'Use My Current Location'}</span>
          </button>
        </div>

        {/* Zone List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-2.5">
          {filteredZones.map((zone) => {
            const isSelected = selectedArea.toLowerCase().includes(zone.id);

            return (
              <div
                key={zone.id}
                onClick={() => {
                  onSelectArea(zone.name);
                  onClose();
                }}
                className={`p-3.5 rounded-xs border text-left cursor-pointer transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-neutral-950 text-white dark:bg-white dark:text-neutral-950 border-neutral-950 dark:border-white shadow-xs'
                    : 'bg-neutral-50 hover:bg-neutral-100 dark:bg-white/5 dark:hover:bg-white/10 text-neutral-900 dark:text-white border-neutral-200 dark:border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-semibold tracking-tight">{zone.name}</h4>
                    <span className={`text-[10px] font-mono uppercase tracking-wider ${
                      isSelected ? 'opacity-70' : 'text-neutral-500 dark:text-neutral-400'
                    }`}>
                      &bull; {zone.county}
                    </span>
                  </div>
                  <p className={`text-[11px] mt-1 line-clamp-1 ${
                    isSelected ? 'opacity-80' : 'text-neutral-500 dark:text-neutral-400'
                  }`}>
                    {zone.cities}
                  </p>
                </div>

                {isSelected && (
                  <Check className="w-4 h-4 shrink-0 ml-3 text-[#8bd4f6] dark:text-[#096899]" />
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-neutral-200 dark:border-white/10 font-mono text-[10px] text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
          <span>Licensed &amp; Insured California Drywall Contractor</span>
          <span>(951) 746-8891</span>
        </div>
      </div>
    </div>
  );
}
