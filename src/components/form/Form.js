'use client';

import { useState } from 'react';
import FormHeader from './FormHeader';
import FormAside from './FormAside';

import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';
import Step7 from './steps/Step7';

export default function Form() {
  const [activeStep, setActiveStep] = useState(1);
  const steps = [
    <Step1 />,
    <Step2 />,
    <Step3 />,
    <Step4 />,
    <Step5 />,
    <Step6 />,
    <Step7 />,
  ];
  return (
    <>
      <div className='pt-5 d-flex flex-col items-between justify-between'>
        {activeStep === 7 ? <FormAside /> : null}
        <FormHeader activeStep={activeStep - 1} setActiveStep={setActiveStep} />
        {steps[activeStep - 1]}
      </div>
    </>
  );
}
