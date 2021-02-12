/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const {
    colors
} = require('tailwindcss/defaultTheme')

module.exports = {
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
        extend: {
            colors: {
                red: {
                    ...colors.red,
                    '700': '#EA5252',
                    '800': '#F24F5B',
                    '900': '#F24F4F'
                },
                gray: {
                    ...colors.gray,
                    '300': '#ECECEC',
                    '400': '#D0D0D0',
                    '900': '#4F4F4F'
                },
                brown: {
                    '600': '#562c2c',
                    '900': '#361f1f'
                },
                orange: '#EA8052',
                yellow: '#EAAD52',
                green: '#96B84A'
            },
            borderRadius: {
                xl: '0.75rem'
            }
        }
    },
    variants: {},
    plugins: []
}
