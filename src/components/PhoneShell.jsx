import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, Smartphone, Maximize2 } from 'lucide-react';

export default function PhoneShell({ children, activeTab, onTabChange }) {
  const [currentTime, setCurrentTime] = useState('9:41');
  const [forceFullscreen, setForceFullscreen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      // Format as 12h or iOS style
      const formatted = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}`;
      setCurrentTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center md:py-6 md:px-4 font-sans select-none antialiased">
      {/* Desktop Mode Toolbar / Frame Mode Switcher */}
      <div className="hidden md:flex items-center justify-between w-full max-w-[430px] mb-3 px-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-medium text-slate-300">Menifee Drywall Construction App</span>
        </div>
        <button
          onClick={() => setForceFullscreen(!forceFullscreen)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition text-[11px] border border-slate-700"
          title="Toggle phone chassis mockup"
        >
          {forceFullscreen ? <Smartphone className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          {forceFullscreen ? 'Phone Frame' : 'Fullscreen'}
        </button>
      </div>

      {/* Main Container: Dual-mode responsive container */}
      <div
        className={`relative w-full transition-all duration-300 ${
          forceFullscreen
            ? 'w-full max-w-lg h-[92vh] rounded-2xl shadow-2xl overflow-hidden border border-slate-800'
            : 'md:w-[412px] md:h-[860px] md:max-h-[92vh] md:rounded-[52px] md:shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_0_12px_#1e293b,0_0_0_14px_#334155,0_0_0_16px_#0f172a] md:border-[4px] md:border-slate-800'
        } h-[100dvh] bg-slate-50 flex flex-col overflow-hidden`}
      >
        {/* Physical hardware side buttons on desktop chassis */}
        {!forceFullscreen && (
          <>
            {/* Left side: Mute switch */}
            <div className="hidden md:block absolute -left-[16px] top-[115px] w-[4px] h-[28px] bg-slate-600 rounded-l-sm" />
            {/* Left side: Volume Up */}
            <div className="hidden md:block absolute -left-[16px] top-[160px] w-[4px] h-[50px] bg-slate-600 rounded-l-sm" />
            {/* Left side: Volume Down */}
            <div className="hidden md:block absolute -left-[16px] top-[225px] w-[4px] h-[50px] bg-slate-600 rounded-l-sm" />
            {/* Right side: Power Button */}
            <div className="hidden md:block absolute -right-[16px] top-[170px] w-[4px] h-[75px] bg-slate-600 rounded-r-sm" />
          </>
        )}

        {/* Top iOS Status Bar & Dynamic Island (Desktop mockup only) */}
        {!forceFullscreen && (
          <div className="hidden md:flex items-center justify-between px-7 pt-3.5 pb-1 z-40 bg-slate-900 text-white select-none relative">
            {/* iOS Left Clock */}
            <span className="text-[14px] font-semibold tracking-tight text-white w-14">
              {currentTime}
            </span>

            {/* Dynamic Island pill */}
            <div className="w-[110px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-950"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] font-medium text-slate-300 tracking-wider">MDC</span>
              </div>
            </div>

            {/* iOS Right Icons: Signal, Wi-Fi, Battery */}
            <div className="flex items-center gap-1.5 text-white w-14 justify-end">
              <Signal className="w-3.5 h-3.5 fill-current text-white" />
              <Wifi className="w-3.5 h-3.5 text-white" />
              <div className="flex items-center gap-0.5">
                <div className="w-5 h-2.5 border border-white rounded-[4px] p-0.5 flex items-center">
                  <div className="w-full h-full bg-white rounded-[2px]" />
                </div>
                <div className="w-0.5 h-1 bg-white rounded-r-sm" />
              </div>
            </div>
          </div>
        )}

        {/* Screen Content Wrapper */}
        <div className="relative flex-1 w-full h-full overflow-hidden flex flex-col bg-slate-50">
          {children}
        </div>

        {/* Bottom iOS Home Indicator Bar (Desktop mockup only) */}
        {!forceFullscreen && (
          <div className="hidden md:flex justify-center items-center py-2 bg-slate-900/90 backdrop-blur-sm z-40 pointer-events-none">
            <div className="w-32 h-1 bg-white/40 rounded-full" />
          </div>
        )}
      </div>

      {/* Footnote on Desktop */}
      <div className="hidden md:flex items-center gap-4 mt-3 text-xs text-slate-500">
        <span>Menifee Drywall Construction &bull; (951) 746-8891</span>
        <span>&bull;</span>
        <span>Mobile-First Web App</span>
      </div>
    </div>
  );
}
