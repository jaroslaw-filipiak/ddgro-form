'use client'

import Link from 'next/link'
import { useTranslations, useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

export default function Header() {
    const t = useTranslations('Header')
    const locale = useLocale()
    const pathname = usePathname()

    // Function to get the path without locale
    const getPathWithoutLocale = () => {
        if (!pathname) return '/'
        const segments = pathname.split('/')
        segments.splice(1, 1) // Remove the locale segment
        return segments.join('/') || '/'
    }

    const pathnameWithoutLocale = getPathWithoutLocale()

    return (
        <div className='bg-gray-200 w-screen shadow hidden'>
            <nav className='container flex px-2 py-2 gap-5'>
                <Link href={`/${locale}`}>{t('home')}</Link>
                <Link href={`/${locale}/about`}>{t('about')}</Link>

                <div className='ml-auto flex gap-2'>
                    <Link href={`/en${pathnameWithoutLocale === '/' ? '' : pathnameWithoutLocale}`} className={locale === 'en' ? 'font-bold' : ''}>
                        EN
                    </Link>
                    <Link href={`/pl${pathnameWithoutLocale === '/' ? '' : pathnameWithoutLocale}`} className={locale === 'pl' ? 'font-bold' : ''}>
                        PL
                    </Link>
                    <Link href={`/fr${pathnameWithoutLocale === '/' ? '' : pathnameWithoutLocale}`} className={locale === 'fr' ? 'font-bold' : ''}>
                        FR
                    </Link>
                </div>
            </nav>
        </div>
    )
}
