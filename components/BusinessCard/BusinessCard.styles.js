import styled from "styled-components";

const VCardButton = styled.a`
color: white;
background: black;
box-sizing:border-box;
text-align: center;
border-radius: 10px;
text-transform: uppercase;
font-size: 1.15rem;
letter-spacing: 3px;
width: 77%;
padding: 1rem;
text-decoration:none;
font-weight:700;

`
export const ProfilePicWrap = styled.div`

    display: grid;
    place-content: center center;

    object-fit: cover;
    background:transparent; 
    clip-path: circle(50% at center);
    width: 10rem;
    height:10rem;
    

& img{
    object-fit: cover;
    width: inherit;
    height: auto;

}`
const BizCardWrap = styled.section`

min-height: 100vh;
width:100%;
position: absolute;
top:0;
left:0;
z-index: 3000;
background: white;
`

export const NameBadge=styled.div`
text-align:center;
display:flex;
flex-direction:column;
gap:.75rem;

& h1{
    font-size: 2rem;
    font-weight: 700;

};
& h2{
    font-size: 1rem;
    
};
`

export const Card = styled.div`
animation: fadeInUp;
animation-duration: 1s;
animation-delay: 3s;
box-sizing:border-box;
padding: 2rem 0 2rem 0;
font-family: acumin-pro, sans-serif;
font-weight: 500;
font-size:1.5rem;
text-decoration:none;
position:sticky;
top:0;
left:0;
width: 100%;
height:100vh;
display: flex;
flex-direction: column;
align-items: center;
gap:2.5rem;
background: white;
overflow-y:scroll;
`

export {VCardButton, BizCardWrap}