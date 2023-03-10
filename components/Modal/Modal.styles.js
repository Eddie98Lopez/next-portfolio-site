import styled from "styled-components";

export const ModalWrapper = styled.div`
height: 100vh;
width: 100%;
position:fixed;
box-sizing:border-box;
padding:0;
top:0;
left:0;
margin:auto;
text-align:center;
z-index: 600000000000000000000000;
background: rgba(0,0,0,.65);
backdrop-filter:blur(7px);
display:${props => props.display === 'true' ? 'flex' : 'none'};

`


export const ModalContent = styled.div`
width: auto;
height: min-content;
margin:auto;
padding:2rem;
background:white;

box-sizing: border-box;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
gap:2rem;
font-family: acumin-pro-condensed, sans-serif;
font-size:1.15rem;


&.err{
    color:crimson;
}


& h1{
    margin-bottom:2rem;
    font-size: 2rem;
    font-weight: 600;
}`