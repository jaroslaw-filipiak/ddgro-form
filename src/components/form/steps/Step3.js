export default function Step3() {
  return (
    <>
      <section>
        <div className='step--wrapper step-3 bg-[#f7f5f5]  relative'>
          {/* label absolute */}
          <div className='absolue inline-flex left-0 top-0 bg-main pt-3 pb-3 pl-8 pr-8 text-white font-bold text-base'>
            Rodzaj podparcia
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 pl-10 pr-10 lg:w-8/12 mx-auto'>
            <div className='flex flex-wrap items-start justify-center'>
              {/* items */}
              <div className='w-6/12 border flex flex-col items-center justify-center p-5'>
                <label for='type1'>
                  <img
                    className='max-w-full'
                    src='/assets/type-1.png'
                    role='presentation'
                  />
                  <input
                    type='radio'
                    id='type1'
                    name='supportType'
                    value='type1'
                  />
                </label>
              </div>

              <div className='w-6/12 border flex flex-col items-center justify-center p-5'>
                <label for='type2'>
                  <img
                    className='max-w-full'
                    src='/assets/type-2.png'
                    role='presentation'
                  />
                  <input
                    type='radio'
                    id='type2'
                    name='supportType'
                    value='type2'
                  />
                </label>
              </div>

              <div className='w-6/12 border flex flex-col items-center justify-center p-5'>
                <label for='type3'>
                  <img
                    className='max-w-full'
                    src='/assets/type-3.png'
                    role='presentation'
                  />
                  <input
                    type='radio'
                    id='type3'
                    name='supportType'
                    value='type3'
                  />
                </label>
              </div>

              <div className='w-6/12 border flex flex-col items-center justify-center p-5'>
                <label for='type4'>
                  <img
                    className='max-w-full'
                    src='/assets/type-4.png'
                    role='presentation'
                  />
                  <input
                    type='radio'
                    id='type4'
                    name='supportType'
                    value='type4'
                  />
                </label>
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
