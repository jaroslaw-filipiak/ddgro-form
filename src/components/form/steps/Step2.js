import { useSelector, useDispatch } from 'react-redux';
import {
  changeType,
  changeTotalArea,
  changeCount,
} from '@/store/slices/formSlice';
import InputRow from '../controls/InputRow';

export default function Step2({ activeStep, setActiveStep }) {
  const dispatch = useDispatch();
  const type = useSelector((state) => state.form.type);

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
                {/* TODO: move to another component */}
                <div className='flex flex-col items-center justify-center gap-10 '>
                  <div
                    onClick={() => dispatch(changeType('slab'))}
                    className={`${
                      type === 'slab' ? 'selected' : ''
                    } relative flex items-center justify-center cursor-pointer gap-7 hover:opacity-90 transition-all`}
                  >
                    <img
                      className='max-w-[177px]'
                      src='/assets/plyty-img.png'
                      role='presentation'
                    />
                    <p className=' text-black text-opacity-75 text-2xl font-bold mt-3'>
                      Płyty
                    </p>
                  </div>
                  <div
                    onClick={() => dispatch(changeType('wood'))}
                    className={`${
                      type === 'wood' ? 'selected' : ''
                    } relative flex items-center justify-center cursor-pointer gap-7 hover:opacity-90 transition-all`}
                  >
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

              <div className='w-8/12 pl-20 flex flex-col gap-5'>
                {/* forType: 'wood, slab or all' */}
                <InputRow
                  onChange={(e) =>
                    dispatch(changeTotalArea(Number(e.target.value)))
                  }
                  forType='all'
                  title='Łączna powierzchnia'
                />
                <InputRow
                  onChange={(e) =>
                    dispatch(changeCount(Number(e.target.value)))
                  }
                  forType='all'
                  title='Ilość tarasów/ balkonów'
                />
                <InputRow forType='slab' title='Szczelina pomiedzy płytami' />
                <InputRow
                  forType='all'
                  title='Najniższy punkt wysokości tarasu'
                />
                <InputRow
                  forType='all'
                  title='Najwyższy punkt wysokości tarasu'
                />
                <InputRow forType='wood' title='Grubość tarasu' />
                <InputRow forType='wood' title='Odległość pomiędzy legarami' />
                <InputRow
                  forType='wood'
                  title='Odległość pomiedzy wspornikami pod legarem'
                />
                <InputRow forType='wood' title='Wysokość legara' />
                <InputRow forType='slab' title='Szerokość płyty' />
                <InputRow forType='slab' title='Długość płyty' />
                <InputRow forType='slab' title='Grubość płyty' />
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
