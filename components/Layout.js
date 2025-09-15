import React from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer'
import Loading from './Loading'
import { useStore } from '../utils/store/StoreProvider'
//import '../styles/globals.css'


const Layout = ({children, ...props}) => {

  const {loading} = useStore().store
  console.log(loading)

  if(loading){
    return(<Loading/>)
  }else{
      return (
    <>
  
    <Navigation/>
    {children}
    <Footer/>
    </>
  )
  }

}

export default Layout