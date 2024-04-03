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
  const NODE_ENV = process.env.NODE_ENV;

  const accesoriesURL = () => {
    if (NODE_ENV === 'development') {
      return `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accesories`;
    } else {
      return `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/api/accesories`;
    }
  };

  const productsURL = () => {
    if (NODE_ENV === 'development') {
      return `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`;
    } else {
      return `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/api/products`;
    }
  };

  const { data: accesories } = useSWR(accesoriesURL(), fetcher);
  const { data: products } = useSWR(productsURL(), fetcher);

  dispatch(setProducts(products?.data || []));
  dispatch(setAccesories(accesories?.data || []));

  // TODO: cleanup before deployment

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
