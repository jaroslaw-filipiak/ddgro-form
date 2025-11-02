// This is a server component (no 'use client' directive)
import Form from '@/components/form/Form'

// This must be a server component to properly generate static params
export function generateStaticParams() {
    return ['en', 'fr', 'pl', 'de', 'es'].map(locale => ({ locale }))
}

export default function HomePage() {
    return (
        <main className='container min-h-screen'>
            <Form />
        </main>
    )
}
