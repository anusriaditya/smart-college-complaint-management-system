/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        saveetha: {
          50: '#f0f5ff',
          100: '#e0ecff',
          200: '#b9d5ff',
          300: '#7cb2ff',
          400: '#3888ff',
          500: '#0b62f4',
          600: '#0048d1',
          700: '#0037a8',
          800: '#042e88',
          900: '#09276d',
          950: '#051847',
        },
        pentagon: {
          gold: '#f59e0b',
          maroon: '#881337',
          cyan: '#06b6d4',
          indigo: '#4f46e5'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'beacon-green': 'beaconGreen 2s infinite',
        'beacon-yellow': 'beaconYellow 1.5s infinite',
        'beacon-red': 'beaconRed 1s infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        beaconGreen: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8', boxShadow: '0 0 15px rgba(34, 197, 94, 0.6)' },
          '50%': { transform: 'scale(1.08)', opacity: '1', boxShadow: '0 0 28px rgba(34, 197, 94, 0.9)' },
        },
        beaconYellow: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.8', boxShadow: '0 0 15px rgba(234, 179, 8, 0.6)' },
          '50%': { transform: 'scale(1.12)', opacity: '1', boxShadow: '0 0 32px rgba(234, 179, 8, 0.95)' },
        },
        beaconRed: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.9', boxShadow: '0 0 20px rgba(239, 68, 68, 0.7)' },
          '50%': { transform: 'scale(1.18)', opacity: '1', boxShadow: '0 0 45px rgba(239, 68, 68, 1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
