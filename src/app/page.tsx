import { redirect } from 'next/navigation'

// This component handles direct access to the root URL
export default function RootPage() {
    // Redirect to the default locale
    redirect('/pl')

    // This return is just to satisfy TypeScript, the redirect above will take effect
    return null
}
