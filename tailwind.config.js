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
          50: '#FAF7F5',
          100: '#F5EFEB',
          200: '#EBDCD3',
          300: '#DFC2B1',
          400: '#CCA288',
          500: '#B58265',
          600: '#9E674C',
          700: '#7E4E37',
          800: '#5C3928',
          900: '#3D261B',
          950: '#22140D',
        },
        stone: {
          850: '#23201D',
          950: '#141210',
        },
        rovelle: {
          onyx: '#1A1817',
          nude: '#E8D3C4',
          sand: '#DFD3C3',
          mocha: '#8A6856',
          cocoa: '#4A3427',
          rose: '#D8AEA1',
          cream: '#FDFBF7'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        luxury: '.12em',
      }
    },
  },
  plugins: [],
}
