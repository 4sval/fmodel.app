module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Lato', 'Roboto', 'sans-serif'],
        'subtitle': ['Urbanist', 'Roboto']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
