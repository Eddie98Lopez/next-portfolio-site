import React, { createContext, useContext, useState, useEffect } from "react";

const ScrollContext = createContext();
export const useScroll = () => useContext(ScrollContext);

const ScrollPosition = (props) => {
    const [scrollPosition, setScrollPosition] = useState(0)

/*     document.addEventListener('scroll', () => {
        console.log(window.scrollY)
        setScrollPosition(window.scrollY)
      }) */



  
      useEffect(() => {
    
        window.onscroll = function () {
            //console.log(window.scrollY)
            const value = window.scrollY
            setScrollPosition(value)
            //console.log(scrollPosition)
          
        };
      }, []);
    
  return <ScrollContext.Provider value={scrollPosition}>
    {props.children}
  </ScrollContext.Provider>;
};



export default ScrollPosition;
