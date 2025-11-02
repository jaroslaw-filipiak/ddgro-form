import { ReactNode } from 'react'
import localFont from 'next/font/local'
import '../scss/main.scss'
import './globals.css'

const greo = localFont({
    src: [
        {
            path: './fonts/Geogrotesque-Regular.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './fonts/Geogrotesque-Medium.woff2',
            weight: '500',
            style: 'medium',
        },
        {
            path: './fonts/Geogrotesque-SemiBold.woff2',
            weight: '600',
            style: 'semibold',
        },
        {
            path: './fonts/Geogrotesque-Bold.woff2',
            weight: '900',
            style: 'bold',
        },
    ],
    variable: '--font-greo',
})

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang='pl'>
            <body className={greo.className}>{children}</body>
        </html>
    )
}
