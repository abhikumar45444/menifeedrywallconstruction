import React, { useState, useEffect } from 'react';

/**
 * PhoneShell — wraps in a realistic phone chassis mockup on desktop (md:),
 * goes full-screen natively on actual mobile (< md breakpoint) without any
 * bezels, notches, dynamic islands, or mock status bars.
 */
export default function PhoneShell({ children, isLocked = false }) {
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
    <div className="h-screen h-[100dvh] w-full bg-[#E8EAEF] md:bg-gradient-to-br md:from-[#DDE1E7] md:via-[#E8EAEF] md:to-[#DDE1E7] flex items-center justify-center p-0 md:py-8 md:px-4 text-slate-900 select-none overflow-hidden font-sans">
      {/* Phone chassis: only styled as a device on desktop (md:) */}
      <div className="
        w-full md:w-[414px]
        h-full md:h-[868px]
        bg-black md:bg-black
        rounded-none md:rounded-[52px]
        p-0 md:p-[12px]
        shadow-none md:shadow-[0_30px_70px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.18),0_0_0_3px_#1E2428]
        relative flex flex-col overflow-hidden
      ">
        {/* Left side physical buttons — only on desktop mockup */}
        <div className="hidden md:block absolute -left-[14px] top-28 w-[5px] h-8 bg-slate-700 rounded-l-sm shadow-xs" />
        <div className="hidden md:block absolute -left-[14px] top-40 w-[5px] h-12 bg-slate-700 rounded-l-sm shadow-xs" />
        <div className="hidden md:block absolute -left-[14px] top-56 w-[5px] h-12 bg-slate-700 rounded-l-sm shadow-xs" />
        {/* Right side physical button — power */}
        <div className="hidden md:block absolute -right-[14px] top-36 w-[5px] h-16 bg-slate-700 rounded-r-sm shadow-xs" />

        {/* Dynamic Island / notch — ONLY on desktop mockup */}
        <div className="hidden md:flex absolute top-3.5 left-1/2 -translate-x-1/2 w-[122px] h-[32px] bg-black rounded-full z-50 items-center justify-between px-3 shadow-md pointer-events-none ring-1 ring-white/10">
          <div className="w-2.5 h-2.5 rounded-full bg-[#18181B] border border-neutral-800" />
          <div className="w-2.5 h-2.5 rounded-full bg-brand-500/80 border border-neutral-800" />
        </div>

        {/* Inner screen wrapper: rounded-[40px] matches outer rounded-[52px] with 12px padding */}
        <div className="w-full h-full bg-[#0f172a] rounded-none md:rounded-[40px] flex flex-col overflow-hidden relative">
          {/* iOS status bar — sits flush against top edge (top-0 pt-3) */}
          <header className="hidden md:flex h-11 px-7 pt-3 items-center justify-between text-[13px] font-bold text-white z-40 select-none bg-transparent absolute top-0 left-0 right-0 pointer-events-none">
            <span>{currentTime}</span>
            <div className="flex items-center gap-1.5 opacity-90">
              {/* Signal */}
              <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
                <rect x="0" y="3" width="3" height="9" rx="1" opacity="0.4"/>
                <rect x="4.5" y="2" width="3" height="10" rx="1" opacity="0.6"/>
                <rect x="9" y="1" width="3" height="11" rx="1" opacity="0.8"/>
                <rect x="13.5" y="0" width="3" height="12" rx="1"/>
              </svg>
              {/* WiFi */}
              <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
                <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
                <path d="M8 6C5.8 6 3.8 6.9 2.3 8.4L1 7.1A8.5 8.5 0 0 1 8 4a8.5 8.5 0 0 1 7 3.1l-1.3 1.3A6.5 6.5 0 0 0 8 6z" opacity="0.7"/>
                <path d="M8 2.5A11.5 11.5 0 0 0 .4 5.6L-.8 4.4A13 13 0 0 1 8 1a13 13 0 0 1 8.8 3.4l-1.2 1.2A11.5 11.5 0 0 0 8 2.5z" opacity="0.4"/>
              </svg>
              {/* Battery */}
              <div className="flex items-center gap-0.5">
                <div className="w-6 h-3 border border-white rounded-sm relative flex items-center px-0.5">
                  <div className="h-1.5 bg-white rounded-xs w-full" />
                </div>
                <div className="w-0.5 h-1.5 bg-white/60 rounded-r-sm" />
              </div>
            </div>
          </header>

          {/* App container */}
          <main className={`flex-1 flex flex-col relative w-full h-full overflow-hidden bg-slate-50 ${isLocked ? 'overflow-hidden' : ''}`}>
            {children}
          </main>

          {/* iOS home indicator — ONLY on desktop mockup */}
          <footer className="hidden md:flex h-5 items-center justify-center bg-slate-50 z-30 flex-shrink-0">
            <div className="w-32 h-1 bg-slate-300 rounded-full" />
          </footer>
        </div>
      </div>
    </div>
  );
}
