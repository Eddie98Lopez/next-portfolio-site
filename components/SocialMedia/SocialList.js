import React from "react";

import SocialLink from "./SocialLink";
import styled from "styled-components";
import socialsNav from "./SocialsArray";

const List = styled.ul`
  display: flex;
  justify-content:center;
  flex-wrap:wrap;
  align-items: center;
  gap: 0.5rem;
  box-sizing: border-box;

  @media only screen and (max-width:768px){
    gap:2rem;
  }
`;

const SocialList = (props) => {
  const array = props.array || socialsNav
  return (
    <List className="social-list">
      {array.map((item) => (
        <SocialLink
          linkHeight={props.linkHeight}
          key={Math.random()*1000000000}
          to={item.href}
          className="social-link"
          fill={item.fill}
        >
          {<item.icon className="social-link" />}
        </SocialLink>
      ))}
    </List>
  );
};

export default SocialList;
