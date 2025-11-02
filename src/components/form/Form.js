'use client'

import { store } from '@/store/index'
import { Provider } from 'react-redux'
import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'

import { HeroUIProvider } from '@heroui/react'

import FormHeader from './FormHeader'
import FormAside from './FormAside'

import Step1 from './steps/Step1'
import Step2 from './steps/Step2'
import Step3 from './steps/Step3'
import Step4 from './steps/Step4'
import Step5 from './steps/Step5'
import Step6 from './steps/Step6'
import Step7 from './steps/Step7'

export default function Form() {
    const [activeStep, setActiveStep] = useState(1)
    const [isFormAsideOpen, setFormAsideVisibility] = useState(false)

    const steps = [
        <Step1 activeStep={activeStep} setActiveStep={setActiveStep} key={1} />,
        <Step2 activeStep={activeStep} setActiveStep={setActiveStep} key={2} />,
        <Step3 activeStep={activeStep} setActiveStep={setActiveStep} key={3} />,
        <Step4 activeStep={activeStep} setActiveStep={setActiveStep} key={4} />,
        <Step5 activeStep={activeStep} setActiveStep={setActiveStep} key={5} />,
        <Step6 activeStep={activeStep} setActiveStep={setActiveStep} key={6} />,
        <Step7 activeStep={activeStep} setActiveStep={setActiveStep} setFormAsideVisibility={setFormAsideVisibility} key={7} />,
    ]

    return (
        <>
            <HeroUIProvider>
                <Provider store={store}>
                    <div className='pt-5 d-flex flex-col items-between justify-between'>
                        {isFormAsideOpen ? <FormAside setFormAsideVisibility={setFormAsideVisibility} /> : null}
                        <FormHeader
                            activeStep={activeStep}
                            setActiveStep={setActiveStep}
                            isFormAsideOpen={isFormAsideOpen}
                            setFormAsideVisibility={setFormAsideVisibility}
                        />
                        {steps[activeStep - 1]}
                    </div>
                </Provider>
            </HeroUIProvider>
        </>
    )
}
