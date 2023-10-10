/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        'xs':'400px',
      },
      fontFamily: {
        'sans-serif': ['Alegreya Sans SC', 'sans-serif'],
      },
      keyframes: {
        show_it: {
          '0%': {transform: 'translateY(-800px)'},
          '100%': {transform: 'translateY(0)'}
        },

        open: {
          '0%': {opacity:0},
          '100%': {opacity:1},
        }
      },
      animation: {
        'show_it': 'show_it 0.5s ease-in',
        'open': 'open 0.5s ease-in',
      },
    },
  },
  plugins: [],
}

