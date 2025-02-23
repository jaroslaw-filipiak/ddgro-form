import localFont from 'next/font/local'
import './../scss/main.scss'

const greo = localFont({
    src: [
        {
            path: './fonts/Geogrotesque-Regular.woff2',
            weight: '400',
            style: 'normal',
            variable: '--font-greo',
        },
        {
            path: './fonts/Geogrotesque-Medium.woff2',
            weight: '500',
            style: 'medium',
            variable: '--font-greo',
        },
        {
            path: './fonts/Geogrotesque-SemiBold.woff2',
            weight: '600',
            style: 'semibold',
            variable: '--font-greo',
        },
        {
            path: './fonts/Geogrotesque-Bold.woff2',
            weight: '900',
            style: 'bold',
            variable: '--font-greo',
        },
    ],
})

import './globals.css'

export const metadata = {
    title: 'ddgroup',
    description: 'Skorzystaj z konfiguratora',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <body className={greo.className}>{children}</body>
        </html>
    )
}
