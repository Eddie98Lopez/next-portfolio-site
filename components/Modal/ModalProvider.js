import React, {createContext, useContext, useState} from 'react'

const ModalContext = createContext()
export const useModal = ()=> useContext(ModalContext)


const ModalProvider = (props) => {

  const [modal,setModal] = useState(true)

  
  return (
    <ModalContext.Provider value={{modal,setModal}}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider