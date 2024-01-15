import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  calculateHowManyTitlesCanFillTheSquare,
  calculateSupportsCount,
  calculateLA,
  calculateSlabsCount,
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
  const [rows, setRows] = useState([]);
  const [standardMatrix, setStandardMatrix] = useState([]);

  // columns for M_STANDARD MATRIX OBJ
  const columns = [
    {
      key: 'wys_mm',
      label: 'wys_mm',
    },
    {
      key: 'range',
      label: 'przedział',
    },
    {
      key: 'condition',
      label: 'warunek',
    },
    {
      key: 'count_in_range',
      label: 'ilość w predziale',
    },
  ];

  // create matrix of M_STANDARD
  const M_STANDARD = () => {
    const obj = [];
    for (let i = 0; i <= 940; i++) {
      let start = 10;
      obj[i] = {
        id: i,
        wys_mm: start + i,
        condition: 0,
      };
    }

    const calculateRange = (item) => {
      switch (true) {
        case item.wys_mm >= 10 && item.wys_mm <= 16:
          return '10-17';
        case item.wys_mm >= 17 && item.wys_mm <= 29:
          return '17-30';
        case item.wys_mm >= 30 && item.wys_mm <= 45:
          return '30-45';
        case item.wys_mm >= 46 && item.wys_mm <= 69:
          return '45-70';
        case item.wys_mm >= 70 && item.wys_mm <= 119:
          return '70-120';
        case item.wys_mm >= 120 && item.wys_mm <= 219:
          return '120-220';
        case item.wys_mm >= 220 && item.wys_mm <= 319:
          return '220-320';
        case item.wys_mm >= 320 && item.wys_mm <= 420:
          return '320-420';
        case item.wys_mm >= 421 && item.wys_mm <= 549:
          return '350-550';
        case item.wys_mm >= 550 && item.wys_mm <= 749:
          return '550-750';
        case item.wys_mm >= 750 && item.wys_mm <= 950:
          return '750-950';

        default:
          return '';
      }
    };

    const rangeObj = obj.map((item) => ({
      ...item,
      range: calculateRange(item),
    }));

    setRows(rangeObj);
    setStandardMatrix(rangeObj);

    console.log('matrix created..');
    console.log(rangeObj);
    return rangeObj;
  };

  const matrixCalculate = () => {
    try {
      console.log('creating matrix..');
      M_STANDARD();
    } catch (error) {
      console.log('problem with creating matrix..');
      console.log(error);
    }
  };

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
    dispatch(calculateSlabsCount());
    dispatch(calculateSupportsCount());

    matrixCalculate();
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
                Wynik:
              </p>

              <div className='square--wrapper'></div>

              <ul>
                <li className='flex items-center justify-between border-b border-black border-opacity-50 p-6'>
                  <p className='text-xl text-black text-opacity-50 font-normal'>
                    Wsporników:
                  </p>
                  <div className='flex items-center'>
                    <p className='text-black text-opacity-50 text-base pl-4'>
                      {state?.supports_count}
                    </p>
                  </div>
                </li>

                <li className='flex items-center justify-between border-b border-black border-opacity-50 p-6'>
                  <p className='text-xl text-black text-opacity-50 font-normal'>
                    Liczba płyt:
                  </p>
                  <div className='flex items-center'>
                    <p className='text-black text-opacity-50 text-base pl-4'>
                      {state?.slabs_count || '-'}
                    </p>
                  </div>
                </li>
              </ul>
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
