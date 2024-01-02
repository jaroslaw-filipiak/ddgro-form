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
  hasIndicator = false,
}) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const type = useSelector((state) => state.form.type);
  return (
    <>
      {forType === type || forType === 'all' ? (
        <div className='input-row  flex items-center justify-between'>
          <div className='flex items-center justify-start gap-3'>
            <p className='text-opacity-50 text-xl font-medium text-black'>
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

          <input
            className='text-base pl-10 pr-10 pt-5 pb-5 text-center font-medium'
            placeholder={placeholder}
            type='text'
            value={value}
            onChange={onChange}
          />
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
