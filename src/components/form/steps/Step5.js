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

  const accesoriesForSlab = [
    {
      id: 1,
      slug: 'sh',
      title: 'SH100 guma na wspornik',
      img: '/assets/placeholder-96-68.png',
    },
    {
      id: 2,
      slug: 'glowica-samopoziomujaca',
      title: 'Głowica samopoziomująca',
      img: '/assets/placeholder-96-68.png',
    },
    {
      id: 3,
      slug: 'sbr-3mm',
      title: 'Guma pod wspornik 3mm',
      img: '/assets/placeholder-96-68.png',
    },
    {
      id: 4,
      slug: 'sbr-8mm',
      title: 'Guma pod wspornik 8mm',
      img: '/assets/placeholder-96-68.png',
    },
  ];

  const accesoriesForWood = [
    {
      id: 5,
      slug: '-po',
      title: 'Podkładka Ochronna PO',
      img: '/assets/placeholder-96-68.png',
    },
    {
      id: 6,
      slug: 'kn',
      title: 'Korektor Nachylenia KN',
      img: '/assets/placeholder-96-68.png',
    },
    {
      id: 7,
      slug: 'pa',
      title: 'Podkładka Akustyczna PA',
      img: '/assets/placeholder-96-68.png',
    },
    {
      id: 8,
      slug: 'podkladka-gumowa-pod-wspornik',
      title: 'Podkładka gumowa pod wspornik 170x170x3 mm',
      img: '/assets/placeholder-96-68.png',
    },
  ];

  const onChangeValue = (event) => {
    // const item = document.querySelector(`.item-${event.target.id}`);
    console.log('onchangevalue');
    if (event.target.checked) {
      const newCheckedItems = [...checkedItems, event.target.id];
      setCheckedItems([...checkedItems, event.target.id]);
      dispatch(setAdditionalAccessories(newCheckedItems));
      // item.classList.add('selected__top-left');
    } else {
      const newCheckedItems = checkedItems.filter(
        (item) => item !== event.target.id
      );
      setCheckedItems(newCheckedItems);
      dispatch(setAdditionalAccessories(newCheckedItems));
      // item.classList.remove('selected__top-left');
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
                    : 'Wybierz  dodatkowe akcesoria'}
                </p>

                {loading ? (
                  'wczytywanie danych...'
                ) : (
                  <div className='series--accesories flex flex-col gap-6'>
                    {type === 'slab' &&
                      accesoriesForSlab.map((item) => {
                        return (
                          <div
                            key={item.slug}
                            className={`relative hover:opacity-80 input-accesories--wrapper ${
                              checkedItems.includes(item.slug.toString())
                                ? 'selected__top-left'
                                : ''
                            }`}
                          >
                            <label className='cursor-pointer'>
                              <input
                                type='checkbox'
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
                                      {item.title}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                        );
                      })}

                    {type === 'wood' &&
                      accesoriesForWood.map((item) => {
                        return (
                          <div
                            key={item.slug}
                            className={`relative hover:opacity-80 input-accesories--wrapper ${
                              checkedItems.includes(item.slug.toString())
                                ? 'selected__top-left'
                                : ''
                            }`}
                          >
                            <label className='cursor-pointer'>
                              <input
                                type='checkbox'
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
                                    <p className='text-lg lg:text-2xl font-bold text-black text-opacity-70  selection:bg-none'>
                                      {item.title}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                        );
                      })}
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
