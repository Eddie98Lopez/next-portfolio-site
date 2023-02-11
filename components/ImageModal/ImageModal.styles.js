import styled from 'styled-components'
import ScrollButton from '../ScrollToTop/ScrollToTop.styles'

export const ModalWrapper = styled.div`
height: 100vh;
width: 100%;
position:fixed;
box-sizing:border-box;
top:0;
left:0;
margin:auto;
text-align:center;
z-index: 600000000000000000000000;
background: rgba(0,0,0,.65);
backdrop-filter:blur(7px);
display:${props => props.display === 'true' ? 'grid' : 'none'};

`

export const ModalContent = styled.div`
width: 100%;
height: 85vh;
margin:auto;

box-sizing: border-box;
display:grid;
gap:1rem;


& div:nth-child(2) {
    object-fit:contain;
    box-sizing:border-box;
    height:inherit;
    
& img{
    height:100%;
    width:auto;
    object-fit:contain;
}
}

`

export const CloseButton = styled.button`
position:absolute;
top:1.5rem;
right: 1.5rem;
color: white;
width: 1.5rem;
height: 1.5rem;
text-align:center;
border: white solid 2px;
background: none;
border-radius:300px;
`

export const TraverseButton = styled.button`
height:1.5rem;
width:1.5rem;
box-sizing:border-box;
padding:0;
margin:0;
border:none;
border-radius:200px;
color:white;
outline:none;
background:none;

& svg{
    fill:white;
    transform:rotate(${props=>props.rotate});
    height:inherit;
    width:auto;}`


export const Buttons = styled.div`
box-sizing: border-box;
width:100%;
display:flex;
gap: 2rem;
place-content:center center;
color:white;
font-family:sans-serif;
`

