import Image from "next/image";
import React, { useState } from "react";
import {
  ModalContent,
  ModalWrapper,
  TraverseButton,
  CloseButton,
  Buttons,
} from "./ImageModal.styles";
import {
  useImgIndex,
  useDispatch,
  useModal,
} from "../ProjectDetails/ProjectProvider";
import ToTopIcon from "../ScrollToTop/backToTop";

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
  const { array, display } = props;
  const active = useImgIndex();
  const dispatch = useDispatch();
  const modal = useModal();
  const close = () => dispatch({ type: "TOGGLE_MODAL" });
  const updateImgIndex = (payload) =>
    dispatch({ type: "UPDATE_IMG_INDEX", payload: payload });

  const goPrev = () => {
    active === 0
      ? updateImgIndex(array.length - 1)
      : updateImgIndex(active - 1);
  };
  const goNext = () => {
    active + 1 > array.length - 1
      ? updateImgIndex(0)
      : updateImgIndex(active + 1);
  };

  console.log(props.array[active]);
  return (
    <ModalWrapper display={modal.toString()}>
      <ModalContent>
        <CloseButton onClick={close}>X</CloseButton>
        <div>
          <img src={array[active].href} alt="projectimage" />
        </div>
        <Buttons>
          <TraverseButton rotate="-90deg" onClick={goPrev}>
            <ToTopIcon />
          </TraverseButton>
          <div>
            {active + 1}/{array.length}
          </div>
          <TraverseButton rotate="90deg" onClick={goNext}>
            <ToTopIcon />
          </TraverseButton>
        </Buttons>
      </ModalContent>
    </ModalWrapper>
  );
};

export default ImageModal;
