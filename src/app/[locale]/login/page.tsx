// This is a server component (no 'use client' directive)
import LoginClient from './client'

// Generate static params for all supported locales
export async function generateStaticParams() {
    return [
        { locale: 'en' },
        { locale: 'pl' },
        { locale: 'de' },
        { locale: 'es' },
        { locale: 'fr' }
    ]
}

export default function LoginPage() {
    return <LoginClient />
} 