module.exports = {
    purge: [
        './components/**/*.{vue,js}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        screens: {
            sm: {
                max: '767px'
            },
            md: {
                min: '768px',
                max: '1023px'
            },
            lg: {
                min: '1024px',
                max: '1279px'
            },
            xl: {
                min: '1280px'
            }
        },
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}