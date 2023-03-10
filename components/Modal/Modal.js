import React from 'react'
import { useModal } from './ModalProvider'
import { ModalWrapper, ModalContent } from './Modal.styles'
import DialogBox from './MessageSent'

const Modal = (props) => {
    const {modal, dispatch} = useModal()
  return (
    <ModalWrapper display={modal.display.toString()} >

<ModalContent>
<DialogBox title={modal.title} text={modal.text}/>

<button onClick={()=>dispatch({type:'CLOSE_MODAL'})}>close</button>
</ModalContent>
        
    </ModalWrapper>
  )
}

export default Modal