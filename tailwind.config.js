/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f6fa',
          100: '#e1ecf5',
          200: '#c3d8eb',
          300: '#94bcdb',
          400: '#5e9bc6',
          500: '#2c76ac',
          600: '#1b4d75', // Established Master Contractor Blue
          700: '#143c5e',
          800: '#0f2c45',
          900: '#0a1e30',
          950: '#061320',
        },
        trade: {
          navy: '#122538', // Deep Craftsman Navy
          dark: '#0c1a27',
          steel: '#2b4158',
          gold: '#c97a18', // Warm Tool Ochre / Craftsmanship Gold
          amber: '#d97706',
          chalk: '#faf8f5', // Gypsum Plaster / Clean Wall
          stone: '#f4f1ea',
          border: '#e4dfd5',
        },
        accent: {
          400: '#f59e0b',
          500: '#d97706', // Warm Construction Amber
          600: '#b45309',
          700: '#92400e',
        }
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
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
