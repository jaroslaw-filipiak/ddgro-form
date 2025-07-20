'use client'

import React from 'react'
import { Form, Input, Select, SelectItem, Checkbox, Button } from '@heroui/react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

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
    const [password, setPassword] = React.useState('')
    const [submitted, setSubmitted] = React.useState(null)
    const [errors, setErrors] = React.useState<{ name?: string | null; terms?: string }>({})

    const [size, setSize] = React.useState<'lg' | 'sm' | 'md'>('lg')

    const t = useTranslations('LoginForm')

    const onSubmit = e => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.currentTarget))

        // Clear errors and submit
        setErrors({ name: null })
        setSubmitted(data)
    }
    return (
        <main className='container flex flex-col justify-center items-center h-[calc(100vh-40px)]'>
            <Image className='max-w-[160px] lg:max-w-[190px]' src='/assets/logo.svg' role='presentation' alt='deski-img' width={190} height={60} />
            <p className='opacity-60 mt-3'>{t('title')}</p>
            <Form
                className='w-full justify-center items-center space-y-4 mt-12'
                validationErrors={errors}
                onReset={() => setSubmitted(null)}
                onSubmit={onSubmit}
            >
                <div className='flex flex-col gap-10  md:min-w-80'>
                    {/* email */}

                    <Input
                        isRequired
                        errorMessage={({ validationDetails }) => {
                            if (validationDetails.valueMissing) {
                                return t('passwordValueMissing')
                            }
                            if (validationDetails.typeMismatch) {
                                return t('emailPatternMismatch')
                            }
                        }}
                        label={t('emailLabel')}
                        labelPlacement='outside'
                        name='email'
                        placeholder={t('emailPlaceholder')}
                        type='email'
                        size={size}
                    />

                    {/* password */}
                    <Input
                        isRequired
                        errorMessage={({ validationDetails }) => {
                            if (validationDetails.typeMismatch) {
                                return t('passwordPatternMismatch')
                            }
                        }}
                        label={t('passwordLabel')}
                        labelPlacement='outside'
                        name='password'
                        placeholder={t('passwordPlaceholder')}
                        type='password'
                        value={password}
                        onValueChange={setPassword}
                        size={size}
                    />

                    <div className='flex gap-4'>
                        <Button className='w-full' color='primary' type='submit' size={size}>
                            {t('submitButton')}
                        </Button>
                    </div>
                </div>

                {submitted && (
                    <div className='text-small text-default-500 mt-4'>
                        Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
                    </div>
                )}
            </Form>
        </main>
    )
}
