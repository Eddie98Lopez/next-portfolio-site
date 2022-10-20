import React from 'react'
import NavLink from './NavLink'
import { useMobile } from './MobileContext'
import styled from 'styled-components'

const Links = styled.ul`
transition:height .4s ease-in-out;
box-sizing: border-box;

@media only screen and (max-width:768px){
  width:100%;
  height:0;
  position:absolute;
  left:0;
  overflow:hidden;
  transition:all .4s ease-in-out;

  ${props=> props.mobile && `
  transition:all .4s ease-in-out;
  z-index:400;
  border-top: 2px solid black;
  background:rgba(255,255,255,.92);
  backdrop-filter:blur(3px);
  height: 50vh;
  
  `}
}

`



const LinksList = (props) => {
  const {mobile,setMobile}  = useMobile()
  return (
    <Links mobile={mobile}>
      <NavLink to={'/'} exact>Home</NavLink>
      <NavLink to={'/about'}>About Me</NavLink>
      <NavLink to={'/services'}>Services</NavLink>
      <NavLink to={'/portfolio'}>Portfolio</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
    </Links>
  )
}

export default LinksList