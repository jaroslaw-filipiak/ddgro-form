import FormHeader from './FormHeader';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

export default function Form() {
  return (
    <>
      <div className='pt-5 d-flex flex-col items-between justify-between'>
        <FormHeader />
        {/* <Step1 /> */}
        <Step3 />
      </div>
    </>
  );
}
