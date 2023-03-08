import React from 'react'
import ContactForm from '../components/Forms/ContactForm'
import ModalProvider from '../components/Modal/ModalProvider'
import Modal from '../components/Modal/Modal'

const Boop = (props) =>{
  return <div>hello </div>
}

const contact = () => {
  return (
    <ModalProvider>
    <div>
      <Modal component={Boop}/>
        <ContactForm/>
    </div>
    </ModalProvider>
  )
}

export default contact