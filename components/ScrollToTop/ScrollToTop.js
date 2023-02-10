import React, {useEffect}from 'react'
import ScrollButton from './ScrollToTop.styles'
import ToTopIcon from './backToTop';
import { useScroll } from '../../utils/ScrollPosition';

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
  const boop = useScroll()
  //console.log(boop)

/*   useEffect(()=>{
    window.onscroll = function () {buttonAppear()
 
  console.log(boop) }
  },[]) */

  return (
    <ScrollButton onClick={toTop} id='scrollButton' scroll={boop}>
      <ToTopIcon fill='grey'/>
    </ScrollButton >
  )
}

export default ScrollToTop