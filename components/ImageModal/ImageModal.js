import Image from 'next/image'
import React , {useState} from 'react'
import { ModalContent, ModalWrapper } from './ImageModal.styles'


/*

This component will be visible when the user clicks on an image. 

-Will need a list of images from props
-will need an "active image index" slice of state
-will need "next" and "prev" helper functions that update the active image index
    -- !array[i+1] && array[0] 

Features: 
1. Close Button
2. Wrapper with darkened and blurred background 
3. Buttons that scroll to next image in project 

*/

const ImageModal = (props) => {
    const {array} = props

    const [active,setActive] = useState(2)
    const goPrev = () => {
        active === 0 ? setActive(array.length - 1) : setActive(active - 1) 
    }
    const goNext = () => {
        active + 1 > array.length - 1 ? setActive(0) : setActive(active + 1) 
    }

    console.log(props.array)
  return (
    <ModalWrapper>
        <ModalContent>
            <div><img src={array[active].href} alt='projectimage'/></div>
            <button onClick={goPrev}>prev</button>
            <button onClick={goNext}>next</button>
        </ModalContent>
    </ModalWrapper>
  )
}

export default ImageModal