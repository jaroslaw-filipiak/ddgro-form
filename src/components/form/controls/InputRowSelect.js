import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

import { useSelector, useDispatch } from 'react-redux';
import { changeTotalArea } from '@/store/slices/formSlice';

export default function InputRow({
  forType,
  title,
  onChange,
  value,
  placeholder,
  modalContent,
  inputType,
  hasIndicator = false,
}) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const type = useSelector((state) => state.form.type);
  return (
    <>
      {forType === type || forType === 'all' ? (
        <div className='input-row flex flex-col lg:flex-row items-stretch lg:items-center justify-center lg:justify-between '>
          <div className='inline-flex flex-col lg:flex-row lg:items-center justify-start gap-2 lg:gap-3'>
            <p className='text-opacity-50 text-lg lg:text-xl font-medium text-black'>
              {title}
            </p>

            {hasIndicator ? (
              <div onClick={onOpen} className='question-indicator'>
                ?
              </div>
            ) : (
              ''
            )}
          </div>

          <select
            className='text-base p-4 font-medium lg:w-[247px] lg:h-[64px]'
            value={value ? value : '5'}
            onChange={onChange}
          >
            <option className='text-center' value='3'>
              3mm
            </option>
            <option className='text-center' value='5'>
              5mm
            </option>
          </select>
        </div>
      ) : null}

      {/*  modal */}
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
              <ModalBody>
                <p>{modalContent}</p>
              </ModalBody>
              <ModalFooter>
                <Button radius='lg' color='primary' onPress={onClose}>
                  Zamknij
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
