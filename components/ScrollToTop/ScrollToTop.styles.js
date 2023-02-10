import styled from 'styled-components'



const ScrollButton = styled.div`
position:fixed;
z-index: 4;
bottom: 2rem;
right: 2rem;
width: 40px;
height: 40px;
border-radius: 200px;
border: 1px solid lightgrey;
background:white;
box-shadow: 2px 2px 5px rgba(0,0,0,.2);
transition: .3s ease-in;
display:grid;
place-content:center center;
cursor:pointer;
opacity:${props=>props.scroll > 350 ? '1' : '0'};


& svg{
    width: 100%;
    height: auto;
    margin:auto;
    fill: rgba(0,0,0,.2);
    transition: .2s ease-in;
}

&:hover{
    & svg{
        fill: rgba(0,0,0,.6);
    }
}
`

export default ScrollButton