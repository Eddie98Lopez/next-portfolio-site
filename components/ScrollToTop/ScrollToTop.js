import React, {useEffect}from 'react'
import ScrollButton from './ScrollToTop.styles'
import ToTopIcon from './backToTop';

function buttonAppear() {
  const button = document.getElementById("scrollButton");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
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
    <ScrollButton onClick={toTop} id='scrollButton'>
      <ToTopIcon fill='grey'/>
    </ScrollButton >
  )
}

export default ScrollToTop