import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const LinkWrap = styled.a`
text-align:center;
text-transform:capitalize;
text-decoration:none;
font-size:1rem;
color: black;
& svg{
  cursor:pointer;
  transition: all ease-in-out .3s;
  height: ${props=>props.linkHeight? props.linkHeight : '25px'};
  width: auto;
  fill:lightgray;

  &:hover{
    transition: all ease-in-out .3s;
    fill:${props=>props.fill};
    transform: translate(0,-10px)

  }

  @media only screen and (max-width: 768px){
    height: ${props=>props.linkHeight? props.linkHeight : '50px'};
  }
}`

const SocialLink = ({to, children,fill,type, showType,...props}) => {
  
  return (
    <Link href={to} passHref {...props} target='_blank'>
    <LinkWrap fill={fill} target='_blank' {...props}>
      {children}
      {showType && <p>{type}</p>}
      </LinkWrap>
    </Link>
  )
}

export default SocialLink