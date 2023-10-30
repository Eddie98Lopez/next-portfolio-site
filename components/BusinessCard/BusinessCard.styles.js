import styled from "styled-components";

const VCardButton = styled.a`
color: white;
background: black;
box-sizing:border-box;
text-align: center;
width: 90%;
padding: 1rem;
text-decoration:none;
`

const BizCardWrap = styled.section`
width: 100%;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
gap:1rem;
height 100vh;
position: fixed;
top:0;
left:0;
z-index: 3000;
background: white;

`

export {VCardButton, BizCardWrap}