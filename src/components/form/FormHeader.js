import FormNav from './FormNav';
import { useSelector, useDispatch } from 'react-redux';
import { use, useEffect } from 'react';
import { setAccesories, setProducts } from '@/store/slices/formSlice';
import { fetchProducts, fetchAccesories, updateProduct } from '@/app/lib/api';

import Image from 'next/image';

export default function FormHeader({
  activeStep,
  setActiveStep,
  isFormAsideOpen,
  setFormAsideVisibility,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        dispatch(setProducts(data?.data));
      } catch (err) {
        console.log('Error fetching products', err);
      }
    };

    const loadAccesories = async () => {
      try {
        const data = await fetchAccesories();
        dispatch(setAccesories(data));
      } catch (err) {
        console.log('Error fetching accesories', err);
      }
    };
    loadProducts();
    loadAccesories();
  }, []);

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
