// Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch

import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {
  changeEmail,
  changeNameSurname,
  changeProffesion,
} from '@/store/slices/formSlice';
import { Select, SelectItem, Input } from '@nextui-org/react';

export default function FormAside({ setFormAsideVisibility }) {
  const dispatch = useDispatch();
  const [response, setResponse] = useState();
  const [value, setValue] = useState(null);
  const state = useSelector((state) => state.form);

  const items = [
    { value: 'Architekt', label: 'Architektem' },
    { value: 'Montażysta', label: 'Montażystą' },
  ];

  const handleSelectionChange = (item) => {
    console.log(item.currentKey);
    dispatch(changeProffesion(item.currentKey));
  };

  const handleForm = async (e) => {
    // const form = new FormData();
    // form.append('type', state.type);
    // form.append('total_area', state.total_area);
    // form.append('count', state.count);
    // form.append('gap_between_slabs', state.gap_between_slabs);
    // form.append('lowest', state.lowest);
    // form.append('highest', state.highest);
    // form.append(
    //   'terrace_thickness',
    //   state.terrace_thickness ? state.terrace_thickness : 0
    // );
    // form.append('distance_between_joists', state.distance_between_joists);
    // form.append(
    //   'distance_between_supports',
    //   state.distance_between_supports_under_the_joist
    // );
    // form.append('joist_height', state.joist_height ? state.joist_height : 0);
    // form.append('slab_width', state.slab_width);
    // form.append('slab_height', state.slab_height);
    // form.append('slab_thickness', state.slab_thickness);
    // form.append('tiles_per_row', state.tiles_per_row);
    // form.append('sum_of_tiles', state.sum_of_tiles ? state.sum_of_tiles : 0);
    // form.append('support_type', state.support_type);
    // form.append('main_system', state.main_system);
    // form.append('name_surname', state.name_surname);
    // form.append('email', state.email);
    // form.append('proffesion', state.proffesion);
    // form.append('terms_accepted', 1);
    // form.append('slabs_count', state.slabs_count);
    // form.append('products', state.products);
    // form.append('accesories', state.accesories);
    // form.append('supports_count', state.supports_count);

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
      joist_height: state.joist_height ? state.joist_height : 0,
      slab_width: state.slab_width,
      slab_height: state.slab_height,
      slab_thickness: state.slab_thickness,
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
      m_standard: JSON.stringify(state.M_STANDARD),
      count_in_each_section: state.count_in_each_section,
      sections: state.sections,

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
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/application`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        }
      );
      console.log(form);
      const data = await response.json();
      console.log(data);
      setResponse(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <div className='relative'>
        <div className='fixed left-0 top-0 z-20 bg-main w-[670px] h-screen p-10 sm:p-16  md:pt-24 md:pl-16 lg:pr-16'>
          <button className='absolute z-50 right-12 top-10 hover:opacity-80 transition-all'>
            <img
              onClick={() => setFormAsideVisibility(false)}
              src='/assets/close.png'
            />
          </button>
          <p className='font-bold text-4xl text-white mb-12'>
            Odbierz PDF z <br />
            indywidualną ofertą
          </p>

          <form action={handleForm}>
            {/* imię nazwisko */}
            <div className='flex flex-col'>
              <label
                className='text-lg text-white font-medium mb-2'
                htmlFor='name'
              >
                Imię i nazwisko
              </label>

              <Input
                onChange={(e) => dispatch(changeNameSurname(e.target.value))}
                className='text-base  text-center font-medium rounded-md w-full'
                type='text'
                placeholder='Imię, nazwisko'
              />
            </div>

            {/* email */}
            <div className='flex flex-col mt-6'>
              <label
                className='text-lg text-white font-medium mb-2'
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

            {/* select input */}
            <div className='flex flex-col mt-6'>
              <label
                className='text-lg text-white font-medium mb-2'
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

            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              <button
                type='submit'
                onClick={() => setFormAsideVisibility(true)}
                className='btn btn--main  border-[2px] border-white btn--rounded w-full '
              >
                Wyślij
                <img className='ml-5' src='/assets/arrow-next.svg' />
              </button>
            </div>
          </form>
          <p className='text-white'>
            {`Będziemy przetwarzać Twoje dane osobowe, aby udzielić odpowiedzi na
            Twoje pytanie. Administratorem Twoich danych osobowych jest
            "DECK-DRY" Sp. z o.o. Przysługuje Ci prawo wniesienia sprzeciwu,
            prawo dostępu do danych, prawo żądania ich sprostowania, ich
            usunięcia lub ograniczenia ich przetwarzania, a także ich
            przenoszenia. Szczegółowe informacje znajdziesz w naszej Polityce
            Prywatności.`}
          </p>
          <div>response message: {response?.message}</div>
          <div>response message: {typeof response?.errors}</div>
          {/* <div>
            response message:{' '}
            {response?.errors.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div> */}
        </div>
      </div>
    </>
  );
}
