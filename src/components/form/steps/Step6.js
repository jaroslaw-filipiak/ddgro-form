export default function Step3() {
  return (
    <>
      <section>
        <div className='step--wrapper step-6 bg-[#f7f5f5]  relative'>
          {/* label absolute */}
          <div className='absolue inline-flex left-0 top-0  text-white font-bold text-base flex flex-col gap-1 items-start justify-center'>
            <p className='bg-main pt-3 pb-3 pl-8 pr-8'>
              Dodaj ręcznie dodatkowe ilości produktów
            </p>
            <p className=' bg-red-500 pt-3 pb-3 pl-8 pr-8 flex items-center gap-3 w-full'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  class='icon icon-tabler icon-tabler-alert-circle-filled'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  stroke-width='2'
                  stroke='currentColor'
                  fill='none'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <path
                    d='M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm.01 13l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -8a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z'
                    stroke-width='0'
                    fill='currentColor'
                  />
                </svg>
              </div>
              <span>
                Uwaga: krok dodatkowy umożliwiający ręczne dodanie produktów,
                można pominąć bez zaznaczania jakiejkolwiek opcji
              </span>
            </p>
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 pl-10 pr-10 lg:w-10/12 mx-auto'>
            {/* one serie db info */}
            <div class='series--info'>
              <header className='flex items-center justify-start gap-10'>
                <div>
                  <p className='text-4xl font-bold text-black text-opacity-70'>
                    Seria podstawki tarasowe pod płyty
                  </p>
                </div>
              </header>
              <p className='text-2xl font-bold text-black text-opacity-70 pt-16 pb-9'>
                Wybierz akcesoria
              </p>
              <div class='series--accesories flex flex-col gap-6'>
                {/* loop items */}
                <div>
                  <div class='flex items-center justify-between '>
                    <div className='flex items-center justify-start gap-6'>
                      <img src='/assets/placeholder-96-68.png' />
                      <div>
                        <p className='text-2xl font-bold text-black text-opacity-70 max-w-lg'>
                          Wspornik krzyżakowy do płyt układanych na żwirku
                          transparent z wbudowanym dystansem
                        </p>
                        <p className='m-0 p-0 text-sm text-black font-normal'>
                          190 - 210 mm | 3mm-10535 5mm-10560 | DDP002T
                        </p>
                      </div>
                    </div>
                    <div>
                      <input
                        className='text-base pl-10 pr-10 pt-5 pb-5 text-center font-medium'
                        placeholder='ilość'
                        type='text'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile btn */}
            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              <button className='btn btn--main btn--rounded'>
                Następny krok
                <img className='ml-5' src='/assets/arrow-next.svg' alt='' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
