import { useSelector, useDispatch } from 'react-redux';
import { changeType } from '@/store/slices/formSlice';
import Image from 'next/image';

export default function Step1({ activeStep, setActiveStep }) {
  const type = useSelector((state) => state.form.type);
  const dispatch = useDispatch();
  return (
    <>
      <section>
        <h1> Node Env: {process.env.NODE_ENV}</h1>
        <div className='step--wrapper step-1 bg-[#f7f5f5] relative'>
          {/* label absolute */}
          <div className='absolue inline-flex left-0 top-0 bg-main pt-3 pb-3 pl-8 pr-</div>8 text-white font-bold text-base'>
            Wybór nawierzchni tarasu
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 pl-10 pr-10'>
            <div className='p3 text-4xl font-bold text-center'>
              Co będzie na tarasie ?
            </div>
            {/* items */}
            <div className='flex items-center justify-center gap-10 mt-16'>
              <div
                onClick={() => dispatch(changeType('slab'))}
                className={`${
                  type === 'slab' ? 'selected' : ''
                } relative flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-all`}
              >
                <img
                  className='max-w-full'
                  src='/assets/plyty-img.png'
                  role='presentation'
                />
                <p className=' text-black text-opacity-75 text-2xl font-bold mt-3'>
                  Płyty
                </p>
              </div>
              <div
                onClick={() => dispatch(changeType('wood'))}
                className={`${
                  type === 'wood' ? 'selected' : ''
                } relative flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-all`}
              >
                <Image
                  className='max-w-full'
                  src='/assets/deski-img.png'
                  role='presentation'
                  alt='deski-img'
                  width={282}
                  height={206}
                />
                <p className=' text-black text-opacity-75 text-2xl font-bold mt-3'>
                  Deski
                </p>
              </div>
            </div>
            {/* mobile btn */}
            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              <button
                disabled={!type}
                onClick={() => setActiveStep(activeStep + 1)}
                className='btn btn--main btn--rounded pointer-none disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Następny krok
                <img className='ml-5' src='/assets/arrow-next.svg' alt='' />
              </button>
            </div>

            <button
              disabled={!type}
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
      </section>
    </>
  );
}
