// Now we can use the React-Redux hooks to let React components interact with the Redux store. We can read data from the store with useSelector, and dispatch actions using useDispatch

import { useSelector, useDispatch } from 'react-redux';
import { changeEmail, changeNameSurname } from '@/store/slices/formSlice';

export default function FormAside({ setFormAsideVisibility }) {
  const email = useSelector((state) => state.form.email);
  const dispatch = useDispatch();

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

          {/* imię nazwisko */}
          <div className='flex flex-col'>
            <label
              className='text-lg text-white font-medium mb-2'
              htmlFor='name'
            >
              Imię i nazwisko
            </label>
            <input
              onChange={(e) => dispatch(changeNameSurname(e.target.value))}
              className='text-base pl-10 pr-10 pt-5 pb-5 text-center font-medium rounded-md'
              placeholder='Imię, nazwisko'
              name='name'
              id='name'
              type='text'
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
            <input
              onChange={(e) => dispatch(changeEmail(e.target.value))}
              className='text-base pl-10 pr-10 pt-5 pb-5 text-center font-medium rounded-md'
              placeholder='Wpisz adres email'
              name='email'
              id='email'
              type='email'
            />
          </div>

          {/* select input */}
          <div className='flex flex-col mt-6'>
            <label
              className='text-lg text-white font-medium mb-2'
              htmlFor='selectInput'
            >
              Jestem
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
