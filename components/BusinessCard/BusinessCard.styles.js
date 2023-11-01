import styled from "styled-components";

const VCardButton = styled.a`
color: white;
background: black;
box-sizing:border-box;
text-align: center;
border-radius: 5px;
width: 90%;
padding: 1rem;
text-decoration:none;
`

const BizCardWrap = styled.section`
font-family: acumin-pro, sans-serif;
font-weight: 500;
font-size:1.5rem;
text-decoration:none;
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

& h1{
    font-size: 2rem;
    font-weight: 700;

};

& h2{
    font-size: 1rem;
    
};

.bizCardImg{
    display: grid;
    place-content: center center;
    border-radius: 500px;
    overflow:hidden;
    object-fit: cover;
    width: 15rem;
    height:15rem;
}

& img{
    object-fit: cover;
    width: inherit;
    height: auto;

}

`

export {VCardButton, BizCardWrap}