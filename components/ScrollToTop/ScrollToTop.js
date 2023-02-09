import React, {useEffect}from 'react'
import ScrollButton from './ScrollToTop.styles'

function buttonAppear() {
  const button = document.getElementById("scrollButton");
  if (
    document.body.scrollTop > 80 ||
    document.documentElement.scrollTop > 80
  ) {
      button.style.opacity = 1
  
  } else {
      button.style.opacity = 0
  }
}




const toTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
}



const ScrollToTop = () => {

  useEffect(()=>{
    window.onscroll = function () {buttonAppear()}
  },[])

  return (
    <ScrollButton onClick={toTop} id='scrollButton'> </ScrollButton >
  )
}

export default ScrollToTop