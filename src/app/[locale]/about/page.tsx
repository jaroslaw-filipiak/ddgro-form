// This is a server component (no 'use client' directive)
import ClientAboutPage from './client'

// This must be a server component to properly generate static params
export function generateStaticParams() {
    return ['en', 'fr', 'pl', 'de', 'es'].map(locale => ({ locale }))
}

export default function AboutPage() {
    return <ClientAboutPage />
}
