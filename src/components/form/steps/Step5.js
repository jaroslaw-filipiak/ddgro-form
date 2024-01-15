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

export default function Step5({ activeStep, setActiveStep }) {
  const dispatch = useDispatch();
  const main_system = useSelector((state) => state.form.main_system);
  const type = useSelector((state) => state.form.type);
  const accesories = useSelector((state) => state.form.accesories);
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
          <div className='step--inner pt-20 pb-20 pl-10 pr-10 lg:w-10/12 mx-auto'>
            {/* one serie db info */}
            <div className='series--info'>
              <p className='text-2xl font-bold textaccesories-black text-opacity-70 pt-16 pb-9'>
                {loading ? 'Wczytuje dane...' : 'Wybierz akcesoria'}
              </p>

              {loading ? (
                'wczytywanie danych...'
              ) : (
                <div className='series--accesories flex flex-col gap-6'>
                  {/* loop items */}

                  {accesories.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className={`relative hover:opacity-80 input-accesories--wrapper ${
                          checkedItems.filter((checked) =>
                            checked.includes(item.id)
                          ).length > 0
                            ? 'selected__top-left'
                            : ''
                        }`}
                      >
                        <label className='cursor-pointer' htmlFor={item.id}>
                          <input
                            type='checkbox'
                            id={item.id}
                            name={item.id}
                            value={item.id}
                            className='hidden input-accesories'
                            onChange={(event) => onChangeValue(event)}
                          />
                          <div className='flex items-center justify-between'>
                            <div className='flex items-center justify-start gap-3 lg:gap-6'>
                              <img src='/assets/placeholder-96-68.png' />
                              <div>
                                <p className='text-lg lg:text-2xl font-bold text-black text-opacity-70 '>
                                  {item.name}
                                </p>
                                <p className=' text-lg text-black text-opacity-50 font-normal'>
                                  {/* Dzięki prawidłowo zaprojektowanej konstrukcji
                                  wspornik MAX w pełni ... */}
                                </p>
                              </div>
                            </div>
                            {
                              // <div className='border w-[38px] h-[38px] rounded-full bg-white flex items-center '></div>
                            }
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            {/* mobile btn */}
            <div className='w-full flex items-center justify-center mt-20 mb-16'>
              <button onClick={onOpen} className='btn btn--main btn--rounded'>
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
