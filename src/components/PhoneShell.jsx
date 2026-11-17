import React, { useState, useEffect } from 'react';
import { Wifi, Signal } from 'lucide-react';

export default function PhoneShell({ children }) {
  const [currentTime, setCurrentTime] = useState('9:41');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formatted = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes}`;
      setCurrentTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-950 flex flex-col items-center justify-center md:py-6 md:px-4 font-sans select-none antialiased">
      {/* Outer Phone Bezel Chassis - Solid Dark Charcoal with concentric outer radius */}
      <div className="relative w-full md:w-[412px] md:h-[860px] md:max-h-[92vh] md:rounded-[52px] md:p-3 md:bg-[#16191D] md:shadow-[0_25px_70px_rgba(0,0,0,0.9),0_0_0_12px_#1e293b,0_0_0_14px_#334155,0_0_0_16px_#0f172a] h-[100dvh] bg-[#16191D] flex flex-col overflow-hidden">
        {/* Physical hardware side buttons on desktop chassis */}
        <div className="hidden md:block absolute -left-[16px] top-[115px] w-[4px] h-[28px] bg-slate-600 rounded-l-sm" />
        <div className="hidden md:block absolute -left-[16px] top-[160px] w-[4px] h-[50px] bg-slate-600 rounded-l-sm" />
        <div className="hidden md:block absolute -left-[16px] top-[225px] w-[4px] h-[50px] bg-slate-600 rounded-l-sm" />
        <div className="hidden md:block absolute -right-[16px] top-[170px] w-[4px] h-[75px] bg-slate-600 rounded-r-sm" />

        {/* Inner Screen Container - Seamless rounded-[40px] matching outer bezel with zero top corner bleeding */}
        <div className="relative w-full h-full md:rounded-[40px] rounded-none overflow-hidden bg-slate-50 flex flex-col">
          {/* Top iOS Status Bar & Dynamic Island (Desktop mockup only, overlaid flush at top edge) */}
          <div className="hidden md:flex absolute top-0 left-0 right-0 z-40 items-center justify-between px-7 pt-3 pb-1 select-none pointer-events-none text-white">
            {/* iOS Left Clock */}
            <span className="text-[14px] font-semibold tracking-tight text-white w-14 drop-shadow-xs">
              {currentTime}
            </span>

            {/* Dynamic Island pill */}
            <div className="w-[110px] h-[26px] bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner pointer-events-auto">
              <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
                <div className="w-1 h-1 rounded-full bg-blue-950"></div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-[9px] font-medium text-slate-300 tracking-wider">MDC</span>
              </div>
            </div>

            {/* iOS Right Icons: Signal, Wi-Fi, Battery */}
            <div className="flex items-center gap-1.5 text-white w-14 justify-end drop-shadow-xs">
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

          {/* Screen Content Wrapper: Flush top edge */}
          <div className="relative flex-1 w-full h-full overflow-hidden flex flex-col bg-slate-50">
            {children}
          </div>

          {/* Bottom iOS Home Indicator Bar (Desktop mockup only) */}
          <div className="hidden md:flex absolute bottom-1.5 left-0 right-0 justify-center items-center py-1 z-40 pointer-events-none">
            <div className="w-32 h-1 bg-white/50 rounded-full drop-shadow-xs" />
          </div>
        </div>
      </div>
    </div>
  );
}
