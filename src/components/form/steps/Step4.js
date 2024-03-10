import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { changeMainSystem, setStep4Validation } from '@/store/slices/formSlice';

export default function Step4({ activeStep, setActiveStep }) {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.form.type);
  const step4validation = useSelector((state) => state.form.step4validation);

  const selectedMainSystem = useSelector((state) => state.form.main_system);

  const onChangeValue = (event, item) => {
    dispatch(changeMainSystem(item.series));
    dispatch(setStep4Validation(1));
  };

  const [series] = useState([
    {
      id: 1,
      title: 'Seria Spiral',
      series: 'spiral',
      img: '/assets/series-spiral-slab.png',
      type: 'slab',
      distance: '10-210',
    },
    {
      id: 2,
      title: 'Seria Standard',
      series: 'standard',
      img: '/assets/series-standard-slab.png',
      type: 'slab',
      distance: '30-420',
    },
    {
      id: 3,
      title: 'Seria Max',
      series: 'max',
      img: '/assets/series-max-slab.png',
      type: 'slab',
      distance: '45-950',
    },
    // {
    //   id: 4,
    //   title: 'Seria Alu',
    //   series: 'alu',
    //   img: '/assets/series-alu-slab.png',
    //   type: 'slab',
    //   distance: '40-200',
    // },

    {
      id: 5,
      title: 'Seria Raptor',
      series: 'raptor',
      img: '/assets/series-raptor-wood.png',
      type: 'wood',
      distance: '15-245',
    },
    {
      id: 6,
      title: 'Seria Spiral',
      series: 'spiral',
      img: '/assets/series-spiral-wood.png',
      type: 'wood',
      distance: '10-210',
    },
    {
      id: 7,
      title: 'Seria Standard',
      series: 'standard',
      img: '/assets/series-standard-wood.png',
      type: 'wood',
      distance: '30-420',
    },
    {
      id: 8,
      title: 'Seria Max',
      series: 'max',
      img: '/assets/series-max-wood.png',
      type: 'wood',
      distance: '45-950',
    },
    {
      id: 9,
      title: 'Seria Standard',
      series: 'standard-to-100',
      img: '/assets/series-standard-to-100-wood.png',
      type: 'wood',
      distance: '0-100',
    },
  ]);

  const selectedSeries = series.filter((item) => item.type === type);

  return (
    <>
      <section>
        <div className='step--wrapper step-4 bg-[#f7f5f5]  relative'>
          {/* label absolute */}
          <div className='absolue inline-flex left-0 top-0  text-white font-bold text-base flex flex-col gap-1 items-start justify-center'>
            <p className='bg-main pt-3 pb-3 pl-8 pr-8'>System</p>

            {type && (
              <div className='bg-red-500 pt-3 pb-3 pl-8 pr-8 flex items-center gap-3 w-full'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-alert-circle-filled'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    strokeWidth='2'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                    <path
                      d='M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z'
                      strokeWidth='0'
                      fill='currentColor'
                    />
                  </svg>
                </div>

                <span>
                  Uwaga - wybierz główny system wsporników który ma zostać
                  użyty. Jeśli zakresy wysokości będą wykraczać poza zakresy
                  danego typu program dobierze brakujące wysokości z innego
                  typu.
                </span>
              </div>
            )}
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 pl-10 pr-10 lg:w-10/12 mx-auto'>
            <div className='flex flex-wrap items-start xl:justify-center justify-start gap-6 xl:gap-2'>
              {/* items   slab / wood */}

              {!type && (
                <div className='text-4xl text-center'>
                  Wybierz rodzaj nawierzchni tarasu (pkt 1), bez tych danych nie
                  będziemy w stanie wyświelić systemu wsporników
                </div>
              )}

              {selectedSeries.map((item) => {
                return (
                  <div
                    onClick={(event) => onChangeValue(event, item)}
                    key={item.id}
                    className={`item xl:w-4/12 mb-10 relative cursor-pointer hover:opacity-60 transition-all  flex flex-col items-start selection:bg-none ${
                      item.series === selectedMainSystem ? 'selected' : null
                    }`}
                  >
                    <img
                      className='w-full xl:max-w-[368px] rounded-[16px] mx-auto'
                      src={item.img}
                    />
                    <p className='text-2xl pl-4 font-bold text-black text-opacity-70 mt-5'>
                      {item.title}
                    </p>
                    <div className='m-0 pl-4 text-sm text-black font-normal flex items-center gap-2'>
                      <div>{item.distance} mm</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* mobile btn */}
            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              {!type && (
                <button
                  onClick={() => setActiveStep((activeStep = 1))}
                  className='btn btn--main btn--rounded disabled:opacity-50 disabled:cursor-not-allowed pr-14'
                >
                  <img
                    className='mr-5 transform rotate-180'
                    src='/assets/arrow-next.svg'
                    alt=''
                  />
                  Wróć do kroku nr 1
                </button>
              )}

              {type && (
                <button
                  disabled={!step4validation}
                  onClick={() => setActiveStep(activeStep + 1)}
                  className='btn btn--main btn--rounded disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  Następny krok
                  <img className='ml-5' src='/assets/arrow-next.svg' alt='' />
                </button>
              )}

              <button
                disabled={!step4validation}
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
