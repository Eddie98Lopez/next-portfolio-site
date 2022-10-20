import React from "react";
import styled from "styled-components";
import { useMobile } from "./MobileContext";


const Burger = styled.div`

  height: 40px;
  width: 40px;
 
  display:none;
  position: relative;
  box-sizing: border-box;
  transform:translate(0,.1rem);

  & div {
    transition: all 0.3s ease-in-out;
    box-sizing: border-box;
    transform-origin: center;
  
    background: black;
    width: 30px;
    height: 5px;
    border-radius: 2px;
  }
  ${(props) =>
    props.mobile &&
    `
& #Rectangle_9{
  
  transform: rotate(-135deg);
  position:absolute;
  width:30px;
};

& #Rectangle_10{
  
  border: 3px solid black;
  background:none;
  position:absolute;
  z-index:-1;
  height: 40px;
  width:40px;
  
  border-radius:40px;
};

& #Rectangle_11{
  
  transform: rotate(135deg) ;
  width:30px;  
  position:absolute;
  
}`}

@media only screen and (max-width:768px) {
    display: flex;
    justify-content:center;
    gap:.25rem;
    flex-direction:column;
    align-items:center;

}
`;

const Hamburger = (props) => {
  const {mobile,setMobile} = useMobile();
 
  return (
    <Burger
      mobile={mobile}
      id="hamburger"
      onClick={() => {
        setMobile(!mobile);
      }}
    >
    
      <div id="Rectangle_9" />
      <div id="Rectangle_10" />
      <div id="Rectangle_11" />
     
    </Burger>
  );
};

export default Hamburger;
