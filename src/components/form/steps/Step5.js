export default function Step3() {
  return (
    <>
      <section>
        <div className='step--wrapper step-5 bg-[#f7f5f5]  relative'>
          {/* label absolute */}
          <div className='absolue inline-flex left-0 top-0  text-white font-bold text-base flex flex-col gap-1 items-start justify-center'>
            <p className='bg-main pt-3 pb-3 pl-8 pr-8'>
              Dodatkowe akcesoria do wsporników
            </p>
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 pl-10 pr-10 lg:w-10/12 mx-auto'>
            {/* one serie db info */}
            <div class='series--info'>
              <header className='flex items-center justify-start gap-10'>
                <img
                  className='max-w-full'
                  src='/assets/wspornik-tarasowy-spiral.png'
                />
                <div>
                  <p className='text-2xl font-bold text-black text-opacity-70'>
                    Regulowany wspornik tarasowy SPIRAL
                  </p>
                  <p className='m-0 p-0 text-sm text-black font-normal'>
                    190 - 210 mm
                  </p>
                </div>
              </header>
              <p className='text-2xl font-bold text-black text-opacity-70 pt-16 pb-9'>
                Wybierz akcesoria
              </p>
              <div class='series--accesories flex flex-col gap-6'>
                {/* loop items */}
                <div>
                  <label for='option1'>
                    <input
                      type='checkbox'
                      id='option1'
                      name='option1'
                      value='Option1'
                      className='hidden'
                    />
                    <div class='flex items-center justify-between '>
                      <div className='flex items-center justify-start gap-6'>
                        <img src='/assets/placeholder-96-68.png' />
                        <div>
                          <p className='text-2xl font-bold text-black text-opacity-70'>
                            Tuleja dystansowa MAX DS 200 MM.
                          </p>
                          <p className=' text-lg text-black text-opacity-50 font-normal'>
                            Dzięki prawidłowo zaprojektowanej konstrukcji
                            wspornik MAX w pełni ...
                          </p>
                        </div>
                      </div>
                      <div class='border w-[38px] h-[38px] rounded-full bg-white flex items-center'></div>
                    </div>
                  </label>
                </div>

                <div className='selected'>
                  <label for='option2'>
                    <input
                      type='checkbox'
                      id='option2'
                      name='option2'
                      value='Option2'
                      className='hidden'
                    />
                    <div class='flex items-center justify-between '>
                      <div className='flex items-center justify-start gap-6'>
                        <img src='/assets/placeholder-96-68.png' />
                        <div>
                          <p className='text-2xl font-bold text-black text-opacity-70'>
                            Tuleja dystansowa MAX DS 200 MM.
                          </p>
                          <p className=' text-lg text-black text-opacity-50 font-normal'>
                            Dzięki prawidłowo zaprojektowanej konstrukcji
                            wspornik MAX w pełni ...
                          </p>
                        </div>
                      </div>
                      <div class='border w-[38px] h-[38px] rounded-full bg-white flex items-center'></div>
                    </div>
                  </label>
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
