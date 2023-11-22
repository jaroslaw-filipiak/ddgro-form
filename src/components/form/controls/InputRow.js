import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from '@nextui-org/react';

import { useSelector } from 'react-redux';

export default function InputRow({ forType, title }) {
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

            <div onClick={onOpen} className='question-indicator'>
              ?
            </div>
          </div>

          <input
            className='text-base pl-10 pr-10 pt-5 pb-5 text-center font-medium'
            placeholder='ilość m2'
            type='text'
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
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
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
