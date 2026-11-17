import React from 'react';
import { Home, Layers, Calculator, Star, Sparkles } from 'lucide-react';

export default function BottomNav({ activeTab, onSelectTab }) {
  const tabs = [
    {
      id: 'home',
      label: 'Home',
      icon: Home,
      badge: null,
    },
    {
      id: 'services',
      label: 'Services',
      icon: Layers,
      badge: '8',
    },
    {
      id: 'estimate',
      label: 'Estimator',
      icon: Calculator,
      badge: 'Fast',
      badgeColor: 'bg-emerald-500',
    },
    {
      id: 'reviews',
      label: 'Reviews',
      icon: Star,
      badge: '5.0★',
      badgeColor: 'bg-amber-500',
    },
  ];

  return (
    <div className="sticky bottom-0 z-30 pointer-events-none px-3.5 pb-2 pt-1 w-full">
      <nav
        aria-label="Mobile Navigation"
        className="pointer-events-auto max-w-[390px] mx-auto bg-white/95 backdrop-blur-md rounded-[28px] shadow-xl border border-slate-200/90 px-2 py-1.5 flex justify-around items-center"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onSelectTab(tab.id)}
              className={`relative flex flex-col items-center justify-center flex-1 py-1 px-1 rounded-2xl transition-all duration-200 active:scale-95 ${
                isActive
                  ? 'text-brand-600 font-bold'
                  : 'text-slate-500 hover:text-slate-700 font-medium'
              }`}
            >
              {/* Active Background Glow / Pill Indicator */}
              {isActive && (
                <div className="absolute inset-0 bg-brand-50 rounded-2xl -z-10 animate-fade-in" />
              )}

              {/* Icon Container with Badge */}
              <div className="relative mb-0.5">
                <Icon
                  className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110 stroke-[2.4]' : 'stroke-[1.8]'
                  }`}
                />

                {/* Optional Mini Badge */}
                {tab.badge && (
                  <span
                    className={`absolute -top-1.5 -right-3 text-[9px] font-bold text-white px-1.5 py-0.2 rounded-full leading-tight shadow-xs ${
                      tab.badgeColor || 'bg-brand-500'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </div>

              {/* Label */}
              <span className={`text-[10px] tracking-tight leading-none ${isActive ? 'font-bold text-brand-700' : 'text-slate-500'}`}>
                {tab.label}
              </span>

              {/* Active Dot */}
              {isActive && (
                <span className="w-1 h-1 rounded-full bg-brand-600 mt-0.5"></span>
              )}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
