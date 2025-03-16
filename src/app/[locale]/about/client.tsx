'use client'

import { useTranslations } from 'next-intl'

export default function ClientAboutPage() {
    const t = useTranslations('AboutPage')

    return <div>{t('aboutText')}</div>
}
