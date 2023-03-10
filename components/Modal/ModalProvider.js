import React, {createContext, useContext, useState} from 'react'
import modalReducer from './modalReducer'

const ModalContext = createContext()
export const useModal = ()=> useContext(ModalContext)
const initialState = {
  display:true,
  title:';lkasjd ',
  text: 'boop',
  error:true,
}


const ModalProvider = (props) => {

  const [modal,setModal] = useState(initialState)
  const dispatch = (action)=>{
    setModal(modalReducer(modal,action))
  }


  
  return (
    <ModalContext.Provider value={{modal,dispatch}}>
      {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider