/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif']
      },
      colors: {
        slate: {
          950: '#020617'
        },
        grey: {
          800: '#1e293b', // Maps dark grey to slate-800
          900: '#020617'  // Maps darker grey to slate-950 for premium deep look
        },
        yellow: {
          400: '#FEDE00',
        }
      },
      backgroundImage: {
        heropattern: "url(/herobgc.jpg)",
      }
    },
    plugins: [],
  }
}