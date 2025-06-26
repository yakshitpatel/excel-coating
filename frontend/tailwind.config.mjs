import { join } from "path";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      colors: {
        brand: {
          50:  '#FFFAED',
          100: '#FFF4DB',
          200: '#FFEFC9',
          300: '#FFE3A4',
          400: '#FFD77A',
          500: '#FFC40C',
          600: '#DEAA09',
          700: '#BE9106',
          800: '#9E7804',
          900: '#806103',
          950: '#634A02',
        },
        neutral: {
          50:  '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
          950: '#09090B',
        },
      },
    },
  },
  plugins: [],
};

export default config; 