// Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch

import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import {
  changeEmail,
  changeNameSurname,
  changeProffesion,
} from '@/store/slices/formSlice';
import { Select, SelectItem, Input, CircularProgress } from '@nextui-org/react';
import {} from '@nextui-org/react';
import Image from 'next/image';

export default function FormAside({ setFormAsideVisibility }) {
  const dispatch = useDispatch();
  const [response, setResponse] = useState();
  const [value, setValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const state = useSelector((state) => state.form);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const NODE_ENV = process.env.NODE_ENV;

  const items = [
    { value: 'Architekt', label: 'Architektem' },
    { value: 'Montażysta', label: 'Montażystą' },
  ];

  const handleSelectionChange = (item) => {
    console.log(item.currentKey);
    dispatch(changeProffesion(item.currentKey));
  };

  const handleForm = async (e) => {
    const form = {
      type: state.type,
      total_area: state.total_area,
      count: state.count,
      gap_between_slabs: state.gap_between_slabs,
      lowest: state.lowest,
      highest: state.highest,
      terrace_thickness: state.terrace_thickness ? state.terrace_thickness : 0,
      distance_between_joists: state.distance_between_joists,
      distance_between_supports: state.distance_between_supports,
      distance_between_supports_under_the_joist:
        state.distance_between_supports_under_the_joist
          ? state.distance_between_supports_under_the_joist
          : 0,
      joist_height: state.joist_height ? state.joist_height : 0,
      slab_width: state.slab_width,
      slab_height: state.slab_height,
      slab_thickness: 0,
      tiles_per_row: state.tiles_per_row,
      sum_of_tiles: state.sum_of_tiles ? state.sum_of_tiles : 0,
      support_type: state.support_type,
      main_system: state.main_system,
      name_surname: state.name_surname,
      email: state.email,
      proffesion: state.proffesion,
      terms_accepted: 1,
      slabs_count: state.slabs_count,
      products: JSON.stringify(state.products),
      accesories: JSON.stringify(state.accesories),
      additional_accessories: JSON.stringify(state.additional_accessories),
      supports_count: state.supports_count,

      // =============================
      // M_STANDARD
      // =============================

      sections: state.sections,
      count_in_each_section: state.count_in_each_section,
      m_standard: JSON.stringify(state.M_STANDARD),
      m_standard_order: JSON.stringify(state.M_STANDARD_ORDER),

      // =============================
      // M_SPIRAL
      // =============================

      sections_spiral: state.sectionsSpiral,
      count_in_each_section_spiral: state.count_in_each_section_spiral,
      m_spiral: JSON.stringify(state.M_SPIRAL),
      m_spiral_order: JSON.stringify(state.M_SPIRAL_ORDER),

      // =============================
      // M_MAX
      // =============================

      sections_max: state.sectionsMax,
      count_in_each_section_max: state.count_in_each_section_max,
      m_max: JSON.stringify(state.M_MAX),
      m_max_order: JSON.stringify(state.M_MAX_ORDER),

      // =============================
      /*
       * Trzeba wysłać całą matryce w zależności do wyboru głównego systemu
       * np: M_STANDARD jako cały obiekt + wyliczone wartości
       * count_in_each_section + sections
       * dodatkowe akcesoria = additional_accesories = tablica z ID
       * accesories = tablica z accesories = idk why i send this
       */
      // =============================
    };

    // `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/api/application`,
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/public/api/application`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );
      console.log('node env: ' + NODE_ENV);
      console.log(form);
      const data = await response.json();
      console.log(data);

      window.setTimeout(() => {
        setLoading(false);
        setResponse(data);

        // location.reload();
      }, 3000);
    } catch (e) {
      console.log('error===========');
      console.log(e);
      console.log('error===========');

      console.log('form===========');
      console.log(JSON.stringify(form));
      console.log('form===========');
      setLoading(false);
    }
  };

  return (
    <>
      <div className='relative'>
        <div className='fixed left-0 top-0 z-20 bg-main w-full h-screen'>
          <button className='absolute z-50 right-12 top-10 hover:opacity-80 transition-all'>
            <Image
              onClick={() => setFormAsideVisibility(false)}
              src='/assets/close.png'
              width={36}
              height={36}
            />
          </button>
          <div className='flex flex-col lg:flex-row lg:min-h-screen '>
            <div className='w-full p-10 flex items-start flex-col justify-center lg:w-7/12 2xl:w-6/12'>
              <p className='font-bold text-2xl xl:text-3xl 2xl:text-4xl text-white mb-4 2xl:mb-12'>
                Odbierz PDF <br className='hidden xl:block' />z indywidualną
                ofertą
              </p>

              <form action={handleForm}>
                <div className='flex items-start gap-3'>
                  {/* imię nazwisko */}
                  <div className='flex w-full lg:w-6/12 flex-col'>
                    <label
                      className='text-lg text-white font-medium mb-2 '
                      htmlFor='name'
                    >
                      Imię i nazwisko
                    </label>

                    <Input
                      onChange={(e) =>
                        dispatch(changeNameSurname(e.target.value))
                      }
                      className='text-base  text-center font-medium rounded-md w-full'
                      type='text'
                      placeholder='Imię, nazwisko'
                    />
                  </div>

                  {/* email */}
                  <div className='flex w-full lg:w-6/12 flex-col'>
                    <label
                      className='text-lg text-white font-medium mb-2 '
                      htmlFor='name'
                    >
                      Adres email
                    </label>
                    <Input
                      onChange={(e) => dispatch(changeEmail(e.target.value))}
                      className='text-base  text-center font-medium rounded-md w-full'
                      type='email'
                      placeholder='Wpisz adres email'
                    />
                  </div>
                </div>

                {/* select input */}
                <div className='flex flex-col mt-3 2xl:mt-6'>
                  <label
                    className='text-lg text-white font-medium mb-2 '
                    htmlFor='selectInput'
                  >
                    Jestem {value}
                  </label>
                  <Select
                    onSelectionChange={handleSelectionChange}
                    label='Wybierz'
                    className='w-full'
                    items={items}
                  >
                    {(item) => (
                      <SelectItem key={item.value}>{item.label}</SelectItem>
                    )}
                  </Select>
                </div>

                <p className='text-white text-sm mt-6'>
                  {`Będziemy przetwarzać Twoje dane osobowe, aby udzielić odpowiedzi na
            Twoje pytanie. Administratorem Twoich danych osobowych jest
            "DECK-DRY" Sp. z o.o. Przysługuje Ci prawo wniesienia sprzeciwu,
            prawo dostępu do danych, prawo żądania ich sprostowania, ich
            usunięcia lub ograniczenia ich przetwarzania, a także ich
            przenoszenia. Szczegółowe informacje znajdziesz w naszej Polityce
            Prywatności.`}
                </p>

                <div className='w-full flex flex-col items-end justify-start mt-6 2xl:mt-20 mb-6 2xl:mb-16 gap-6'>
                  <button
                    type='submit'
                    onClick={() => setFormAsideVisibility(true)}
                    className='xl:min-w-[350px] btn btn--main btn--main__small max-w-[230px]  border-[2px] border-white btn--rounded pl-10 pr-10'
                  >
                    {loading ? 'Wysyłanie...' : 'Wyślij'}
                    {loading && (
                      <CircularProgress
                        classNames={{
                          svg: 'w-10 h-10 drop-shadow-md',
                          indicator: 'stroke-white',
                          track: 'stroke-white/10',
                          value: 'text-3xl font-semibold text-white',
                        }}
                        aria-label='Loading...'
                      />
                    )}

                    {loading ? null : (
                      <Image
                        width={42}
                        height={42}
                        className='ml-5'
                        src='/assets/arrow-next.svg'
                      />
                    )}
                  </button>
                  <p className='text-2xl text-white xl:min-w-[350px] text-center font-semibold '>
                    {response?.message}
                  </p>
                </div>
              </form>
            </div>
            <div
              className='w-full lg:w-5/12 2xl:w-6/12 bg-main flex flex-col items-center justify-center p-10 bg-cover bg-center'
              style={{
                backgroundImage: `url(${imageBaseUrl}/assets/ddgro-aside-bg.png)`,
              }}
            >
              {response?.errors && (
                <div className='mt-4 text-white bg-red-600 pt-3 pb-3 pl-6 pr-6 w-full rounded-lg flex items-start gap-3'>
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
                  <div>
                    {response?.errors?.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
              )}
              {/* {response?.message && (
                <div className='mt-4 text-white bg-main pt-12 pb-12 pl-6 pr-6 w-full rounded-lg flex items-center justify-center gap-3'>
                  <div>
                    <p className='text-3xl text-center font-medium'>
                      {response?.message}
                    </p>
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
