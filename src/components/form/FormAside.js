export default function FormAside() {
  return (
    <>
      <div className='relative'>
        <div className='fixed left-0 top-0 z-20 bg-main w-[670px] h-screen p-10 sm:p-16  md:pt-24 md:pl-16 lg:pr-16'>
          <button className='absolute z-50 right-12 top-10'>
            {/* <img src='/assets/close-btn.svg' /> */}
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
