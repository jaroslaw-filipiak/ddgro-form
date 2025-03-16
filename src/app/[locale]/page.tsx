'use client'
import { useTranslations } from 'next-intl'

import Form from '@/components/form/Form'

export default function HomePage() {
    const t = useTranslations('HomePage')
    return (
        <main className='container min-h-screen'>
            {t('helloWorld')}
            <Form />
        </main>
    )
}
