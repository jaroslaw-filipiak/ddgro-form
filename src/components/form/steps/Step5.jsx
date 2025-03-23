import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAccesories, setAdditionalAccessories } from '@/store/slices/formSlice'
import { useTranslations } from 'next-intl'

import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/modal'
import { Button, ButtonGroup } from '@heroui/button'
import { useDisclosure } from '@heroui/use-disclosure'

import Image from 'next/image'

export default function Step5({ activeStep, setActiveStep }) {
    const t = useTranslations()
    const dispatch = useDispatch()
    const main_system = useSelector(state => state.form.main_system)
    const type = useSelector(state => state.form.type)
    const accesories = useSelector(state => state.form.accesories)
    const accesoriesForType = accesories.filter(item => item.for_type === type)
    const filteredItems = useSelector(state => state.form.additional_accessories)

    const [checkedItems, setCheckedItems] = useState([])
    const [data, setData] = useState([])
    const [loading, isLoading] = useState(false)
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const [has3, setHas3] = useState(false)
    const [has8, setHas8] = useState(false)

    /**
     *
     *  TODO:
     *  To powinno być pobierane z bazy danych
     *
     *
     */
    const [accesoriesForProducts, setAccesoriesForProducts] = useState([
        {
            id: 1,
            slug: 'Podkładka wygłuszająco - wyrównująca SH na wspornik-10399',
            for_client: 'Podkładka wygłuszająco - wyrównująca SH na wspornik',
            to_series: ['standard'],
            code: 10039,
            img: '/assets/placeholder-96-68.png',
            name: 'Podkładka wygłuszająco - wyrównująca SH100',
            short_name: 'SH100',
            visible: true,
            //
            _id: {
                $oid: '66816d6d9bce9862a73a73cc',
            },
            short_name: 'SH100',
            height_mm: 1.5,
            height_inch: '1/16',
            packaging: 1000,
            euro_palet: 40000,
            price_net: 1.29,
            system: 'standard',
        },
        {
            id: 2,
            slug: 'Podkładka wygłuszająco - wyrównująca SH na wspornik-10314',
            for_client: 'Podkładka wygłuszająco - wyrównująca SH na wspornik',
            to_series: ['spiral', 'max'],
            code: 10314,
            img: '/assets/placeholder-96-68.png',
            visible: true,
            //

            _id: {
                $oid: '66816d6d9bce9862a73a73cd',
            },
            name: 'Podkładka wygłuszająco - wyrównująca SH145',
            short_name: 'SH145',
            height_mm: 1.5,
            height_inch: '1/17',
            packaging: 500,
            euro_palet: 20000,
            price_net: 1.56,
        },
        {
            id: 3,
            slug: 'Podkładki gumowe pod wsporniki SBR gr. 8 mm-102559',
            for_client: 'Podkładki gumowe pod wsporniki SBR gr. 8 mm',
            to_series: ['spiral', 'standard'],
            code: 102559,
            img: '/assets/placeholder-96-68.png',
            name: 'Podkładki gumowe pod wsporniki MAX SBR  220x220 MM (Akcesoria) / SBR200/8',
            short_name: 'SBR200/8',
            visible: true,
            height_mm: 8,
            height_inch: '5/16',
            packaging: 20,
            euro_palet: 3200,
            price_net: 5.67,
            for_type: 'slab',
            system: 'max', // system max w bazie danych ale tutaj dla spiral oraz standard ??? TODO: sprawdzić
        },
        {
            id: 4,
            slug: 'Podkładki gumowe pod wsporniki SBR gr 3 mm-10414',
            for_client: 'Podkładki gumowe pod wsporniki SBR gr 3 mm',
            to_series: ['max'],
            img: '/assets/placeholder-96-68.png',
            visible: true,
            //
            _id: {
                $oid: '66816d6d9bce9862a73a73d1',
            },
            code: 10414,
            name: 'Podkładki gumowe pod wsporniki MAX SBR  220x220 MM (Akcesoria)',
            short_name: 'SBR220/3',
            height_mm: 3,
            packaging: 40,
            euro_palet: 6400,
            price_net: 4.41,
            for_type: 'slab',
            system: 'max',
        },
        {
            // TODO: nie mam tego w bazie
            id: 5,
            slug: 'Podkładki gumowe pod wsporniki SBR gr 3 mm-107485',
            for_client: 'Podkładki gumowe pod wsporniki SBR gr 3 mm',
            to_series: ['raptor'],
            code: 107485,
            img: '/assets/placeholder-96-68.png',
            name: 'Podkładki gumowe pod wsporniki SBR 170x170 MM',
            short_name: 'DDR PG',
            visible: true,
        },
        {
            id: 6,
            slug: 'Podkładki gumowe pod wsporniki SBR gr 3 mm-102557',
            for_client: 'Podkładki gumowe pod wsporniki SBR gr 3 mm',
            to_series: ['spiral', 'standard'],
            img: '/assets/placeholder-96-68.png',
            visible: true,
            //
            _id: {
                $oid: '66816d6d9bce9862a73a73cf',
            },
            code: 102557,
            name: 'Podkładki gumowe pod wsporniki SBR  200x200 MM',
            short_name: 'SBR200/3',
            height_mm: 3,
            height_inch: '1/8',
            packaging: 60,
            euro_palet: 9600,
            price_net: 3.68,
            for_type: 'slab',
            system: 'standard,spiral',
        },
        {
            id: 7,
            slug: 'Głowica samopoziomująca-10170',
            for_client: 'Głowica samopoziomująca',
            to_series: ['standard'],
            code: 10170,
            img: '/assets/placeholder-96-68.png',
            name: 'Głowica samopoziomująca 7%',
            visible: true,
            //
            _id: {
                $oid: '66816d6d9bce9862a73a73f0',
            },
            // code: 1017010039, // TODO: sprawdzić ale chyba 10170
            short_name: 'LE',
            height_mm: 16,
            height_inch: '5/8',
            packaging: 250,
            euro_palet: 5000,
            price_net: 4.99,
            for_type: 'slab',
            system: 'standard',
        },
        {
            // to jest w kolekcji produkty
            id: 8,
            slug: 'Głowica samopoziomująca-10680',
            for_client: 'Głowica samopoziomująca',
            to_series: ['max', 'spiral'],
            code: 10680,
            img: '/assets/placeholder-96-68.png',
            name: 'Głowica samopoziomująca SPIRAL i dystanse 3 mm*',
            visible: true,
            //
            _id: {
                $oid: '6678676c0e5fa6eb83b6a5ae',
            },
            series: 'spiral',
            type: 'slab',
            distance_code: 10680,
            name: 'Głowica samopoziomująca SPIRAL i dystanse 3 mm*',
            short_name: 'SPIRAL LE',
            height_mm: 16,
            height_inch: '5/8',
            packaging: 100,
            euro_palet: 2000,
            price_net: 7.44,
        },
        {
            // tez w produktach
            id: 9,
            slug: 'Podkładka ochronna-107483',
            for_client: 'Podkładka ochronna',
            to_series: ['raptor'],
            code: 107483,
            img: '/assets/placeholder-96-68.png',
            name: 'Podkładka ochronna',
            short_name: 'DDR PO',
            visible: true,
            price_net: 100.8,
            //
            _id: {
                $oid: '6678676c0e5fa6eb83b6a604',
            },
            series: 'raptor',
            type: 'wood',
            distance_code: 107483,
            height_mm: 2,
            height_inch: '3/38',
            packaging: 100,
            euro_palet: 16000,
            price_net: 1.62,
        },
        {
            // TODO: tego nie ma w bazie
            id: 10,
            slug: 'Podkładka akustyczna-107484',
            for_client: 'Podkładka akustyczna',
            to_series: ['raptor'],
            code: 107484,
            img: '/assets/placeholder-96-68.png',
            name: 'Podkłakda akustyczna',
            short_name: 'DDR PA',
            visible: true,
            price_net: 100.8,
        },
        {
            id: 11,
            slug: 'Korektor nachylenia 7%-10908',
            for_client: 'Korektor nachylenia 7%',
            to_series: ['raptor'],
            code: 10908,
            img: '/assets/placeholder-96-68.png',
            name: 'Korektor nachylenia 7%',
            short_name: 'DDR KN',
            visible: true,
            //
            _id: {
                $oid: '66afa657f52db10b8fc3f886',
            },
            height_mm: 10,
            packaging: 50,
            euro_palet: 4000,
            price_net: 3.47,
        },
    ])

    useEffect(() => {
        setCheckedItems(filteredItems)
    }, [filteredItems, accesoriesForProducts])

    // TODO: full data from db record or fetch from db

    const filteredAccesories = accesoriesForProducts.filter(item => item.to_series.includes(main_system) && item.visible === true)

    const onChangeValue = event => {
        const search8mmString = /8 mm-.*/
        const search3mmString = /3 mm-.*/

        let updatedCheckedItems

        if (event.target.checked) {
            // Add the checked item
            updatedCheckedItems = [
                ...checkedItems,
                {
                    id: event.target.id,
                    slug: event.target.dataset.slug,
                    for_client: event.target.dataset.name,
                    code: event.target.dataset.code,
                    name: event.target.dataset.name,
                    short_name: event.target.dataset.short_name,
                    price_net: event.target.dataset.price_net,
                },
            ]
        } else {
            // Remove the unchecked item
            updatedCheckedItems = checkedItems.filter(item => item.id !== event.target.id)
        }

        const found8mm = updatedCheckedItems.some(item => search8mmString.test(item.slug))

        const found3mm = updatedCheckedItems.some(item => search3mmString.test(item.slug))

        if (found8mm) {
            setHas8(true)
            // Disable 3mm items
            accesoriesForProducts.forEach(item => {
                if (item.slug.match(search3mmString)) {
                    item.visible = false
                }
            })
        } else {
            setHas8(false)
            // Enable 3mm items
            accesoriesForProducts.forEach(item => {
                if (item.slug.match(search3mmString)) {
                    item.visible = true
                }
            })
        }

        if (found3mm) {
            setHas3(true)
            // Disable 8mm items
            accesoriesForProducts.forEach(item => {
                if (item.slug.match(search8mmString)) {
                    item.visible = false
                }
            })
        } else {
            setHas3(false)
            // Enable 8mm items
            accesoriesForProducts.forEach(item => {
                if (item.slug.match(search8mmString)) {
                    item.visible = true
                }
            })
        }

        // Update state and dispatch
        setCheckedItems(updatedCheckedItems)
        dispatch(setAdditionalAccessories(updatedCheckedItems))
    }

    const isChecked = id => {
        return checkedItems.some(item => item.id == id)
    }

    const isChecked8mm = () => {
        return checkedItems.some(item => item.slug.match(/8 mm-.*/))
    }

    const isChecked3mm = () => {
        return checkedItems.some(item => item.slug.match(/3 mm-.*/))
    }

    return (
        <>
            <section>
                {/*  modal */}
                <Modal size='3xl' isDismissable={false} isOpen={isOpen} onOpenChange={onOpenChange}>
                    <ModalContent>
                        {onClose => (
                            <>
                                <ModalHeader className='flex flex-col gap-1'>{t('Step5.modal.title')}</ModalHeader>
                                <ModalBody>
                                    <p>{t('Step5.modal.description')}</p>
                                </ModalBody>
                                <ModalFooter>
                                    <div className='flex flex-col lg:flex-row items-stretch gap-2 justify-center mx-auto'>
                                        <Button radius='lg' color='primary' onPress={() => setActiveStep(activeStep + 1)}>
                                            {t('Step5.modal.addProducts')}
                                        </Button>
                                        <Button radius='lg' color='primary' onPress={() => setActiveStep(activeStep + 2)}>
                                            {t('Step5.modal.goToSummary')}
                                        </Button>
                                    </div>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal>

                <div className='step--wrapper step-5 bg-[#f7f5f5] '>
                    {/* label absolute */}
                    <div className='absolue inline-flex left-0 top-0  text-white font-bold text-base  flex-col gap-1 items-start justify-center'>
                        <p className='bg-main pt-3 pb-3 pl-8 pr-8'>{t('Step5.title')}</p>
                    </div>
                    {/* content + padding */}
                    <div className='step--inner pt-20 pb-20 lg:pl-10 lg:pr-10 lg:w-10/12 mx-auto'>
                        {!type && <div className='text-2xl lg:text-4xl text-center'>{t('Step5.selectSurfaceFirst')}</div>}
                        {type && (
                            <div className='series--info'>
                                <p className='text-2xl font-bold textaccesories-black text-opacity-70 pt-16 pb-9'>
                                    {loading ? t('Step5.loading') : `${t('Step5.selectedSystem')} ${main_system.toUpperCase()}`}
                                </p>

                                {loading ? (
                                    t('Step5.loading')
                                ) : (
                                    <div className='series--accesories flex flex-col gap-6'>
                                        {filteredAccesories.map(item => (
                                            <div
                                                key={item.id}
                                                className={`relative hover:opacity-80 input-accesories--wrapper item-id-${item.id}  ${
                                                    isChecked(item.id) ? 'selected__top-left' : ''
                                                }`}
                                            >
                                                <label className='cursor-pointer'>
                                                    <input
                                                        type='checkbox'
                                                        id={item.id}
                                                        value={item.id}
                                                        onChange={onChangeValue}
                                                        className='hidden input-accesories'
                                                        data-id={item.id}
                                                        data-slug={item.slug}
                                                        data-code={item.code}
                                                        data-name={item.name}
                                                        data-short_name={item.short_name}
                                                        data-price_net={item.price_net}
                                                        data-count={item.count}
                                                    />
                                                    <div className='flex items-center justify-between'>
                                                        <div className='flex items-center justify-start gap-3 lg:gap-6'>
                                                            <Image width={96} height={68} src='/assets/placeholder-96-68.png' alt='placeholder' />
                                                            <div>
                                                                <p className='text-lg lg:text-2xl font-bold text-black text-opacity-70 selection:bg-none'>
                                                                    {item.for_client}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                        {/* mobile btn */}
                        <div className='w-full flex items-center justify-center mt-20 mb-16'>
                            {!type && (
                                <button
                                    onClick={() => setActiveStep((activeStep = 1))}
                                    className='btn btn--main btn--rounded disabled:opacity-50 disabled:cursor-not-allowed pr-14'
                                >
                                    <Image className='mr-5 transform rotate-180' src='/assets/arrow-next.svg' alt='' width={42} height={42} />
                                    {t('Step5.backToStep1')}
                                </button>
                            )}

                            {type && (
                                <button
                                    onClick={() => setActiveStep(activeStep + 1)}
                                    className='btn btn--main btn--rounded disabled:opacity-50 disabled:cursor-not-allowed'
                                >
                                    {t('Step1.nextButton')}
                                    <Image width={42} height={42} className='ml-5' src='/assets/arrow-next.svg' alt={t('Step1.nextArrow')} />
                                </button>
                            )}

                            <button
                                onClick={() => setActiveStep(activeStep + 1)}
                                className='btn btn--circle pointer-none disabled:opacity-50 disabled:cursor-not-allowed fixed hidden right-10 xl:flex items-center justify-center top-[50%] translate-y-[-50%]'
                            >
                                <Image className='min-w-[42px]' src='/assets/arrow-next.svg' alt={t('Step1.nextArrow')} width={42} height={42} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
