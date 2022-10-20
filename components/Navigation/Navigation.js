import React, { useState, useEffect } from "react";
import { MobileContext } from "./MobileContext";
import LinksList from "./LinksList";
import styled from "styled-components";
import { useRouter } from "next/router";
import Logo from "../Logo";
import Hamburger from "./Hamburger";
import SocialList from "../SocialMedia/SocialList";
import Link from "next/link";

function scrollFunction() {
  const nav = document.getElementById("navbar");
  const logo = document.getElementById("nav-logo");
  if (
    document.body.scrollTop > 50 ||
    document.documentElement.scrollTop > 50
  ) {
    nav.style.padding = ".25rem 5% .5rem 5%";
    nav.style.boxShadow = "3px 3px 5px rgba(0,0,0,.1)";
  
    logo.style.height = "2.5rem";
  
  } else {
   
    nav.style.padding = "3rem 5%";
    nav.style.boxShadow = "3px 3px 3px rgba(0,0,0,0)";
    logo.style.height = "75px";
  }
}

const Nav = styled.nav`
  width: 100%;
  height: auto;
  box-sizing: border-box;
  position: sticky;
  background: white;
  top: 0;
  z-index: 500;
  padding: 3rem 5%;
  transition: padding 0.3s ease-in-out;
  display: flex;
  align-items: center;
  gap: 1.75rem;

  & #nav-logo {
    transition: all 0.3s ease-in-out;
    height: 75px;
    width: auto;
  }

  & div {
    box-sizing: border-box;
  }
  & .active {
    transition: all 0.2s ease-in-out;
    color: black;
    font-weight: 900;
    border-bottom: 3px solid coral;
  }

  & .social-list {
    position: absolute;
    box-sizing: border-box;
    right: 5%;
    top: 50%;
    transform: translate(-5%, -50%);
  }

  & .expanded {
    padding: 25rem 5% 0.5rem 5%;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    & #nav-logo {
      height: 2.5rem;
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;
    & .mobile-nav {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: all 0.3s ease-in-out;
      margin-bottom: ${(props) => (props.mobile ? ".5rem" : "0")};
    }

    & .social-list {
      display: none;
    }
  }
`;

const Navigation = (props) => {
  const [mobile, setMobile] = useState(false);

  const { asPath } = useRouter();

  useEffect(() => {
    setMobile(false);
  }, [asPath]);

  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  return (
    <MobileContext.Provider value={{ mobile, setMobile }}>
      <Nav id="navbar" mobile={mobile}>
        <div className="mobile-nav">
          <Link href="/">
            <Logo id="nav-logo" />
          </Link>
          <Hamburger />
        </div>

        <LinksList />
        <SocialList />
      </Nav>
    </MobileContext.Provider>
  );
};

export default Navigation;
