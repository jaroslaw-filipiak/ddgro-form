'use client'

import { useSelector, useDispatch } from 'react-redux'
import { useTranslations } from 'next-intl'

export default function FormNav({ activeStep, setActiveStep }) {
    const dispatch = useDispatch()
    const type = useSelector(state => state.form.type)
    // Get translations for navigation
    const t = useTranslations('FormNav')

    return (
        <>
            <div className='form-nav--wrapper'>
                <div className='form-nav--inner w-full h-[2px] bg-main relative'>
                    <ul>
                        <li className={activeStep === 1 ? 'active' : ''} onClick={() => setActiveStep(1)}>
                            {t('step1')}
                        </li>
                        <li className={activeStep === 2 ? 'active' : ''} onClick={() => setActiveStep(2)}>
                            {t('step2')}
                        </li>
                        <li
                            className={`${activeStep === 3 ? 'active' : ''} ${
                                type === 'wood' ? 'disabled cursor-not-allowed pointer-events-none opacity-30 line-through' : null
                            }`}
                            onClick={() => setActiveStep(3)}
                        >
                            {t('step3')}
                        </li>
                        <li className={activeStep === 4 ? 'active' : ''} onClick={() => setActiveStep(4)}>
                            {t('step4')}
                        </li>
                        <li className={activeStep === 5 ? 'active' : ''} onClick={() => setActiveStep(5)}>
                            {t('step5')}
                        </li>
                        <li className={activeStep === 6 ? 'active' : ''} onClick={() => setActiveStep(6)}>
                            {t('step6')}
                        </li>
                        <li className={activeStep === 7 ? 'active' : ''} onClick={() => setActiveStep(7)}>
                            {t('step7')}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
