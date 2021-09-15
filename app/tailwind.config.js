module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'Roboto', 'sans-serif'],
        'subtitle': ['Urbanist', 'Roboto']
      },
      colors: {
        'c-bg-blue-h': '#CCD9E6',
        'c-bg-blue-s': '#E2E9F0',
        'c-blue': '#348AC7',
        'c-pale-red': '#CB2E81',
        'c-purple': '#7474BF',
        'c-plum': '#DDA0DD',
        'c-white': '#EDF0F5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
