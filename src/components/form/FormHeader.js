import FormNav from './FormNav';
import { useSelector, useDispatch } from 'react-redux';
import { use, useEffect } from 'react';
import { setAccesories, setProducts } from '@/store/slices/formSlice';

import Image from 'next/image';
import useSWR from 'swr';

export default function FormHeader({
  activeStep,
  setActiveStep,
  isFormAsideOpen,
  setFormAsideVisibility,
}) {
  const dispatch = useDispatch();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // useEffect(() => {}, []);

  const { data: accesories } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/api/accesories`,
    fetcher
  );

  const { data: products } = useSWR(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/api/products`,
    fetcher
  );

  dispatch(setProducts(products?.data || []));
  dispatch(setAccesories(accesories?.data || []));

  console.log(accesories);
  console.log(products?.data);
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
      <section className='lg:pb-32 h-12'>
        <div className='w-full columns1 md:columns-2 flex flex-col md:flex-row items-center justify-center gap-14'>
          <div className='lg:w-2/12'>
            <div
              className='cursor-pointer hover:opacity-80'
              onClick={() => setActiveStep(1)}
            >
              <Image
                className='max-w-[160px] lg:max-w-[190px]'
                src='/assets/logo.svg'
                role='presentation'
                alt='deski-img'
                width={190}
                height={60}
              />
            </div>
          </div>
          <div className='w-full hidden lg:block'>
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
