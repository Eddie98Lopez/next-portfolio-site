import React, { useState } from "react";
import CloseIcon from "./closeIcon";
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
        <CloseButton onClick={close}>
        
                <CloseIcon/>
            
        </CloseButton>
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
