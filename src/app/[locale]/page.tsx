import Form from '@/components/form/Form'

// Define the generateStaticParams function to support static export
export function generateStaticParams() {
    return ['en', 'fr', 'pl'].map(locale => ({ locale }))
}

export default function Page() {
    return (
        <main className='container min-h-screen'>
            <Form />
        </main>
    )
}
