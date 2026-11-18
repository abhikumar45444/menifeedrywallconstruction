/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f4f2ed',
          light: '#fbfaf8',
          card: '#ffffff',
          dark: '#eae7df',
        },
        ink: {
          DEFAULT: '#151614',
          muted: '#4b4c46',
          faint: '#73756d',
        },
        line: {
          DEFAULT: '#cccac3',
          subtle: '#e2e0d8',
          dark: '#51544e',
        },
        graphite: '#181a18',
        brand: {
          50: '#f0f7fb',
          100: '#e0eff7',
          200: '#b9dfef',
          300: '#8bd4f6', // reference blue-light
          400: '#3baee4',
          500: '#1188c4', // reference primary blue
          600: '#096899', // reference blue-deep
          700: '#075176', // reference button hover
          800: '#064261',
          900: '#042d43',
          950: '#021a28',
        },
        trade: {
          navy: '#096899',
          dark: '#151614',
          steel: '#2b4158',
          gold: '#c97a18',
          amber: '#d97706',
          chalk: '#f4f2ed',
          stone: '#eae7df',
          border: '#cccac3',
        },
        accent: {
          400: '#f59e0b',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
        }
      },
      fontFamily: {
        sans: ['"Instrument Sans"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(4px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
