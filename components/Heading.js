import styled from 'styled-components';
import React from 'react';

const HeadingLayout = styled.div`

width:100%;
position:relative;
text-align:left;
display:grid;
place-content:left center;
z-index:-1;
transform:translateY(70px);
margin-bottom: 3rem;
overflow:hidden;  


& div{

width:100%;
color:white;
opacity:1;
font-size:10rem;
text-wrap:wrap;
}

& h2{
position:absolute;
z-index:1;
width:100%;
font-size:2rem;
align-self:center;
justify-self:center;
height:auto;



`;

const Heading = ({ string }) => {
  return (
    <HeadingLayout>
      <div className="display-type">{string}</div>
      <h2 className="subheading">{string}</h2>
    </HeadingLayout>
  );
};

export default Heading;
