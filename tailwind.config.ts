import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    darkMode: 'class',
    theme: {
        container: {
            center: true,
        },
        colors: {
            transparent: 'transparent',
            black: {
                DEFAULT: '#000000',
            },
            white: {
                DEFAULT: '#FFFFFF',
            },
            orange: {
                DEFAULT: ' #f2490a',
            },
        },
        fontFamily: {
            benzin: ['Benzin', 'sans-serif'],
            petrov: ['Petrov', 'sans-serif'],
            manrope: ['Manrope', 'sans-serif'],
            intro: ['Intro', 'sans-serif'],
            inter: ['Inter', 'sans-serif'],
        },
        screens: {
            xs: '320px',
            sm: '480px',
            md: '768px',
            lg: '992px',
            xl: '1280px',
            '2xl': '1600px',
            '3xl': '1920px',
        },
        extend: {
            spacing: {
                7.5: '1.875rem',
                13: '3.25rem',
                15: '3.75rem',
                18: '4.5rem',
                25: '6.25rem',
                26: '16.25rem',
                30: '7.5rem',
            },
            fontSize: {
                'xs': '0.75rem',
                'md': '1.3125rem',
                'lg': '1.6875rem',
                'xl': '2.5rem',
                '5xl': '8.75rem',
            },
            textShadow: {
                sm: "rgba(255, 255, 255, 0.35) 1px 1px 12px",
            },
        },
    },
    content: [
        `./components/**/*.{vue,js,ts}`,
        `./layouts/**/*.vue`,
        `./pages/**/*.vue`,
        `./composables/**/*.{js,ts}`,
        `./plugins/**/*.{js,ts}`,
        `./App.{js,ts,vue}`,
        `./app.{js,ts,vue}`,
        `./Error.{js,ts,vue}`,
        `./error.{js,ts,vue}`,
    ],
}
