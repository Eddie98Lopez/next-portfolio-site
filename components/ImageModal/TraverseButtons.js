import React from "react";
import { TraverseButton, Buttons } from "./ImageModal.styles";
import ToTopIcon from "../ScrollToTop/backToTop";
import { useDispatch } from "../ProjectDetails/ProjectProvider";

const TraverseButtons = (props) => {
  const { active, arrayLength } = props;
  const dispatch = useDispatch();
  const updateImgIndex = (payload) =>
    dispatch({ type: "UPDATE_IMG_INDEX", payload: payload });

  const goPrev = () => {
    active === 0 ? updateImgIndex(arrayLength - 1) : updateImgIndex(active - 1);
  };
  const goNext = () => {
    active + 1 > arrayLength - 1
      ? updateImgIndex(0)
      : updateImgIndex(active + 1);
  };

  return (
    <Buttons>
      <TraverseButton rotate="-90deg" onClick={goPrev}>
        <ToTopIcon />
      </TraverseButton>
      <div>
        {active + 1}/{arrayLength}
      </div>
      <TraverseButton rotate="90deg" onClick={goNext}>
        <ToTopIcon />
      </TraverseButton>
    </Buttons>
  );
};

export default TraverseButtons;
