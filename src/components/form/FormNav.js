export default function FormNav({ activeStep, setActiveStep }) {
  return (
    <>
      <div className='form-nav--wrapper'>
        <div className='form-nav--inner w-full h-[2px] bg-main relative'>
          <ul>
            <li onClick={() => setActiveStep(1)}>Wybór nawierzchni tarasu</li>
            <li onClick={() => setActiveStep(2)}>Parametry tarasu</li>
            <li onClick={() => setActiveStep(3)}>Rodzaj podparcia</li>
            <li onClick={() => setActiveStep(4)} className='active'>
              System
            </li>
            <li onClick={() => setActiveStep(5)}>Akcesoria</li>
            <li onClick={() => setActiveStep(6)}>Dodatkowa konfiguracja</li>
            <li onClick={() => setActiveStep(7)}>Podsumowanie</li>
          </ul>
        </div>
      </div>
    </>
  );
}
