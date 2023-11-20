import FormHeader from './FormHeader';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';
import Step4 from './steps/Step4';
import Step5 from './steps/Step5';
import Step6 from './steps/Step6';
import Step7 from './steps/Step7';

export default function Form() {
  return (
    <>
      <div className='pt-5 d-flex flex-col items-between justify-between'>
        <FormHeader />
        {/* <Step1 /> */}
        <Step7 />
      </div>
    </>
  );
}
