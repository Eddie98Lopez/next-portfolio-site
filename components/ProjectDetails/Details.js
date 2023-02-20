import React from "react";
import { useProject } from "./ProjectProvider";
import { StyledDetailsWrapper,StyledCategory,StyledDetails } from "./Details.styles";

export const Details = (props) => {
  const { title, description, library, collection } = useProject();
  return (
    <StyledDetailsWrapper>
      <StyledDetails>
        <h1>{title}</h1>
        <p>{description}</p>
      </StyledDetails>
      <StyledCategory>
        <h2>Category</h2>
        <p>
          {library}, {collection}
        </p>
      </StyledCategory>
    </StyledDetailsWrapper>
  );
};
