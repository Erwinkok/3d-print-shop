module.exports = {
    purge: [
        "./src/**/*.html",
        "./src/**/*.njk",
    ],
    theme: {
        fontFamily: {
            'sans': ['Oxygen']
        },

        extend: {
            colors: {
                teal: {
                    100: '#e6fffa',
                    200: '#b2f5ea',
                    300: '#81e6d9',
                    400: '#4fd1c5',
                    500: '#38b2ac',
                    600: '#319795',
                    700: '#2c7a7b',
                    800: '#285e61',
                    900: '#234e52'
                }
            },
        }
    },
    variants: {},
    plugins: []
};