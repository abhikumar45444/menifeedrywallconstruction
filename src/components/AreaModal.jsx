import React, { useState } from 'react';
import { MapPin, Navigation, Search, Check, Shield, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/drywallData';

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
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-xs flex flex-col justify-end md:justify-center md:items-center overflow-hidden animate-island select-none p-0 md:p-4">
      <div className="flex-1" onClick={onClose} />

      <div className="w-full md:max-w-md bg-white rounded-t-[36px] md:rounded-3xl max-h-[92dvh] md:max-h-[85vh] h-[92dvh] md:h-auto flex flex-col overflow-hidden shadow-2xl border-t md:border border-slate-200 z-10 transition-transform duration-300">
        <div className="w-12 h-1.5 bg-slate-300 rounded-full mx-auto my-3 flex-shrink-0" />

        <div className="px-5 pb-3 flex items-center justify-between border-b border-slate-100 flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900 leading-tight">Service Area & Hub</h3>
              <p className="text-[11px] text-slate-500">Menifee Drywall Construction Coverage</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-5 py-3 border-b border-slate-100 flex-shrink-0 space-y-2.5">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by city, town, or county..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-100 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500"
            />
          </div>

          <button
            onClick={handleAutoDetect}
            className="w-full py-2 px-3 rounded-xl bg-brand-50 hover:bg-brand-100 text-brand-700 font-bold text-xs flex items-center justify-center gap-2 transition-all border border-brand-200/60"
          >
            <Navigation className={`w-3.5 h-3.5 ${isDetecting ? 'animate-spin' : ''}`} />
            <span>{isDetecting ? 'Detecting Location...' : 'Use My Current Location'}</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-3 space-y-2 smooth-scroll hide-scrollbar">
          {filteredZones.map((zone) => {
            const isSelected = selectedArea.toLowerCase().includes(zone.id);

            return (
              <div
                key={zone.id}
                onClick={() => {
                  onSelectArea(zone.name);
                  onClose();
                }}
                className={`p-3.5 rounded-2xl border text-left cursor-pointer transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-brand-50/80 border-brand-500 shadow-xs'
                    : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100'
                }`}
              >
                <div>
                  <h4 className="text-xs font-bold text-slate-900 leading-snug">{zone.name}</h4>
                  <p className="text-[10px] text-brand-600 font-semibold mt-0.5">{zone.county}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">{zone.cities}</p>
                </div>
                {isSelected && (
                  <div className="w-6 h-6 rounded-full bg-brand-600 text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
