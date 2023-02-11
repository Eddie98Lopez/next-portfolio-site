import styled from 'styled-components'

export const ModalWrapper = styled.div`
height: 100vh;
width: 100%;
position:fixed;
top:0;
left:0;
z-index: 600000000000000000000000;
background: rgba(0,0,0,.5);
backdrop-filter:blur(3px);
display:grid;
place-content: center center;
`

export const ModalContent = styled.div`
width: 90%;
height: 90vh;
background: black;
box-sizing: border-box;


& div {
    object-fit:contain;
    
    height:inherit;
& img{
    height:100%;
    width:auto;
    object-fit:contain;
}
}

`

