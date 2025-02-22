import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    calculateHowManyTitlesCanFillTheSquare,
    calculateSupportsCount,
    calculateLA,
    calculateSlabsCount,
    setAverageInEachSection,
    setSections,
    setM_STANDARD,
    setM_STANDARD_ORDER,
    setSectionsSpiral,
    setAverageInEachSectionSpiral,
    setM_SPIRAL,
    setM_SPIRAL_ORDER,
    setSectionsMax,
    setAverageInEachSectionMax,
    setM_MAX,
    setM_MAX_ORDER,
    setSectionsRaptor,
    setAverageInEachSectionRaptor,
    setM_RAPTOR,
    setM_RAPTOR_ORDER,
} from '@/store/slices/formSlice'

import Image from 'next/image'

function capitalizeFirstLetter(string) {
    if (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
    } else return
}

export default function Step7({ setFormAsideVisibility }) {
    const initialized = useRef(false)
    const state = useSelector(state => state.form)
    const additional_accessories = useSelector(state => state.form.additional_accessories)
    const dispatch = useDispatch()

    //  M_STANDARD SET
    const [rows, setRows] = useState([])
    const [standardMatrix, setStandardMatrix] = useState([])
    const [conditionCount, setConditionCount] = useState(0)
    // ==================================================

    //  M_SPIRAL SET
    const [rowsSpiral, setRowsSpiral] = useState([])
    const [spiralMatrix, setSpiralMatrix] = useState([])
    const [conditionSpiralCount, setConditionSpiralCount] = useState(0)
    // ==================================================

    //  M_MAX SET
    const [rowsMax, setRowsMax] = useState([])
    const [maxMatrix, setMaxMatrix] = useState([])
    const [conditionMaxCount, setConditionMaxCount] = useState(0)
    // ==================================================

    //  M_RAPTOR SET
    const [rowsRaptor, setRowsRaptor] = useState([])
    const [raptorMatrix, setRaptorMatrix] = useState([])
    const [conditionRaptorCount, setConditionRaptorCount] = useState(0)
    // ==================================================

    // columns for M_STANDARD and other MATRIX OBJ
    const columns = [
        {
            key: 'wys_mm',
            label: 'wys_mm',
        },
        {
            key: 'range',
            label: 'przedział',
        },
        {
            key: 'condition',
            label: 'warunek',
        },
        {
            key: 'count_in_range',
            label: 'ilość w predziale',
        },
    ]

    /*
  |--------------------------------------------------------------------------
  | 1 M_STANDARD MATRYCA 
  |--------------------------------------------------------------------------
  |
  | Tablica dla matrix M_STANDARD
  | 
  |
  */

    const M_STANDARD = () => {
        const obj = []
        for (let i = 0; i <= 940; i++) {
            let start = 10
            obj[i] = {
                id: i,
                wys_mm: start + i,
                condition: 0,
            }
        }

        const calculateRange = item => {
            switch (true) {
                case item.wys_mm >= 10 && item.wys_mm <= 16:
                    return '10-17'
                case item.wys_mm >= 17 && item.wys_mm <= 29:
                    return '17-30'
                case item.wys_mm >= 30 && item.wys_mm <= 45:
                    return '30-45'
                case item.wys_mm >= 46 && item.wys_mm <= 69:
                    return '45-70'
                case item.wys_mm >= 70 && item.wys_mm <= 119:
                    return '70-120'
                case item.wys_mm >= 120 && item.wys_mm <= 219:
                    return '120-220'
                case item.wys_mm >= 220 && item.wys_mm <= 319:
                    return '220-320'
                case item.wys_mm >= 320 && item.wys_mm <= 420:
                    return '320-420'
                case item.wys_mm >= 421 && item.wys_mm <= 549:
                    return '350-550'
                case item.wys_mm >= 550 && item.wys_mm <= 749:
                    return '550-750'
                case item.wys_mm >= 750 && item.wys_mm <= 950:
                    return '750-950'
            }
        }

        const rangeObj = obj.map(item => ({
            ...item,
            range: calculateRange(item),
        }))

        setRows(rangeObj)
        setStandardMatrix(rangeObj)

        return rangeObj
    }

    /*
  |--------------------------------------------------------------------------
  | 2 M_SPIRAL MATRYCA
  |--------------------------------------------------------------------------
  |
  | Tablica dla matrix M_SPIAL
  | 
  |
  */

    const M_SPIRAL = () => {
        const obj = []
        for (let i = 0; i <= 940; i++) {
            let start = 10
            obj[i] = {
                id: i,
                wys_mm: start + i,
                condition: 0,
            }
        }
        const calculateRange = item => {
            switch (true) {
                case item.wys_mm >= 10 && item.wys_mm <= 16:
                    return '10-17'
                case item.wys_mm >= 17 && item.wys_mm <= 29:
                    return '17-30'
                case item.wys_mm >= 30 && item.wys_mm <= 49:
                    return '30-50'
                case item.wys_mm >= 50 && item.wys_mm <= 69:
                    return '50-70'
                case item.wys_mm >= 70 && item.wys_mm <= 89:
                    return '70-90'
                case item.wys_mm >= 90 && item.wys_mm <= 109:
                    return '90-110'
                case item.wys_mm >= 110 && item.wys_mm <= 129:
                    return '110-130'
                case item.wys_mm >= 130 && item.wys_mm <= 149:
                    return '130-150'
                case item.wys_mm >= 150 && item.wys_mm <= 169:
                    return '150-170'
                case item.wys_mm >= 170 && item.wys_mm <= 189:
                    return '170-190'
                case item.wys_mm >= 190 && item.wys_mm <= 210:
                    return '190-210'
                case item.wys_mm >= 211 && item.wys_mm <= 219:
                    return '120-220'
                case item.wys_mm >= 220 && item.wys_mm <= 319:
                    return '220-320'
                case item.wys_mm >= 320 && item.wys_mm <= 420:
                    return '320-420'
                case item.wys_mm >= 421 && item.wys_mm <= 549:
                    return '350-550'
                case item.wys_mm >= 550 && item.wys_mm <= 749:
                    return '550-750'
                case item.wys_mm >= 750 && item.wys_mm <= 950:
                    return '750-950'

                default:
                    return ''
            }
        }

        const rangeObj = obj.map(item => ({
            ...item,
            range: calculateRange(item),
        }))

        setRowsSpiral(rangeObj)
        setSpiralMatrix(rangeObj)

        return rangeObj
    }

    /*
  |--------------------------------------------------------------------------
  | 3 M_MAX MATRYCA
  |--------------------------------------------------------------------------
  |
  | Tablica dla matrix M_Max
  | 
  |
  */

    const M_MAX = () => {
        const obj = []
        for (let i = 0; i <= 940; i++) {
            let start = 10
            obj[i] = {
                id: i,
                wys_mm: start + i,
                condition: 0,
            }
        }

        const calculateRange = item => {
            switch (true) {
                case item.wys_mm >= 10 && item.wys_mm <= 16:
                    return '10-17'
                case item.wys_mm >= 17 && item.wys_mm <= 29:
                    return '17-30'
                case item.wys_mm >= 30 && item.wys_mm <= 44:
                    return '30-50'
                case item.wys_mm >= 45 && item.wys_mm <= 74:
                    return '45-75'
                case item.wys_mm >= 75 && item.wys_mm <= 149:
                    return '75-150'
                case item.wys_mm >= 150 && item.wys_mm <= 349:
                    return '150-350'
                case item.wys_mm >= 350 && item.wys_mm <= 549:
                    return '350-550'
                case item.wys_mm >= 550 && item.wys_mm <= 749:
                    return '550-750'
                case item.wys_mm >= 750 && item.wys_mm <= 950:
                    return '750-950'
            }
        }

        const rangeObj = obj.map(item => ({
            ...item,
            range: calculateRange(item),
        }))

        setRowsMax(rangeObj)
        setMaxMatrix(rangeObj)

        return rangeObj
    }

    /*
  |--------------------------------------------------------------------------
  | 4 M_RAPTOR MATRYCA aka ALU
  |--------------------------------------------------------------------------
  |
  | Tablica dla matrix M_Raptor aka ALU
  | 
  |
  */

    const M_RAPTOR = () => {
        const obj = []
        for (let i = 0; i <= 940; i++) {
            let start = 10
            obj[i] = {
                id: i,
                wys_mm: start + i,
                condition: 0,
            }
        }

        const calculateRange = item => {
            switch (true) {
                case item.wys_mm >= 10 && item.wys_mm <= 14:
                    return '10-17'
                case item.wys_mm >= 15 && item.wys_mm <= 34:
                    return '15-35'
                case item.wys_mm >= 35 && item.wys_mm <= 64:
                    return '35-65'
                case item.wys_mm >= 65 && item.wys_mm <= 94:
                    return '65-95'
                case item.wys_mm >= 95 && item.wys_mm <= 124:
                    return '95-125'
                case item.wys_mm >= 125 && item.wys_mm <= 154:
                    return '125-155'
                case item.wys_mm >= 155 && item.wys_mm <= 184:
                    return '155-185'
                case item.wys_mm >= 185 && item.wys_mm <= 214:
                    return '185-215'
                case item.wys_mm >= 215 && item.wys_mm <= 245:
                    return '215-245'
                case item.wys_mm >= 246 && item.wys_mm <= 319:
                    return '220-320'
                case item.wys_mm >= 320 && item.wys_mm <= 420:
                    return '320-420'
                case item.wys_mm >= 421 && item.wys_mm <= 549:
                    return '350-550'
                case item.wys_mm >= 550 && item.wys_mm <= 749:
                    return '550-750'
                case item.wys_mm >= 750 && item.wys_mm <= 950:
                    return '750-950'
            }
        }

        const rangeObj = obj.map(item => ({
            ...item,
            range: calculateRange(item),
        }))

        setRowsRaptor(rangeObj)
        setRaptorMatrix(rangeObj)

        return rangeObj
    }

    // HANDLE FUNCTIONS

    const handleM_STANDARD = () => {
        const min = state.lowest
        const max = state.highest

        /*
    |--------------------------------------------------------------------------
    | 1. M_STANDARD
    |--------------------------------------------------------------------------
    |
    | Tablica dla matrix M_STANDARD
    | + ilość przedziałów + ilość w przedziale + count_in_range
    |
    */

        // M_STANDARD
        const result = standardMatrix.map(item => {
            if (item.wys_mm > min && item.wys_mm < max) {
                return {
                    ...item,
                    condition: 1,
                }
            } else {
                return {
                    ...item,
                    condition: 0,
                }
            }
        })

        // M_STANDARD ilość przedziałów
        const conditionLength = result.filter(item => item.condition === 1).length

        // M_STANDARD średnia ilośc w przedziale
        const averageInSection = state.supports_count / conditionLength
        dispatch(setAverageInEachSection(averageInSection))

        // M_STANDARD full matix with condition
        const final = result.map(item => {
            if (item.condition === 0) {
                return {
                    ...item,
                    count_in_range: 0,
                }
            } else {
                return {
                    ...item,
                    count_in_range: averageInSection,
                }
            }
        })

        // M_STANDARD dispatch stuff
        setRows(final)
        setConditionCount(conditionLength)

        dispatch(setSections(conditionLength))
        dispatch(setM_STANDARD(final))
    }

    const handleM_SPIRAL = () => {
        const min = state.lowest
        const max = state.highest

        /*
    |--------------------------------------------------------------------------
    | 2. M_SPIRAL
    |--------------------------------------------------------------------------
    |
    | Tablica dla matrix M_SPIRAL
    | + ilość przedziałów + ilość w przedziale + count_in_range
    |
    */

        // M_SPIRAL
        // !important ...Matrix.map - change for every handle function
        const result = spiralMatrix.map(item => {
            if (item.wys_mm > min && item.wys_mm < max) {
                return {
                    ...item,
                    condition: 1,
                }
            } else {
                return {
                    ...item,
                    condition: 0,
                }
            }
        })

        // M_SPIRAL ilość przedziałów
        const conditionLength = result.filter(item => item.condition === 1).length

        // M_SPIRAL średnia ilośc w przedziale
        const averageInSection = state.supports_count / conditionLength
        dispatch(setAverageInEachSectionSpiral(averageInSection))

        // M_SPIRAL full matix with condition
        const final = result.map(item => {
            if (item.condition === 0) {
                return {
                    ...item,
                    count_in_range: 0,
                }
            } else {
                return {
                    ...item,
                    count_in_range: averageInSection,
                }
            }
        })

        // M_SPIRAL dispatch stuff
        setRowsSpiral(final)
        setConditionSpiralCount(conditionLength)

        dispatch(setSectionsSpiral(conditionLength))
        dispatch(setM_SPIRAL(final))
    }

    const handleM_MAX = () => {
        const min = state.lowest
        const max = state.highest

        /*
    |--------------------------------------------------------------------------
    | 3. M_MAX
    |--------------------------------------------------------------------------
    |
    | Tablica dla matrix M_MAX
    | + ilość przedziałów + ilość w przedziale + count_in_range
    |
    */

        // M_MAX
        // !important ...Matrix.map - change for every handle function
        const result = maxMatrix.map(item => {
            if (item.wys_mm > min && item.wys_mm < max) {
                return {
                    ...item,
                    condition: 1,
                }
            } else {
                return {
                    ...item,
                    condition: 0,
                }
            }
        })

        // M_MAX ilość przedziałów
        const conditionLength = result.filter(item => item.condition === 1).length

        // M_MAX średnia ilośc w przedziale
        const averageInSection = state.supports_count / conditionLength
        dispatch(setAverageInEachSectionMax(averageInSection))

        // M_MAX full matix with condition
        const final = result.map(item => {
            if (item.condition === 0) {
                return {
                    ...item,
                    count_in_range: 0,
                }
            } else {
                return {
                    ...item,
                    count_in_range: averageInSection,
                }
            }
        })

        // M_MAX dispatch stuff
        setRowsMax(final)
        setConditionMaxCount(conditionLength)

        dispatch(setSectionsMax(conditionLength))
        dispatch(setM_MAX(final))
    }

    const handleM_RAPTOR = () => {
        const min = state.lowest
        const max = state.highest

        /*
    |--------------------------------------------------------------------------
    | 3. M_RAPTOR
    |--------------------------------------------------------------------------
    |
    | Tablica dla matrix M_RAPTOR aka ALU
    | + ilość przedziałów + ilość w przedziale + count_in_range
    |
    */

        // M_RAPTOR
        // !important ...Matrix.map - change for every handle function
        const result = raptorMatrix.map(item => {
            if (item.wys_mm > min && item.wys_mm < max) {
                return {
                    ...item,
                    condition: 1,
                }
            } else {
                return {
                    ...item,
                    condition: 0,
                }
            }
        })

        // M_RAPTOR ilość przedziałów
        const conditionLength = result.filter(item => item.condition === 1).length

        // M_RAPTOR średnia ilośc w przedziale
        const averageInSection = state.supports_count / conditionLength
        dispatch(setAverageInEachSectionRaptor(averageInSection))

        // M_RAPTOR full matix with condition
        const final = result.map(item => {
            if (item.condition === 0) {
                return {
                    ...item,
                    count_in_range: 0,
                }
            } else {
                return {
                    ...item,
                    count_in_range: averageInSection,
                }
            }
        })

        // M_RAPTOR dispatch stuff
        setRowsRaptor(final)
        setConditionRaptorCount(conditionLength)

        dispatch(setSectionsRaptor(conditionLength))
        dispatch(setM_RAPTOR(final))
    }

    /*
  |--------------------------------------------------------------------------
  | CALCULATE
  |--------------------------------------------------------------------------
  |
  | Try to calculate matrixes and fire handle functions
  | 
  |
  */

    const matrixCalculate = () => {
        try {
            console.log('creating matrix M_STANDARD MATRIX')
            M_STANDARD()
            console.log('creating matrix M_SPIRAL MATRIX')
            M_SPIRAL()
            console.log('creating matrix M_MAX')
            M_MAX()
            console.log('creating matrix M_RAPTOR')
            M_RAPTOR()
        } catch (error) {
            console.log('problem with creating matrix...')
            console.log(error)
        }
    }

    const handleCalculate = () => {
        handleM_STANDARD()
        handleM_SPIRAL()
        handleM_MAX()
        handleM_RAPTOR()
    }

    useEffect(() => {
        if (!initialized.current) {
            initialized.current = true
            finalCalculate()
            return
        }
    }, [finalCalculate])

    function finalCalculate() {
        dispatch(calculateLA())
        dispatch(calculateHowManyTitlesCanFillTheSquare())
        dispatch(calculateSlabsCount())
        dispatch(calculateSupportsCount())

        // !!!! IMPORTANT <====
        matrixCalculate()
    }

    return (
        <>
            <section>
                <div className='step--wrapper step-7 bg-[#f7f5f5]  relative'>
                    {/* label absolute */}
                    <div className='absolue inline-flex left-0 top-0  text-white font-bold text-bas flex-col gap-1 items-start justify-center'>
                        <p className='bg-main pt-3 pb-3 pl-8 pr-8'>Podsumowanie</p>
                    </div>
                    {/* content + padding */}
                    <div className='step--inner pt-20 pb-20 lg:pl-10 lg:pr-10 lg:w-10/12 mx-auto'>
                        <div>
                            <p className='text-2xl font-bold text-black text-opacity-70 pb-9'>Wprowadzone parametry</p>
                            <ul className='flex flex-wrap items-center justify-start gap-6'>
                                {state?.type && (
                                    <li className='flex items-center justify-start gap-2'>
                                        <p className=' text-lg text-black text-opacity-50 font-normal'>Rodzaj nawierzchni:</p>
                                        <p className='text-lg text-black text-opacity-70 font-bold'>{state.type === 'wood' ? 'Deski' : 'Płyty'}</p>
                                    </li>
                                )}

                                {state?.main_system && (
                                    <li className='flex items-center justify-start gap-2'>
                                        <p className=' text-lg text-black text-opacity-50 font-normal'>Wybrany główny system:</p>
                                        <p className='text-lg text-black text-opacity-70 font-bold'>{capitalizeFirstLetter(state?.main_system)}</p>
                                    </li>
                                )}

                                {state?.total_area && (
                                    <li className='flex items-center justify-start gap-2'>
                                        <p className=' text-lg text-black text-opacity-50 font-normal'>Łączna powierzchnia:</p>
                                        <p className='text-lg text-black text-opacity-70 font-bold'>{state?.total_area} m2</p>
                                    </li>
                                )}

                                {state.count && (
                                    <li className='flex items-center justify-start gap-2'>
                                        <p className=' text-lg text-black text-opacity-50 font-normal'>Ilość tarasów:</p>
                                        <p className='text-lg text-black text-opacity-70 font-bold'>{state?.count}</p>
                                    </li>
                                )}

                                {state?.lowest && (
                                    <li className='flex items-center justify-start gap-2'>
                                        <p className=' text-lg text-black text-opacity-50 font-normal'>Najniższy punkt wysokości tarasu:</p>
                                        <p className='text-lg text-black text-opacity-70 font-bold'>{state?.lowest} mm</p>
                                    </li>
                                )}

                                {state?.highest && (
                                    <li className='flex items-center justify-start gap-2'>
                                        <p className=' text-lg text-black text-opacity-50 font-normal'>Najwyższy punkt wysokości tarasu:</p>
                                        <p className='text-lg text-black text-opacity-70 font-bold'>{state?.highest} mm</p>
                                    </li>
                                )}

                                {state?.additional_accessories && (
                                    <li className='flex items-center justify-start gap-2'>
                                        <p className=' text-lg text-black text-opacity-50 font-normal'>Czy wybrano dodatkowe akcesoria:</p>
                                        <p className='text-lg text-black text-opacity-70 font-bold'>{state?.additional_accessories ? 'Tak' : 'Nie'}</p>
                                    </li>
                                )}
                            </ul>
                        </div>

                        <div className='summary mt-20 pb-9'>
                            <p className='text-2xl font-bold text-black text-opacity-70 '>Wynik:</p>

                            <div className='square--wrapper'></div>

                            <ul>
                                <li className='flex items-center justify-between border-b border-black border-opacity-50 p-6'>
                                    <p className='text-xl text-black text-opacity-50 font-normal'>Wsporników:</p>
                                    <div className='flex items-center'>
                                        <p className='text-black text-opacity-50 text-base pl-4'>{state?.supports_count ? state?.supports_count : '-'}</p>
                                    </div>
                                </li>

                                <li
                                    className={`flex items-center justify-between border-b border-black border-opacity-50 p-6 ${
                                        state.type === 'wood' ? 'hidden' : ''
                                    }`}
                                >
                                    <p className={`text-xl text-black text-opacity-50 font-normal ${state.type === 'wood' ? 'hidden' : ''}`}>Liczba płyt:</p>
                                    <div className={`flex items-center ${state.type === 'wood' ? 'hidden' : ''}`}>
                                        <p className='text-black text-opacity-50 text-base pl-4'>{state?.slabs_count ? state?.slabs_count : '-'}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Dodatkowe akcesoria */}
                        <div className='summary pb-9'>
                            <p className='text-2xl font-bold text-black text-opacity-70'>Wybrane akcesoria:</p>

                            <div className='square--wrapper'></div>

                            <ul>
                                {additional_accessories?.map((item, index) => (
                                    <li key={index} className='flex items-center justify-between border-b border-black border-opacity-50 p-6'>
                                        <p className='text-xl text-black text-opacity-50 font-normal'>{item.for_client}</p>
                                        <div className='flex items-center'>
                                            <p className='text-black text-opacity-50 text-base pl-4'>{item.count}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* mobile btn */}
                        <div className='w-full flex items-center justify-center mt-20 mb-16'>
                            <button
                                onClick={() => {
                                    handleCalculate()
                                    setFormAsideVisibility(true)
                                }}
                                className='btn btn--main btn--rounded'
                            >
                                Odbierz PDF
                                <Image width={42} height={42} className='ml-5' src='/assets/arrow-next.svg' alt='arrow next' />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
