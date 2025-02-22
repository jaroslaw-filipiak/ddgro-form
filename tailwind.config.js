/** @type {import('tailwindcss').Config} */

const { heroui } = require('@heroui/react')

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                main: '#F39325',
            },
        },
        fontFamily: {
            greo: ['var(--font-greo)'],
        },
    },
    darkMode: 'class',

    plugins: [
        heroui(),
        // nextui({
        //     themes: {
        //         dark: {
        //             colors: {
        //                 primary: {
        //                     DEFAULT: '#F39325',
        //                     foreground: '#fff',
        //                 },
        //                 focus: '#F39325',
        //             },
        //         },
        //         light: {
        //             colors: {
        //                 primary: {
        //                     DEFAULT: '#F39325',
        //                     foreground: '#fff',
        //                 },
        //                 focus: '#F39325',
        //             },
        //         },
        //     },
        //     layout: {
        //         radius: {
        //             small: '2px', // rounded-small
        //             medium: '4px', // rounded-medium
        //             large: '6px', // rounded-large
        //         },
        //         borderWidth: {
        //             small: '1px', // border-small
        //             medium: '1px', // border-medium
        //             large: '2px', // border-large
        //         },
        //     },
        // }),
    ],
}
