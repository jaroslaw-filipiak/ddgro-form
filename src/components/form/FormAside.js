export default function FormAside() {
  return (
    <>
      <div className='fixed left-0 top-0 z-20 bg-main w-[670px] h-screen p-6  lg:pt-24 lg:pl-16 lg:pr-16'>
        <p className='font-bold text-4xl text-white mb-12'>
          Odbierz PDF z <br />
          indywidualną ofertą
        </p>

        {/* imię nazwisko */}
        <div className='flex flex-col'>
          <label className='text-lg text-white font-medium mb-2' for='name'>
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
          <label className='text-lg text-white font-medium mb-2' for='name'>
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
          <select
            className='text-base pl-10 pr-10 pt-5 pb-5 text-center bg-white  text-black text-opacity-40 font-medium rounded-md'
            name='selectInput'
            id='selectInput'
          >
            <option className='text-base text-center' value='option1'>
              Montażystą
            </option>
            <option
              className='m-0 p-0 border-red-500 hover:bg-black hover:text-white'
              value='option2'
            >
              <p className='border'> Architektem</p>
            </option>
            <option value='option3'>Hurtownia</option>
            <option value='option3'>Budowa</option>
            <option value='option3'>Osoba prywatna</option>
          </select>
        </div>
      </div>
    </>
  );
}
