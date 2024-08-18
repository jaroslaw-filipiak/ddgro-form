import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setAccesories,
  setAdditionalAccessories,
} from '@/store/slices/formSlice';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

import Image from 'next/image';

export default function Step5({ activeStep, setActiveStep }) {
  const dispatch = useDispatch();
  const main_system = useSelector((state) => state.form.main_system);
  const type = useSelector((state) => state.form.type);
  const accesories = useSelector((state) => state.form.accesories);
  const accesoriesForType = accesories.filter((item) => item.for_type === type);
  const filteredItems = useSelector(
    (state) => state.form.additional_accessories
  );

  const [checkedItems, setCheckedItems] = useState([]);
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    setCheckedItems(filteredItems);
  }, [filteredItems]);

  // TODO: full data from db record or fetch from db

  const accesoriesForProducts = [
    {
      id: 1,
      slug: 'Podkładka wygłuszająco - wyrównująca SH na wspornik-10399',
      for_client: 'Podkładka wygłuszająco - wyrównująca SH na wspornik',
      to_series: ['standard'],
      code: 10039,
      img: '/assets/placeholder-96-68.png',
      name: 'Podkładka wygłuszająco - wyrównująca SH100',
      short_name: 'SH100',
    },
    {
      id: 2,
      slug: 'Podkładka wygłuszająco - wyrównująca SH na wspornik-10314',
      for_client: 'Podkładka wygłuszająco - wyrównująca SH na wspornik',
      to_series: ['spiral', 'max'],
      code: 10314,
      img: '/assets/placeholder-96-68.png',
      name: 'Podkładka wygłuszająco - wyrównująca SH145',
      short_name: 'SH145',
    },
    {
      id: 3,
      slug: 'Podkładki gumowe pod wsporniki SBR gr. 8 mm-102559',
      for_client: 'Podkładki gumowe pod wsporniki SBR gr. 8 mm',
      to_series: ['spiral', 'standard'],
      code: 102559,
      img: '/assets/placeholder-96-68.png',
      name: 'Podkładki gumowe pod wsporniki SBR  200x200 MM',
      short_name: 'SBR200/8',
    },
    {
      id: 4,
      slug: 'Podkładki gumowe pod wsporniki SBR gr 3 mm-10414',
      for_client: 'Podkładki gumowe pod wsporniki SBR gr 3 mm',
      to_series: ['max'],
      code: 10414,
      img: '/assets/placeholder-96-68.png',
      name: 'Podkładki gumowe pod wsporniki MAX SBR  220x220 MM (Akcesoria)',
      short_name: 'SBR220/3',
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
    },
    {
      id: 6,
      slug: 'Podkładki gumowe pod wsporniki SBR gr 3 mm-102557',
      for_client: 'Podkładki gumowe pod wsporniki SBR gr 3 mm',
      to_series: ['spiral', 'standard'],
      code: 102557,
      img: '/assets/placeholder-96-68.png',
      name: 'Podkładki gumowe pod wsporniki SBR  200x200 MM',
      short_name: 'SBR200/3',
    },
    {
      id: 7,
      slug: 'Głowica samopoziomująca-10170',
      for_client: 'Głowica samopoziomująca',
      to_series: ['standard'],
      code: 10170,
      img: '/assets/placeholder-96-68.png',
      name: 'Głowica samopoziomująca 7%',
      short_name: 'LE',
    },
    {
      id: 8,
      slug: 'Głowica samopoziomująca-10680',
      for_client: 'Głowica samopoziomująca',
      to_series: ['max', 'spiral'],
      code: 10680,
      img: '/assets/placeholder-96-68.png',
      name: 'Głowica samopoziomująca SPIRAL i dystanse 3 mm*',
      short_name: 'SPIRAL LE',
    },
    {
      id: 9,
      slug: 'Podkładka ochronna-107483',
      for_client: 'Podkładka ochronna',
      to_series: ['raptor'],
      code: 107483,
      img: '/assets/placeholder-96-68.png',
      name: 'Podkładka ochronna',
      short_name: 'DDR PO',
    },
    {
      id: 10,
      slug: 'Podkładka akustyczna-107484',
      for_client: 'Podkładka akustyczna',
      to_series: ['raptor'],
      code: 107484,
      img: '/assets/placeholder-96-68.png',
      name: 'Podkłakda akustyczna',
      short_name: 'DDR PA',
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
    },
  ];

  const filteredAccesories = accesoriesForProducts.filter((item) =>
    item.to_series.includes(main_system)
  );

  const onChangeValue = (event) => {
    console.log('onchangevalue');
    console.log(event);
    console.log(event.target.value);
    console.log(event.target.id);

    const searchString = 'Podkładki';

    if (event.target.checked) {
      const newCheckedItems = [...checkedItems, event.target.id];

      const found = newCheckedItems.some((item) => item.includes(searchString));
      console.log(found);

      setCheckedItems([...checkedItems, event.target.id]);
      dispatch(setAdditionalAccessories(newCheckedItems));
    } else {
      const newCheckedItems = checkedItems.filter(
        (item) => item !== event.target.id
      );

      const found = newCheckedItems.some((item) => item.includes(searchString));
      console.log(found);

      setCheckedItems(newCheckedItems);
      dispatch(setAdditionalAccessories(newCheckedItems));
    }
  };

  return (
    <>
      <section>
        {/*  modal */}
        <Modal
          size='3xl'
          isDismissable={false}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>
                  Kolejny krok
                </ModalHeader>
                <ModalBody>
                  <p>
                    W kolejnym kroku masz możliwość ręcznego dodania produktów z
                    całego asortymentu ddgro. Jest to krok dodatkowy
                    umożliwiający dodanie dodatkowej ilość produktów do
                    zamówienia. Jeżeli nie chcesz dodawać dodatkowych produktów,
                    kliknij przycisk Przechodze do podsumowania w prawym dolnym
                    rogu.
                  </p>
                </ModalBody>
                <ModalFooter>
                  <div className='flex flex-col lg:flex-row items-stretch gap-2 justify-center mx-auto'>
                    <Button
                      radius='lg'
                      color='primary'
                      onPress={() => setActiveStep(activeStep + 1)}
                    >
                      Tak, chce dodać dodatkowe produkty samodzielnie
                    </Button>
                    <Button
                      radius='lg'
                      color='primary'
                      onPress={() => setActiveStep(activeStep + 2)}
                    >
                      Nie ,przechodze do podsumowania
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
            <p className='bg-main pt-3 pb-3 pl-8 pr-8'>
              Dodatkowe akcesoria do wsporników
            </p>
          </div>
          {/* content + padding */}
          <div className='step--inner pt-20 pb-20 lg:pl-10 lg:pr-10 lg:w-10/12 mx-auto'>
            {/* one serie db info */}

            {!type && (
              <div className='text-2xl lg:text-4xl text-center'>
                Wybierz rodzaj nawierzchni tarasu (pkt 1), bez tych danych nie
                będziemy w stanie wyświelić listy akcesoriów
              </div>
            )}

            {type && (
              <div className='series--info'>
                <p className='text-2xl font-bold textaccesories-black text-opacity-70 pt-16 pb-9'>
                  {loading
                    ? 'Wczytuje dane...'
                    : `Wybierz dodatkowe akcesoria, wybrany system: ${main_system}`}
                </p>

                {loading ? (
                  'wczytywanie danych...'
                ) : (
                  <div className='series--accesories flex flex-col gap-6'>
                    {filteredAccesories.map((item) => (
                      <div
                        key={item.slug}
                        id={item.id}
                        className={`relative hover:opacity-80 input-accesories--wrapper ${
                          checkedItems.includes(item.slug.toString())
                            ? 'selected__top-left'
                            : ''
                        }`}
                      >
                        <label className='cursor-pointer'>
                          <input
                            type='checkbox'
                            object={item}
                            id={item.slug}
                            name={item.title}
                            value={item.title}
                            onChange={onChangeValue}
                            className='hidden input-accesories'
                          />
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center justify-start gap-3 lg:gap-6'>
                              <Image
                                width={96}
                                height={68}
                                src='/assets/placeholder-96-68.png'
                                alt='placeholder'
                              />
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
                  <Image
                    className='mr-5 transform rotate-180'
                    src='/assets/arrow-next.svg'
                    alt=''
                    width={42}
                    height={42}
                  />
                  Wróć do kroku nr 1
                </button>
              )}

              {type && (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className='btn btn--main btn--rounded disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  Następny krok
                  <Image
                    width={42}
                    height={42}
                    className='ml-5'
                    src='/assets/arrow-next.svg'
                    alt=''
                  />
                </button>
              )}

              <button
                onClick={() => setActiveStep(activeStep + 1)}
                className='btn btn--circle pointer-none disabled:opacity-50 disabled:cursor-not-allowed fixed hidden right-10 xl:flex items-center justify-center top-[50%] translate-y-[-50%]'
              >
                <Image
                  className='min-w-[42px]'
                  src='/assets/arrow-next.svg'
                  alt=''
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
