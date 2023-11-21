import FormNav from './FormNav';

export default function FormHeader() {
  return (
    <>
      <section className='pb-32 h-12'>
        <div className='w-full columns1 md:columns-2 flex flex-col md:flex-row items-center justify-center gap-14'>
          <div className='w-3/12'>
            <img src='/assets/logo.svg' alt='logo' />
          </div>
          <div className='w-full'>
            <FormNav />
          </div>
        </div>
      </section>
    </>
  );
}
