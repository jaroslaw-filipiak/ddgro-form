import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  changeType,
  changeTotalArea,
  changeCount,
  chageLowest,
  changeHighest,
  changeGapBetweenSlabs,
  changeTerraceThickness,
  changeDistanceBetweenJoists,
  changeDistanceBetweenSupportsUnderTheJoist,
  changeJoistHeight,
  changeSlabWidth,
  changeSlabLength,
  changeSlabThickness,
  setStep2Validation,
} from '@/store/slices/formSlice';
import InputRow from '../controls/InputRow';
import InputRowSelect from '../controls/InputRowSelect';
import Image from 'next/image';

export default function Step2({ activeStep, setActiveStep }) {
  const dispatch = useDispatch();
  const [validated, setValidated] = useState(0);

  const {
    type,
    total_area,
    count,
    lowest,
    highest,
    gap_between_slabs,
    terrace_thickness,
    distance_between_joists,
    distance_between_supports_under_the_joist,
    joist_height,
    slab_width,
    slab_height,
    slab_thickness,
    step2validation,
  } = useSelector((state) => state.form);

  useEffect(() => {
    handleValidated();
  }, [
    total_area,
    count,
    gap_between_slabs,
    lowest,
    highest,
    slab_width,
    slab_height,
    slab_thickness,
    terrace_thickness,
    distance_between_joists,
    distance_between_supports_under_the_joist,
    joist_height,
  ]);

  const handleValidated = () => {
    if (type === 'slab') {
      if (
        total_area &&
        count &&
        gap_between_slabs &&
        lowest &&
        highest &&
        slab_width &&
        slab_height
        // slab_thickness
      ) {
        dispatch(setStep2Validation(1));
        setValidated(1);
      } else {
        dispatch(setStep2Validation(0));
        setValidated(0);
      }
    } else {
      if (
        total_area &&
        count &&
        lowest &&
        highest &&
        distance_between_joists
        //  TODO:  terrace_thickness &&  ???
        //  distance_between_supports_under_the_joist && ???
        //  joist_height ???
      ) {
        dispatch(setStep2Validation(1));
        setValidated(1);
      } else {
        dispatch(setStep2Validation(0));
        setValidated(0);
      }
    }
  };

  return (
    <>
      <section onChange={() => handleValidated()}>
        <div className='step--wrapper step-2 bg-[#f7f5f5]  relative'>
          {/* label absolute */}
          <div className='absolue  left-0 top-0 bg-main pt-3 pb-3 pl-8 pr-8 text-white font-bold text-base hidden lg:inline-flex'>
            Rodzaj podparcia
          </div>
          {/* content + padding */}
          <div className='step--inner p-6 lg:pt-20 lg:pb-20 lg:pl-10 lg:pr-10'>
            <div className='flex flex-col xl:flex-row items-center justify-start lg:items-start lg:justify-center '>
              <div className='hidden xl:w-4/12  xl:flex flex-col items-center justify-start'>
                {/* TODO: move to another component */}
                <div className='flex flex-col items-center justify-center gap-10 '>
                  <div
                    onClick={() => dispatch(changeType('slab'))}
                    className={`${
                      type === 'slab' ? 'selected' : ''
                    } relative flex items-center justify-center cursor-pointer gap-7 hover:opacity-90 transition-all`}
                  >
                    <Image
                      className='max-w-[177px]'
                      src='/assets/plyty-img.png'
                      role='presentation'
                      width={177}
                      height={130}
                      alt='plyty-img'
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
                    <Image
                      className='max-w-[177px]'
                      src='/assets/deski-img.png'
                      role='presentation'
                      width={177}
                      height={130}
                      alt='deski-img'
                    />
                    <p className=' text-black text-opacity-75 text-2xl font-bold mt-3'>
                      Deski
                    </p>
                  </div>
                </div>
              </div>
              {/* inputs */}

              <div className='w-full xl:w-8/12 lg:pl-20 flex flex-col gap-5 mt-10 xl:mt-0'>
                <div className='text-2xl font-semibold pb-20'>
                  Podaj wymiary w milimetrach (1cm = 10 milimetrów)
                </div>
                {/* forType: 'wood, slab or all' */}
                <InputRow
                  onChange={(e) =>
                    dispatch(changeTotalArea(Number(e.target.value)))
                  }
                  value={useSelector((state) => state.form.total_area)}
                  forType='all'
                  title='Łączna powierzchnia (m2)'
                  placeholder='ilośc m2'
                  inputType='number'
                  // hasIndicator={true}
                />
                {/* count */}
                <InputRow
                  onChange={(e) =>
                    dispatch(changeCount(Number(e.target.value)))
                  }
                  value={useSelector((state) => state.form.count)}
                  forType='all'
                  title='Ilość tarasów/ balkonów (szt.)'
                  placeholder='szt.'
                />
                {/* gap between slabs */}
                <InputRowSelect
                  onChange={(e) =>
                    dispatch(changeGapBetweenSlabs(Number(e.target.value)))
                  }
                  value={useSelector((state) => state.form.gap_between_slabs)}
                  forType='slab'
                  title='Szczelina pomiedzy płytami (mm.)'
                  placeholder='mm'
                />

                {/* lowest */}
                <InputRow
                  onChange={(e) =>
                    dispatch(chageLowest(Number(e.target.value)))
                  }
                  value={useSelector((state) => state.form.lowest)}
                  forType='all'
                  title='Najniższy wspornik (mm.)'
                  placeholder='mm'
                  // minValue='10'
                />
                {/* highest */}
                <InputRow
                  onChange={(e) =>
                    dispatch(changeHighest(Number(e.target.value)))
                  }
                  value={useSelector((state) => state.form.highest)}
                  forType='all'
                  title='Najwyższy wspornik (mm.)'
                  placeholder='mm'
                />
                {/* changeTerraceThickness */}
                {/* <InputRow
                  onChange={(e) =>
                    dispatch(changeTerraceThickness(Number(e.target.value)))
                  }
                  value={useSelector((state) => state.form.terrace_thickness)}
                  forType='wood'
                  title='Grubość deski'
                  placeholder='mm'
                /> */}
                {/* changeDistanceBetweenJoists === changeSlabLength */}
                <InputRow
                  onChange={(e) =>
                    dispatch(
                      changeDistanceBetweenJoists(Number(e.target.value))
                    )
                  }
                  value={useSelector(
                    (state) => state.form.distance_between_joists
                  )}
                  forType='wood'
                  title='Odległość pomiędzy legarami (mm.)'
                  placeholder='mm'
                  hasIndicator={true}
                  modalContent='Jaki jest rozstaw pomiędzy legarami pod deską tarasową?'
                />
                {/* changeSlabWidth */}

                {/* changeDistanceBetweenSupportsUnderTheJoist === changeSlabWidth  */}
                <InputRow
                  onChange={(e) =>
                    dispatch(
                      changeDistanceBetweenSupportsUnderTheJoist(
                        Number(e.target.value)
                      )
                    )
                  }
                  value={useSelector(
                    (state) =>
                      state.form.distance_between_supports_under_the_joist
                  )}
                  forType='wood'
                  title='Odległość pomiędzy wspornikami pod legarem (mm.)'
                  placeholder='mm'
                  hasIndicator={true}
                  modalContent='Jaka ma być odległość pomiędzy wspornikami podpierającymi legar?'
                />

                {/* changeJoistHeight */}
                {/* <InputRow
                  onChange={(e) =>
                    dispatch(changeJoistHeight(Number(e.target.value)))
                  }
                  value={useSelector((state) => state.form.joist_height)}
                  forType='wood'
                  title='Wysokość legara'
                  placeholder='mm'
                /> */}

                {/* changeSlabWidth */}
                <InputRow
                  onChange={(e) =>
                    dispatch(changeSlabWidth(Number(e.target.value)))
                  }
                  value={useSelector((state) => state.form.slab_width)}
                  forType='slab'
                  title='Szerokość płyty (mm.)'
                  placeholder='mm'
                />
                {/* changeSlabLength === changeDistanceBetweenJoists */}
                <InputRow
                  onChange={(e) =>
                    dispatch(changeSlabLength(Number(e.target.value)))
                  }
                  value={useSelector((state) => state.form.slab_height)}
                  forType='slab'
                  title='Długość płyty (mm.)'
                  placeholder='mm'
                />
                {/* changeSlabThickness */}
                {/* <InputRow
                  onChange={(e) => {
                    dispatch(changeSlabThickness(Number(e.target.value)));
                    handleValidated();
                  }}
                  value={useSelector((state) => state.form.slab_thickness)}
                  forType='slab'
                  title='Grubość płyty'
                  placeholder='mm'
                /> */}
              </div>
            </div>

            {/* mobile btn */}
            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              <button
                disabled={!step2validation}
                onClick={() =>
                  type === 'wood'
                    ? setActiveStep(4)
                    : setActiveStep(activeStep + 1)
                }
                className='btn btn--main btn--rounded disabled:opacity-50 disabled:cursor-not-allowed'
              >
                Następny krok
                <Image
                  width={42}
                  height={42}
                  className='ml-5'
                  src='/assets/arrow-next.svg'
                  alt='arrow'
                />
              </button>

              <button
                disabled={!step2validation}
                onClick={() =>
                  type === 'wood'
                    ? setActiveStep(4)
                    : setActiveStep(activeStep + 1)
                }
                className='btn btn--circle pointer-none disabled:opacity-50 disabled:cursor-not-allowed fixed hidden right-10 xl:flex items-center justify-center top-[50%] translate-y-[-50%]'
              >
                <Image
                  className='min-w-[42px]'
                  src='/assets/arrow-next.svg'
                  alt='arrow'
                  width={42}
                  height={42}
                />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
