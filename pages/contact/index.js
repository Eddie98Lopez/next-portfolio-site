import React from 'react'
import ContactForm from '../../components/Forms/ContactForm'
import ModalProvider from '../../components/Modal/ModalProvider'
import Modal from '../../components/Modal/Modal'
import DialogBox from '../../components/Modal/MessageSent'
import styled from 'styled-components'

const ContactLayout = styled.div`

width:100%;
justify-self:center;
max-width:1200px;
padding:0px 8%`



const contact = () => {
  return (
    <ModalProvider>
    <div>
      <Modal/>
      <ContactLayout>
      <ContactForm/>
      </ContactLayout>
    </div>
    </ModalProvider>
  )
}

export default contact