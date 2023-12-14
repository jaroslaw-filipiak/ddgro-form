import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  calculateHowManyTitlesCanFillTheSquare,
  calculateSupportsCount,
  calculateLA,
} from '@/store/slices/formSlice';

function capitalizeFirstLetter(string) {
  if (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  } else return;
}

export default function Step7({ setFormAsideVisibility }) {
  const initialized = useRef(false);
  const state = useSelector((state) => state.form);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      finalCalculate();
      return;
    }
  }, []);

  function finalCalculate() {
    // dispatch for recaltulcate
    console.log('final calculate..');

    dispatch(calculateLA());
    dispatch(calculateHowManyTitlesCanFillTheSquare());
    dispatch(calculateSupportsCount());
  }

  return (
    <>
      <section>
        <div className='step--wrapper step-7 bg-[#f7f5f5]  relative'>
          {/* label absolute */}
          <div className='absolue inline-flex left-0 top-0  text-white font-bold text-bas flex-col gap-1 items-start justify-center'>
            <p className='bg-main pt-3 pb-3 pl-8 pr-8'>Podsumowanie</p>
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 pl-10 pr-10 lg:w-10/12 mx-auto'>
            <div>
              <p className='text-2xl font-bold text-black text-opacity-70 pb-9'>
                Wprowadzone parametry
              </p>
              <ul className='flex flex-wrap items-center justify-start gap-6'>
                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Rodzaj nawierzchni:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    {state.type === 'wood' ? 'Deski' : 'Płyty'}
                  </p>
                </li>
                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Wybrany główny system:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    {capitalizeFirstLetter(state?.main_system)}
                  </p>
                </li>

                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Łączna powierzchnia:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    {state?.total_area} m2
                  </p>
                </li>

                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Ilość tarasów:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    {state?.count}
                  </p>
                </li>

                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Najniższy punkt wysokości tarasu:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    {state?.lowest} mm
                  </p>
                </li>

                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Najwyższy punkt wysokości tarasu:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    {state?.highest} mm
                  </p>
                </li>
                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Czy wybrano dodatkowe akcesoria:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    {state?.additional_accessories ? 'Tak' : 'Nie'}
                  </p>
                </li>
              </ul>
            </div>

            <div className='summary mt-20 pb-9'>
              <p className='text-2xl font-bold text-black text-opacity-70 pb-9'>
                Zestawienie
              </p>

              <div class='square--wrapper'></div>

              {/* {przewidzIloscPlyt(562, 60, 60)} */}

              {/* <ul>
                <li className='flex items-center justify-between border-b border-black border-opacity-50 p-6'>
                  <p className='text-xl text-black text-opacity-50 font-normal'>
                    Wspornik PV14/17:
                  </p>
                  <div className='flex items-center'>
                    <input
                      className='text-base pl-10 pr-10 pt-5 pb-5 text-center font-medium'
                      placeholder='100 sztuk'
                      type='text'
                    />
                    <p className='text-black text-opacity-50 text-base pl-4'>
                      / 3 worki (40sztuk / worek )
                    </p>
                  </div>
                </li>

                <li className='flex items-center justify-between border-b border-black border-opacity-50 p-6'>
                  <p className='text-xl text-black text-opacity-50 font-normal'>
                    Wspornik PV14/17:
                  </p>
                  <div className='flex items-center'>
                    <input
                      className='text-base pl-10 pr-10 pt-5 pb-5 text-center font-medium'
                      placeholder='100 sztuk'
                      type='text'
                    />
                    <p className='text-black text-opacity-50 text-base pl-4'>
                      / 3 worki (40sztuk / worek )
                    </p>
                  </div>
                </li>

                <li className='flex items-center justify-between border-b border-black border-opacity-50 p-6'>
                  <p className='text-xl text-black text-opacity-50 font-normal'>
                    Wspornik PV14/17:
                  </p>
                  <div className='flex items-center'>
                    <input
                      className='text-base pl-10 pr-10 pt-5 pb-5 text-center font-medium'
                      placeholder='100 sztuk'
                      type='text'
                    />
                    <p className='text-black text-opacity-50 text-base pl-4'>
                      / 3 worki (40sztuk / worek )
                    </p>
                  </div>
                </li>
              </ul> */}
            </div>

            {/* mobile btn */}
            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              <button
                onClick={() => setFormAsideVisibility(true)}
                className='btn btn--main btn--rounded'
              >
                Odbierz PDF
                <img className='ml-5' src='/assets/arrow-next.svg' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
