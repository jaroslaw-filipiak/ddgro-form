export default function Step3() {
  return (
    <>
      <section>
        <div className='step--wrapper step-7 bg-[#f7f5f5]  relative'>
          {/* label absolute */}
          <div className='absolue inline-flex left-0 top-0  text-white font-bold text-base flex flex-col gap-1 items-start justify-center'>
            <p className='bg-main pt-3 pb-3 pl-8 pr-8'>Podsumowanie</p>
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 pl-10 pr-10 lg:w-10/12 mx-auto'>
            <div>
              <p className='text-2xl font-bold text-black text-opacity-70 pb-9'>
                Wprowadzone parametry
              </p>
              <ul className='flex items-center justify-start gap-6'>
                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Łączna powierzchnia:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    25m2
                  </p>
                </li>

                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Łączna powierzchnia:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    25m2
                  </p>
                </li>

                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Łączna powierzchnia:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    25m2
                  </p>
                </li>

                <li className='flex items-center justify-start gap-2'>
                  <p className=' text-lg text-black text-opacity-50 font-normal'>
                    Łączna powierzchnia:
                  </p>
                  <p className='text-lg text-black text-opacity-70 font-bold'>
                    25m2
                  </p>
                </li>
              </ul>
            </div>

            <div className='summary mt-20 pb-9'>
              <p className='text-2xl font-bold text-black text-opacity-70 pb-9'>
                Zestawienie
              </p>

              <ul>
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
              </ul>
            </div>

            {/* mobile btn */}
            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              <button className='btn btn--main btn--rounded'>
                Następny krok
                <img className='ml-5' src='/assets/arrow-next.svg' />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
