module.exports = {
    purge: ['./src/**/*.vue', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'main-color': 'green',
                'text-color': 'blue',
                'test-color': 'red',
                'mysqr-light': '#FDF8F4',
                'mysqr-main': '#ff6501',
                'mysqr-semi-light': '#FAE6D6',
                'mysqr-dark-dark': '#0C1D37',
                'mysqr-dark-light': '#B3BFD1',
            },
            animation: { 'spin-slow': 'spin 10s linear infinite' },
        },
        container: {
            center: true,
            padding: '1rem',
            screens: {
                lg: '1124px',
                xl: '1124px',
                '2xl': '1124px',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}