export default function InputRow({ title }) {
  return (
    <>
      <div className='input-row  flex items-center justify-between'>
        <div className='flex items-center justify-start gap-3'>
          <p className='text-opacity-50 text-xl font-medium text-black'>
            {title}
          </p>
          <div
            onClick={() => console.log('click on queston indicator')}
            className='question-indicator'
          >
            ?
          </div>
        </div>

        <input
          className='text-base pl-10 pr-10 pt-5 pb-5 text-center font-medium'
          placeholder='ilość m2'
          type='text'
        />
      </div>
    </>
  );
}
