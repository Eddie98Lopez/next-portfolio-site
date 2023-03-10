import React from 'react'
import { useModal } from './ModalProvider'



const DialogBox = (props) => {

    const {title,text,error} = useModal().modal
  return (
    <div>
        <h1 className={error ? '.err' : ''}>{title}</h1>
        <p>{text}</p>
    </div>
  )
}

export default DialogBox