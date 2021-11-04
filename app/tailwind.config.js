const colors = require('tailwindcss/colors')

module.exports = {
    purge: {
        content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
        options: {
            safelist: [
                /.*orange-.*/,
                /.*amber-.*/,
                /.*lime-.*/,
                /.*emerald-.*/,
                /.*teal-.*/,
                /.*cyan-.*/,
                /.*indigo-.*/,
                /.*sky-.*/,
                /.*violet-.*/,
                /.*purple-.*/,
                /.*fuchsia-.*/,
            ]
        }
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Lato', 'Roboto', 'sans-serif'],
                'subtitle': ['Urbanist', 'Roboto']
            },
            colors: {
                orange: colors.orange,
                amber: colors.amber,
                lime: colors.lime,
                emerald: colors.emerald,
                teal: colors.teal,
                cyan: colors.cyan,
                indigo: colors.indigo,
                sky: colors.sky,
                violet: colors.violet,
                purple: colors.purple,
                fuchsia: colors.fuchsia,
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
