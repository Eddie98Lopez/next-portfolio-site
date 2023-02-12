import React from "react";
import { ModalContent, ModalWrapper } from "./ImageModal.styles";
import { useImgIndex, useModal } from "../ProjectDetails/ProjectProvider";
import TraverseButtons from "./TraverseButtons";
import CloseModal from "./CloseModal";

const ImageModal = (props) => {
  const { array } = props;
  const active = useImgIndex();
  const modal = useModal();
  
  return (
    <ModalWrapper display={modal.toString()}>
      <ModalContent>
        <CloseModal />
        <div>
          <img src={array[active].href} alt="projectimage" />
        </div>
        <TraverseButtons active={active} arrayLength={array.length} />
      </ModalContent>
    </ModalWrapper>
  );
};

export default ImageModal;
