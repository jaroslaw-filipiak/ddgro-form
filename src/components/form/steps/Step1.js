export default function Step1({ activeStep, setActiveStep }) {
  return (
    <>
      <section>
        <div className='step--wrapper step-1 bg-[#f7f5f5] relative'>
          {/* label absolute */}
          <div className='absolue inline-flex left-0 top-0 bg-main pt-3 pb-3 pl-8 pr-8 text-white font-bold text-base'>
            Wybór nawierzchni tarasu
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 pl-10 pr-10'>
            <div className='p3 text-4xl font-bold text-center'>
              Co będzie na tarasie ?
            </div>
            {/* items */}
            <div className='flex items-center justify-center gap-10 mt-16'>
              <div className='flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition transition-all'>
                <img
                  className='max-w-full'
                  src='/assets/plyty-img.png'
                  role='presentation'
                />
                <p className=' text-black text-opacity-75 text-2xl font-bold mt-3'>
                  Płyty
                </p>
              </div>
              <div className='flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition transition-all'>
                <img
                  className='max-w-full'
                  src='/assets/deski-img.png'
                  role='presentation'
                />
                <p className=' text-black text-opacity-75 text-2xl font-bold mt-3'>
                  Deski
                </p>
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
