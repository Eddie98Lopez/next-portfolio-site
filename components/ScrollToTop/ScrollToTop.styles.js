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
box-shadow: 3px 3px 3px rgba(0,0,0,.075);
transition: .3s ease-in;
display:grid;
place-content:center center;
cursor:pointer;


& svg{
    width: 100%;
    height: auto;
    margin:auto;
}
`

export default ScrollButton