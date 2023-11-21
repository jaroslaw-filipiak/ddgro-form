import FormNav from './FormNav';

export default function FormHeader({
  activeStep,
  setActiveStep,
  isFormAsideOpen,
  setFormAsideVisibility,
}) {
  return (
    <>
      <section className='pb-32 h-12'>
        <div className='w-full columns1 md:columns-2 flex flex-col md:flex-row items-center justify-center gap-14'>
          <div className='w-3/12'>
            <img
              className='cursor-pointer hover:opacity-80 transition-all'
              onClick={() => setActiveStep(1)}
              src='/assets/logo.svg'
              alt='logo'
            />
          </div>
          <div className='w-full'>
            <FormNav
              activeStep={activeStep}
              setActiveStep={setActiveStep}
              isFormAsideOpen={isFormAsideOpen}
              setFormAsideVisibility={setFormAsideVisibility}
            />
          </div>
        </div>
      </section>
    </>
  );
}
