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
        fontFamily: {
            body: [
                'Noto Sans JP',
                '-apple-system',
                'BlinkMacSystemFont',
                'Yu Gothic Medium',
                '游ゴシック Medium',
                'YuGothic',
                '游ゴシック体',
                'ヒラギノ角ゴ Pro W3',
                'メイリオ',
                'sans-serif'
            ],
            menu: [
                'Barlow Condensed',
                '-apple-system',
                'BlinkMacSystemFont',
                'Yu Gothic Medium',
                '游ゴシック Medium',
                'YuGothic',
                '游ゴシック体',
                'ヒラギノ角ゴ Pro W3',
                'メイリオ',
                'sans-serif'
            ],
            header: [
                'Barlow',
                '-apple-system',
                'BlinkMacSystemFont',
                'Yu Gothic Medium',
                '游ゴシック Medium',
                'YuGothic',
                '游ゴシック体',
                'ヒラギノ角ゴ Pro W3',
                'メイリオ',
                'sans-serif'
            ],
            logo: ['Source Code Pro', 'sans-serif']
        },
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