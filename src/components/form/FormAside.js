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
    const form = newFormData();
    form.append('name_surname', state.name_surname);
    form.append('email', email);
    form.append('proffesion', proffesion);
    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
    } catch (e) {
      console.log(e);
    }
    console.log(e);
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
            Będziemy przetwarzać Twoje dane osobowe, aby udzielić odpowiedzi na
            Twoje pytanie. Administratorem Twoich danych osobowych jest
            "DECK-DRY" Sp. z o.o. Przysługuje Ci prawo wniesienia sprzeciwu,
            prawo dostępu do danych, prawo żądania ich sprostowania, ich
            usunięcia lub ograniczenia ich przetwarzania, a także ich
            przenoszenia. Szczegółowe informacje znajdziesz w naszej Polityce
            Prywatności.
          </p>
        </div>
      </div>
    </>
  );
}
