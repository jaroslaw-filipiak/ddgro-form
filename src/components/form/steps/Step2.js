export default function Step2({ activeStep, setActiveStep }) {
  return (
    <>
      <section>
        <div className='step--wrapper step-2 bg-[#f7f5f5]  relative'>
          {/* label absolute */}
          <div className='absolue inline-flex left-0 top-0 bg-main pt-3 pb-3 pl-8 pr-8 text-white font-bold text-base'>
            Rodzaj podparcia
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 pl-10 pr-10'>
            <div className='flex items-start justify-center '>
              <div className='w-4/12  flex flex-col items-center justify-start'>
                <div className='flex flex-col items-center justify-center gap-10 '>
                  <div className='relative selected flex items-center justify-center cursor-pointer gap-7 hover:opacity-90 transition-all'>
                    <img
                      className='max-w-[177px]'
                      src='/assets/plyty-img.png'
                      role='presentation'
                    />
                    <p className=' text-black text-opacity-75 text-2xl font-bold mt-3'>
                      Płyty
                    </p>
                  </div>
                  <div className='relative flex  items-center justify-center cursor-pointer gap-7 hover:opacity-90  transition-all'>
                    <img
                      className='max-w-[177px]'
                      src='/assets/deski-img.png'
                      role='presentation'
                    />
                    <p className=' text-black text-opacity-75 text-2xl font-bold mt-3'>
                      Deski
                    </p>
                  </div>
                </div>
              </div>
              {/* inputs */}
              <div className='w-8/12 pl-20'>
                <div className='input-row  flex items-center justify-between'>
                  <div className='flex items-center justify-start gap-3'>
                    <p className='text-opacity-50 text-xl font-medium text-black'>
                      Łączna powierzchnia
                    </p>
                    <div className='question-indicator'>?</div>
                  </div>

                  <input
                    className='text-base pl-10 pr-10 pt-5 pb-5 text-center font-medium'
                    placeholder='ilość m2'
                    type='text'
                  />
                </div>
              </div>
            </div>

            {/* mobile btn */}
            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className='btn btn--main btn--rounded'
              >
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
