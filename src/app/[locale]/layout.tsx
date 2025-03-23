'use client'

import { ReactNode, useEffect, useState } from 'react'
import { NextIntlClientProvider } from 'next-intl'
import Header from '@/components/Header'
import { Spinner } from '@heroui/react'

// Define the locales you support
const locales = ['en', 'fr', 'pl', 'de', 'es']

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
                // Fallback to PL
                if (locale !== 'pl') {
                    import('../../../messages/pl.json').then(messages => {
                        setMessages(messages.default)
                    })
                }
            })
    }, [locale])

    // Show loading state until messages are loaded
    if (!messages) {
        return (
            <div className='h-screen w-screen flex items-center justify-center'>
                <Spinner color='warning' size='lg' />
            </div>
        )
    }

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            <Header />
            <div className='p-5'>{children}</div>
        </NextIntlClientProvider>
    )
}
