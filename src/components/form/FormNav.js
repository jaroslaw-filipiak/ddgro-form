import { useSelector, useDispatch } from 'react-redux';

export default function FormNav({ activeStep, setActiveStep }) {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.form.type);
  return (
    <>
      <div className='form-nav--wrapper'>
        <div className='form-nav--inner w-full h-[2px] bg-main relative'>
          <ul>
            <li
              className={activeStep === 1 ? 'active' : ''}
              onClick={() => setActiveStep(1)}
            >
              Wybór nawierzchni tarasu
            </li>
            <li
              className={activeStep === 2 ? 'active' : ''}
              onClick={() => setActiveStep(2)}
            >
              Parametry tarasu
            </li>
            <li
              className={`${activeStep === 3 ? 'active' : ''} ${
                type === 'wood'
                  ? 'disabled cursor-not-allowed pointer-events-none opacity-30 line-through'
                  : null
              }`}
              onClick={() => setActiveStep(3)}
            >
              Rodzaj podparcia
            </li>
            <li
              className={activeStep === 4 ? 'active' : ''}
              onClick={() => setActiveStep(4)}
            >
              System
            </li>
            <li
              className={activeStep === 5 ? 'active' : ''}
              onClick={() => setActiveStep(5)}
            >
              Akcesoria
            </li>
            <li
              className={activeStep === 6 ? 'active' : ''}
              onClick={() => setActiveStep(6)}
            >
              Dodatkowa konfiguracja
            </li>
            <li
              className={activeStep === 7 ? 'active' : ''}
              onClick={() => setActiveStep(7)}
            >
              Podsumowanie
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
