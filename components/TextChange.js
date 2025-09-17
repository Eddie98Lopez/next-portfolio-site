import React, { useState, useEffect } from 'react'
import { Typewriter } from 'motion-plus/react'
import styled from 'styled-components'

const StyledP = styled.p`


 text-transform: uppercase;
 font-style: normal;
 

 ${props => {
    if (props.text === "designer") {
      return `
      font-family: "Grock Marker", sans-serif;
      letter-spacing: -10px;
      font-size:12rem;
    `
    }

    else {
      return `
        font-family: "Cascadia Code", sans-serif;
        font-weight: 800;
        letter-spacing: -5px;
        font-size:11rem;
        font-style:italic;
    `
    }
  }}

`


const Typewrite = () => {

  const [text, setText] = useState("designer")


  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === "designer" ? "developer" : "designer"));
    }, 5000);

    // cleanup when text changes or component unmounts
    return () => clearInterval(interval);
  }, [text]);



  return (
    <StyledP text={text}><Typewriter speed={"slow"}>{text}</Typewriter></StyledP>
  )
}

export default Typewrite