import React from "react";

import SocialLink from "./SocialLink";
import styled from "styled-components";
import socialsNav from "./SocialsArray";

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-sizing: border-box;

  @media only screen and (max-width:768px){
    gap:2rem;
  }
`;

const SocialList = (props) => {
  return (
    <List className="social-list">
      {socialsNav.map((item) => (
        <SocialLink
          linkHeight={props.linkHeight}
          key={socialsNav.indexOf(item)}
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
