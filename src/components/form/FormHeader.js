import FormNav from "./FormNav";
import { useSelector, useDispatch } from "react-redux";
import { use, useEffect } from "react";
import { setAccesories, setProducts } from "@/store/slices/formSlice";

import Image from "next/image";
import useSWR from "swr";

export default function FormHeader({
  activeStep,
  setActiveStep,
  isFormAsideOpen,
  setFormAsideVisibility,
}) {
  const dispatch = useDispatch();
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const accesoriesURL = () => {
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/accesories`;
  };

  const productsURL = () => {
    return `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/products`;
  };

  const { data: accesories } = useSWR(accesoriesURL(), fetcher);
  const { data: products } = useSWR(productsURL(), fetcher);

  useEffect(() => {
    console.log(`---`);
    console.log('API Base URL:', process.env.NEXT_PUBLIC_API_BASE_URL);
    console.log(`${process.env.NODE_ENV} mode`);
    console.log(`---`);
    if (products) {
      dispatch(setProducts(products?.data || []));
    }
    if (accesories) {
      dispatch(setAccesories(accesories?.data || []));
    }
  }, [products, accesories, dispatch]);

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
