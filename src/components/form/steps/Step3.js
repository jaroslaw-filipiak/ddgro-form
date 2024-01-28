import { useSelector, useDispatch } from 'react-redux';
import {
  changeSupportType,
  setStep3Validation,
} from '@/store/slices/formSlice';

export default function Step3({ activeStep, setActiveStep }) {
  const dispatch = useDispatch();
  const support_type = useSelector((state) => state.form.support_type);
  const step3validation = useSelector((state) => state.form.step3validation);

  const onChangeValue = (event) => {
    dispatch(changeSupportType(event.target.value));
  };

  const handleValidated = () => {
    console.log(support_type);
    console.log('handleValidated..');
    if (support_type === null) {
      dispatch(setStep3Validation(0));
    } else {
      dispatch(setStep3Validation(1));
    }
  };

  return (
    <>
      <section>
        <div
          onChange={() => handleValidated()}
          className='step--wrapper step-3 bg-[#f7f5f5]  relative'
        >
          {/* label absolute */}
          <div className='absolue inline-flex left-0 top-0 bg-main pt-3 pb-3 pl-8 pr-8 text-white font-bold text-base'>
            Rodzaj podparcia
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 pl-10 pr-10 lg:w-8/12 mx-auto'>
            <div
              onChange={onChangeValue}
              className='flex flex-wrap items-start justify-center'
            >
              {/* items */}
              <div className='w-full lg:w-6/12 flex flex-col items-center justify-center p-5 relative'>
                <label
                  className={`${
                    support_type === 'type1' ? 'selected--center' : null
                  } cursor-pointer hover:opacity-60 transition-all`}
                  htmlFor='type1'
                >
                  <img
                    className='max-w-full mx-auto'
                    src='/assets/type-1.png'
                    role='presentation'
                  />
                  <input
                    type='radio'
                    id='type1'
                    name='supportType'
                    value='type1'
                    className='opacity-0'
                  />
                </label>
              </div>

              <div className='w-full lg:w-6/12  flex flex-col items-center justify-center p-5 relative'>
                <label
                  className={`${
                    support_type === 'type2' ? 'selected--center' : null
                  } cursor-pointer hover:opacity-60 transition-all`}
                  htmlFor='type2'
                >
                  <img
                    className='max-w-full'
                    src='/assets/type-2.png'
                    role='presentation'
                  />
                  <input
                    type='radio'
                    id='type2'
                    name='supportType'
                    value='type2'
                    className='opacity-0'
                  />
                </label>
              </div>

              <div className='w-full lg:w-6/12  flex flex-col items-center justify-center p-5 relative'>
                <label
                  className={`${
                    support_type === 'type3' ? 'selected--center' : null
                  } cursor-pointer hover:opacity-60 transition-all`}
                  htmlFor='type3'
                >
                  <img
                    className='max-w-full'
                    src='/assets/type-3.png'
                    role='presentation'
                  />
                  <input
                    type='radio'
                    id='type3'
                    name='supportType'
                    value='type3'
                    className='opacity-0'
                  />
                </label>
              </div>

              <div className='w-full lg:w-6/12  flex flex-col items-center justify-center p-5 relative'>
                <label
                  className={`${
                    support_type === 'type4' ? 'selected--center' : null
                  } cursor-pointer hover:opacity-60 transition-all`}
                  htmlFor='type4'
                >
                  <img
                    className='max-w-full'
                    src='/assets/type-4.png'
                    role='presentation'
                  />
                  <input
                    type='radio'
                    id='type4'
                    name='supportType'
                    value='type4'
                    className='opacity-0'
                  />
                </label>
              </div>
            </div>

            {/* mobile btn */}
            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              <button
                disabled={!step3validation}
                onClick={() => setActiveStep(activeStep + 1)}
                className='btn btn--main btn--rounded disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Następny krok
                <img className='ml-5' src='/assets/arrow-next.svg' alt='' />
              </button>
              <button
                disabled={!step3validation}
                onClick={() => setActiveStep(activeStep + 1)}
                className='btn btn--circle pointer-none disabled:opacity-50 disabled:cursor-not-allowed fixed hidden right-10 xl:flex items-center justify-center top-[50%] translate-y-[-50%]'
              >
                <img
                  className='min-w-[42px]'
                  src='/assets/arrow-next.svg'
                  alt=''
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
