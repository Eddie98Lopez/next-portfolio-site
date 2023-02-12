import React from 'react'
import { CloseButton } from './ImageModal.styles'
import CloseIcon from './closeIcon'
import { useDispatch } from '../ProjectDetails/ProjectProvider'

const CloseModal = () => {
    const dispatch = useDispatch()
    const close = () => dispatch({ type: "TOGGLE_MODAL" });

  return (
    <CloseButton onClick={close}>
    <CloseIcon />
  </CloseButton>
  )
}

export default CloseModal