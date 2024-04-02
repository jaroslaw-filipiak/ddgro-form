import FormNav from './FormNav';
import { useSelector, useDispatch } from 'react-redux';
import { use, useEffect } from 'react';
import { setAccesories, setProducts } from '@/store/slices/formSlice';

import Image from 'next/image';

export default function FormHeader({
  activeStep,
  setActiveStep,
  isFormAsideOpen,
  setFormAsideVisibility,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('updade scss file');
  }, []);

  // useEffect(() => {
  //   console.log('assetPrefix to slash');
  //   fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accesories`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch(setAccesories(data?.data || []));
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       dispatch(setProducts(data?.data || []));
  //     });
  // }, []);

  return (
    <>
      <section className='pb-32 h-12'>
        <div className='w-full columns1 md:columns-2 flex flex-col md:flex-row items-center justify-center gap-14'>
          <div className='w-3/12'>
            <Image
              className='max-w-full'
              src='/assets/logo.svg'
              role='presentation'
              alt='deski-img'
              width={214}
              height={45}
            />
          </div>
          <div className='w-full'>
            <FormNav
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              isFormAsideOpen={isFormAsideOpen}
              setFormAsideVisibility={setFormAsideVisibility}
            />
          </div>
        </div>
      </section>
    </>
  );
}
