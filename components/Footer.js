import React from 'react'
import styled from 'styled-components'
import SocialList from './SocialMedia/SocialList'

const Foot = styled.footer`
width:100%;
min-height: 30vh;
padding: 3rem auto;
color:slategray;
background:whitesmoke;
display:flex;
flex-direction:column;
gap:2rem;
justify-content:center;
align-items:center;
font-family: acumin-pro-condensed,sans-serif;
`

const Footer = () => {
  return (
    <Foot>
        <p>© Eduardo Lopez 2022</p>
        <SocialList/>
    </Foot>
  )
}

export default Footer