import React from "react";
import styled from "styled-components";
import { useProject } from "./ProjectProvider";

const Deets = styled.div`
height: min-content;
font-family: acumin-condensed-pro, sans-serif;
position: sticky;
top: 8rem;


& h1{
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 5px;
  font-weight: 600;
  margin-bottom: 1rem;
}

& p {
  line-height: 1.25rem;
  font-size: .8rem;
  color:grey;
}

@media only screen and (max-width: 768px){
    clear: top;
    padding: 4rem 2rem;

    & p{
      font-size: 1.35rem;
      line-height: 2rem;
    }
}
`;

export const Details = (props) => {
  const {title, description} = useProject();
  return (
    <Deets>
        
      <h1>{title}</h1>
      <p>{description}</p>
    </Deets>
  );
};
