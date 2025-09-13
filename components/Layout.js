import React from 'react'
import Navigation from './Navigation/Navigation'
import Footer from './Footer'
import Loading from './Loading'
//import '../styles/globals.css'


const Layout = ({children, ...props}) => {
  return (
    <>
    <Loading/>
    <Navigation/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout