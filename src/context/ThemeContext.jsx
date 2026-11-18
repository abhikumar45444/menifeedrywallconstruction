import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const root = document.documentElement;
    const metaTheme = document.querySelector('meta[name="theme-color"]');

    const updateTheme = (e) => {
      const darkActive = e.matches;
      setIsDark(darkActive);
      if (darkActive) {
        root.classList.add('dark');
        if (metaTheme) metaTheme.setAttribute('content', '#121312');
      } else {
        root.classList.remove('dark');
        if (metaTheme) metaTheme.setAttribute('content', '#f4f2ed');
      }
    };

    // Apply initial state
    updateTheme(mediaQuery);

    // Listen to live system / browser theme changes
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateTheme);
      return () => mediaQuery.removeEventListener('change', updateTheme);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(updateTheme);
      return () => mediaQuery.removeListener(updateTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDark, theme: isDark ? 'dark' : 'light' }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    return {
      isDark: false,
      theme: 'light'
    };
  }
  return context;
}
