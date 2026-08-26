/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
        mono: ['monospace'],
        orbitron: ['"Orbitron"', 'sans-serif']
      },
      colors: {
        galaxy: {
          dark: '#02030a',
          deep: '#050b18',
          card: 'rgba(6, 9, 25, 0.65)',
          cyan: '#22d3ee',
          sky: '#38bdf8',
          purple: '#7c3aed',
          amber: '#fde047'
        }
      }
    },
  },
  plugins: [],
}
