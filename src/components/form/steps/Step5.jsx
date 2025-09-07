import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setAccesories,
  setAdditionalAccessories,
} from '@/store/slices/formSlice';
import { useTranslations } from 'next-intl';

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@heroui/modal';
import { Button, ButtonGroup } from '@heroui/button';
import { useDisclosure } from '@heroui/use-disclosure';

import Image from 'next/image';
import { fetchAccesoriesForSeries } from '@/app/lib/api';
import { useLocale } from 'next-intl';

export default function Step5({ activeStep, setActiveStep }) {
  const locale = useLocale();
  const t = useTranslations();
  const dispatch = useDispatch();
  const main_system = useSelector((state) => state.form.main_system);
  const type = useSelector((state) => state.form.type);
  const [checkedItems, setCheckedItems] = useState([]);
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [has3, setHas3] = useState(false);
  const [has8, setHas8] = useState(false);
  const filteredItems = useSelector(
    (state) => state.form.additional_accessories
  );
  const [accesoriesForProducts, setAccesoriesForProducts] = useState([]);

  useEffect(() => {
    fetchAccesoriesForSeries(main_system).then((data) =>
      setAccesoriesForProducts(data?.data)
    );
  }, [main_system]);

  useEffect(() => {
    setCheckedItems(filteredItems);
  }, [filteredItems, accesoriesForProducts]);

  const onChangeValue = (event) => {
    let updatedCheckedItems;

    if (event.target.checked) {
      updatedCheckedItems = [
        ...checkedItems,
        {
          id: event.target.id,
          image_url: event.target.dataset.image_url,
          series: event.target.dataset.series,
          distance_code: event.target.dataset.distance_code,
          for_client: event.target.dataset.name,
          code: event.target.dataset.code,
          name: event.target.dataset.name,
          short_name: event.target.dataset.short_name,
          price_net: event.target.dataset.price_net,
        },
      ];
    } else {
      // Remove the unchecked item
      updatedCheckedItems = checkedItems.filter(
        (item) => item.id !== event.target.id
      );
    }

    // Update state and dispatch
    setCheckedItems(updatedCheckedItems);
    dispatch(setAdditionalAccessories(updatedCheckedItems));
  };

  const isChecked = (id) => {
    return checkedItems.some((item) => item.id == id);
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
                  {t('Step5.modal.title')}
                </ModalHeader>
                <ModalBody>
                  <p>{t('Step5.modal.description')}</p>
                </ModalBody>
                <ModalFooter>
                  <div className='flex flex-col lg:flex-row items-stretch gap-2 justify-center mx-auto'>
                    <Button
                      radius='lg'
                      color='primary'
                      onPress={() => setActiveStep(activeStep + 1)}
                    >
                      {t('Step5.modal.addProducts')}
                    </Button>
                    <Button
                      radius='lg'
                      color='primary'
                      onPress={() => setActiveStep(activeStep + 2)}
                    >
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
            {!type && (
              <div className='text-2xl lg:text-4xl text-center'>
                {t('Step5.selectSurfaceFirst')}
              </div>
            )}
            {type && (
              <div className='series--info'>
                <p className='text-2xl font-bold textaccesories-black text-opacity-70 pt-16 pb-9'>
                  {loading
                    ? t('Step5.loading')
                    : `${t(
                        'Step5.selectedSystem'
                      )} ${main_system.toUpperCase()}`}
                </p>

                {loading ? (
                  t('Step5.loading')
                ) : (
                  <div className='series--accesories flex flex-col gap-6'>
                    <pre>
                      {/* {JSON.stringify(accesoriesForProducts[0], null, 2)} */}

                      {/* {JSON.stringify(checkedItems, null, 2)} */}
                    </pre>
                    {accesoriesForProducts.map((item) => (
                      <div
                        key={item.id}
                        className={`relative hover:opacity-80 input-accesories--wrapper item-id-${
                          item.id
                        }  ${isChecked(item.id) ? 'selected__top-left' : ''}`}
                      >
                        <label className='cursor-pointer'>
                          <input
                            type='checkbox'
                            id={item.id}
                            value={item.id}
                            onChange={onChangeValue}
                            className='hidden input-accesories'
                            data-id={item.id}
                            data-image_url={item.image_url}
                            data-series={item.series}
                            data-code={item.distance_code}
                            data-name={item.name[locale]}
                            data-count={item.count}
                          />
                          <div className='flex items-center justify-between group'>
                            <div className='flex items-center justify-start gap-3 lg:gap-6'>
                              <div className='lg:w-40 lg:h-40 w-28 h-28 min-w-28 min-h-28 lg:min-w-40 lg:min-h-40 lg:max-w-40 lg:max-h-40 aspect-square   bg-white flex items-center justify-center border lg:p-6 p-3 rounded-lg group-hover:opacity-80 transition-all duration-200'>
                                <img
                                  className='w-full h-full object-cover'
                                  src={`/assets/${item.image_url}`}
                                  alt='placeholder'
                                />
                              </div>

                              <div className='selection:bg-transparent'>
                                <p className='text-lg lg:text-2xl font-bold text-black text-opacity-70 selection:bg-transparent'>
                                  {item.name[locale]}
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
                  {t('Step5.backToStep1')}
                </button>
              )}

              {type && (
                <button
                  onClick={() => setActiveStep(activeStep + 1)}
                  className='btn btn--main btn--rounded disabled:opacity-50 disabled:cursor-not-allowed'
                >
                  {t('Step1.nextButton')}
                  <Image
                    width={42}
                    height={42}
                    className='ml-5'
                    src='/assets/arrow-next.svg'
                    alt={t('Step1.nextArrow')}
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
                  alt={t('Step1.nextArrow')}
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
