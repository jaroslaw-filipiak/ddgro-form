import FormNav from './FormNav';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAccesories, setProducts } from '@/store/slices/formSlice';

export default function FormHeader({
  activeStep,
  setActiveStep,
  isFormAsideOpen,
  setFormAsideVisibility,
}) {
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('upate dist dir');
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accesories`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setAccesories(data?.data || []));
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data?.data || []));
      });
  }, []);

  return (
    <>
      <section className='pb-32 h-12'>
        <div className='w-full columns1 md:columns-2 flex flex-col md:flex-row items-center justify-center gap-14'>
          <div className='w-3/12'>
            <img
              className='cursor-pointer hover:opacity-80 transition-all'
              onClick={() => setActiveStep(1)}
              src='/assets/logo.svg'
              alt='logo'
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
