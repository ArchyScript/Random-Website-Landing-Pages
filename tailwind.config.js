module.exports = {
    purge: ['./src/**/*.vue', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'main-color': 'green',
                'text-color': 'blue',
                'test-color': 'red',
            },
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