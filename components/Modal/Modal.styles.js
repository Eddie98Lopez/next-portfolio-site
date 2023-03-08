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