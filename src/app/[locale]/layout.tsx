'use client'

import { ReactNode, useEffect, useState } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Header from '@/components/Header'

// Define the locales you support
const locales = ['en', 'pl', 'fr']

export default function LocaleLayout({ children, params: { locale } }: { children: ReactNode; params: { locale: string } }) {
    const [messages, setMessages] = useState(null)

    useEffect(() => {
        // Import the messages for the current locale
        import(`../../../messages/${locale}.json`)
            .then(messages => {
                setMessages(messages.default)
            })
            .catch(() => {
                console.error(`Failed to load messages for locale: ${locale}`)
                // Fallback to English
                if (locale !== 'en') {
                    import('../../../messages/en.json').then(messages => {
                        setMessages(messages.default)
                    })
                }
            })
    }, [locale])

    // Show loading state until messages are loaded
    if (!messages) {
        return <div>Loading...</div>
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <div className='p-5'>{children}</div>
        </NextIntlClientProvider>
    )
}
