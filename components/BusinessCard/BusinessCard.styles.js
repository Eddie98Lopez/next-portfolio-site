import styled from "styled-components";

const VCardButton = styled.a`
color: white;
background: black;
box-sizing:border-box;
text-align: center;
border-radius: 5px;
text-transform: uppercase;
font-size: 1rem;
letter-spacing: 3px;
width: 90%;
padding: 1rem;
text-decoration:none;
`

const BizCardWrap = styled.section`
box-sizing: border-box;
padding: 20% 0;
font-family: acumin-pro, sans-serif;
font-weight: 500;
font-size:1.5rem;
text-decoration:none;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap:2.5rem;
height 100vh;
position: fixed;
top:0;
left:0;
z-index: 3000;
background: white;
overflow:scroll;

& h1{
    font-size: 2rem;
    font-weight: 700;

};

& .name{
    text-align:center;
    display:flex;
    flex-direction:column;
    gap:.75rem;
}

& h2{
    font-size: 1rem;
    
};

.bizCardImg{
    display: grid;
    place-content: center center;
    clip-path: circle(50% at center);
    object-fit: cover;
    width: 13rem;
    height:13rem;

}

& img{
    object-fit: cover;
    width: inherit;
    height: auto;

}

`

export {VCardButton, BizCardWrap}