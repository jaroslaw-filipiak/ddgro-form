import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/modal'
import { Button, ButtonGroup } from '@heroui/button'

import { useSelector, useDispatch } from 'react-redux'
import { useDisclosure } from '@heroui/use-disclosure'
import { useTranslations } from 'next-intl'

export default function InputRow({ forType, title, onChange, value, minValue, placeholder, modalContent, inputType, inputID, hasIndicator = false }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure()
    const type = useSelector(state => state.form.type)
    const t = useTranslations()
    return (
        <>
            {forType === type || forType === 'all' ? (
                <div className='input-row  flex flex-col lg:flex-row items-stretch lg:items-center justify-center lg:justify-between'>
                    <div className='inline-flex  flex-col lg:flex-row lg:items-center justify-start gap-2 lg:gap-3'>
                        <p className='text-opacity-50 text-lg lg:text-xl font-medium text-black'>{title}</p>

                        {hasIndicator ? (
                            <div onClick={onOpen} className='question-indicator'>
                                ?
                            </div>
                        ) : (
                            ''
                        )}
                    </div>

                    <input
                        className='text-base p-4 lg:pl-10 lg:pr-10 lg:pt-5 lg:pb-5 text-center font-medium lg:w-[247px] lg:h-[64px]'
                        placeholder={placeholder}
                        type={inputType ? inputType : 'text'}
                        value={value}
                        onChange={onChange}
                        min={minValue}
                        id={inputID ? inputID : ''}
                    />
                </div>
            ) : null}

            {/*  modal */}
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {onClose => (
                        <>
                            <ModalHeader className='flex flex-col gap-1'>{title}</ModalHeader>
                            <ModalBody>
                                <div dangerouslySetInnerHTML={{ __html: modalContent }}></div>
                            </ModalBody>
                            <ModalFooter>
                                <Button radius='lg' color='primary' onPress={onClose}>
                                    {t('Common.close')}
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
