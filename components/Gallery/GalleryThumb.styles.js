import styled from "styled-components";

export const GridList = styled.ul`
width: 90%;
margin:auto;
padding: 1rem;
display: grid;
grid-template-columns: repeat(4,1fr);
gap:2rem;
padding-bottom:15vh;

@media only screen and (max-width:768px){
  width:100%;
  grid-template-columns: repeat(2,1fr);
  gap:1rem;
}`

const ThumbContainer = styled.li`
font-family: acumin-pro-condensed,roboto ,  sans-serif;
letter-spacing:1px;

& h2{
  text-transform: uppercase;
  font-weight:700;
  font-style: normal;
  margin-bottom:.25rem;
}
& h3{
  color: lightgrey;
  font-weight:300;
}

width: 100%;

& .info{
  padding-top: .5rem;
}


@keyframes enter{
  0%{
    opacity:0;
    transform:translateY(15px);

    & img{
      filter:blur(15px)
    }
  }
  100%{
    opacity:1;
    transform:translateY(0);
    & img{
      filter:blur(15px)
    }
  }

}

animation-name: enter;
animation-duration: ${props=>props.duration}s;
@media only screen and (max-width:768px){
margin-bottom:1rem;

}

`

export const ImageContainer = styled.div`
  position: relative;
  transition: 0.3s ease-in-out;
  display:block;
  overflow:hidden;

  &::before {
    content: " ";
    display: block;
    width: 100%;
    padding-top: 100%;
  }


  & img {
    position: absolute;
    transform-origin:center;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    transition:all 0.3s ease-in-out;
    width: 100%;
    height: 100%;
    object-fit: cover;

  }

  &:hover {
    transition: all 0.3s ease-in-out;
    & img{
      transform: scale(115%,115%);
      transition:all 0.3s ease-in-out;
      opacity:.5;
      filter:blur(1px)
    }

  }

  

`;

export default ThumbContainer;