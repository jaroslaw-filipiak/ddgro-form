export default function FormNav() {
  return (
    <>
      <div className='form-nav--wrapper'>
        <div className='form-nav--inner w-full h-[2px] bg-main relative'>
          <ul>
            <li>Wybór nawierzchni tarasu</li>
            <li>Parametry tarasu</li>
            <li>Rodzaj podparcia</li>
            <li className='active'>System</li>
            <li>Akcesoria</li>
            <li>Dodatkowa konfiguracja</li>
            <li>Podsumowanie</li>
          </ul>
        </div>
      </div>
    </>
  );
}
