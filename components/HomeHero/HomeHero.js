import styled from 'styled-components'

export const HomeHeroWrapper = styled.section`
width:100%;
height:97vh;
display:grid;
gap:30px;
grid-template-areas: "a a a a a b b b b";
padding: 80px 8%;
padding-top:90px;

& .a{
grid-area:a;
display:flex;
flex-direction:column;
justify-content:center;
};

& .b{
grid-area:b;
};

@media only screen and (max-width:768px){
grid-template-areas: "b" "a";}

`
export default HomeHeroWrapper


