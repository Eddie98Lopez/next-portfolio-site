import React from 'react'
import ContactForm from '../components/Forms/ContactForm'
import ModalProvider from '../components/Modal/ModalProvider'
import Modal from '../components/Modal/Modal'
import DialogBox from '../components/Modal/MessageSent'

const contact = () => {
  return (
    <ModalProvider>
    <div>
      <Modal/>
        <ContactForm/>
    </div>
    </ModalProvider>
  )
}

export default contact