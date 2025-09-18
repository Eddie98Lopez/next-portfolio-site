import React from 'react'
import NavLink from './NavLink'
import { useMobile } from './MobileContext'
import styled from 'styled-components'
import { motion } from 'motion/react'

const LinksLayout = styled.ul`
transition:height .4s ease-in-out;
box-sizing: border-box;
display:flex;

@media only screen and (max-width:768px){
  width:100%;

  display:none;
  grid-template-rows: 0fr;

  ${props => props.mobile && `
    display:grid;
    grid-template-rows: 1fr;
  transition:all .3s ease-in-out;
  
  
  `}
}

`

const LinksWrapper = styled.div`
transition:all .4s ease-in-out;
box-sizing: border-box;
@media only screen and (max-width:768px){
display:grid;
grid-template-rows: minmax(0px,1fr);



${props => props.mobile && `
   
  transition:all .4s ease-in-out;
  z-index:400;
  border-top: 2px solid black;
  background:rgba(255,255,255,.9);
  backdrop-filter:blur(3px);
  grid-template-rows: minmax(250px,1fr);
 
  
  `}}
`

const NavLinks = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/portfolio", name: "Portfolio" },
    { path: "/blog", name: "Blog" },
  { path: "/contact", name: "contact" }
]



const LinksList = (props) => {
  const { mobile, setMobile } = useMobile()
  return (
    <LinksWrapper mobile={mobile}>
        <LinksLayout mobile={mobile}>
      {NavLinks.map((item, i) => {
        return (
          <motion.li
            key={`navlink-${i + 1}`}
            transition={{duration:.3 ,delay:.15*(i+1)}}
            initial={{ opacity: 0, transform: `translateX(-100%)` }}
            whileInView={{ opacity: 1, transform: `translateX(0)` }}>

            <NavLink to={item.path} exact={item.path==="/"}>{item.name}</NavLink>

          </motion.li>
        )
      })}

    </LinksLayout>
    </LinksWrapper>
  )
}

export default LinksList