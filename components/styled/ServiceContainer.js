import styled from 'styled-components';

export const ServiceThumb = styled.div`
  padding: 5%;
  border: dashed 1px lightgrey;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 0.375rem;
`;

export const Container = styled.div`
  padding: 5%;
  border: dashed 1px lightgrey;
  background: rgba(255, 255, 255, 0.75);
  border-radius: 0.375rem;

  ${(props) => props.solid && `border-style:solid`}
`;

export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;
