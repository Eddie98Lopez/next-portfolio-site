import styled from 'styled-components';

export const HomeHeroWrapper = styled.section`
  width: 100%;
  height: 95vh;
  box-sizing: border-box;
  display: grid;
  gap: 30px;
  grid-template-columns: 50% 50%;
  padding: 80px 8%;
  overflow: hidden;

  & .a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.5rem;
  }

  & .b {
    display: flex;
    place-items: center;

    & img {
      height: 150%;
      width: auto;
      mix-blend-mode: multiply;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-areas: 'b' 'a';
    height: auto;

    & .a {
      grid-area: a;
      text-align: center;
      gap: 1.5rem;
    }

    & .b {
      text-align: center;
      place-content: center;
      grid-area: b;
      & img {
        width: 90%;
        height: auto;
        mix-blend-mode: multiply;
      }
    }
  }
`;
export default HomeHeroWrapper;
