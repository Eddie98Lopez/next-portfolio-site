import React from 'react'
import { useModal } from './ModalProvider'
import { ModalWrapper } from './Modal.styles'

const Modal = (props) => {
    console.log(props)
    const {component} = props
    const {modal, setModal} = useModal()
  return (
    <ModalWrapper display={modal.toString()} >

    {component()}
        
    </ModalWrapper>
  )
}

export default Modal