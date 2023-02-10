import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { ImageContainer } from "../components/Gallery/GalleryThumb.styles";
import SocialList from "../components/SocialMedia/SocialList";
import Head from 'next/head'

const AboutMe = styled.section`
  width: 100%;
  min-height: 70vh;
  padding-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  & .bio {
    & h2 {
      font-weight: 800;
      font-size: 1.5rem;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
    text-align: center;
    padding-top: 3rem;
    padding-left: 7rem;
    line-height: 1.15rem;
    gap: 2rem;
    color: grey;
    display: flex;
    flex-direction: column;
    place-content: center center;
    align-items: center;
    font-family: acumin-pro-condensed;

    & ul {
      width: min-content;
    }
  }

  & .photo-container {
    width: 100%;
    height: 100%;
    display: grid;
    place-content: center center;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 100%;
    gap: 2rem;
    grid-template-areas:
      "p"
      "bio";

    & .bio {
      grid-area: bio;
      padding: 0;

      & p {
        padding: 0 5rem;
      }
    }

    & .photo-container {
      grid-area: p;
      padding: 0;
    }
  }

  @media only screen and (max-width: 425px) {
    & .bio {
      & p {
        font-size: 1.5rem;
        line-height: 1.75rem;
        padding: 0 2rem;
      }
    }
  }
`;

const Profile = styled(ImageContainer)`
  pointer-events: none;

  width: 30rem;
  height: 30rem;
  display: grid;
  place-content: center center;
  clip-path: circle(15rem at center);

  & img {
    object-position: top center;
  }

  @media only screen and (max-width: 768px) {
    width: 20rem;
    height: 20rem;
    clip-path: circle(10rem at center);
  }
`;

const About = (props) => {
  return (
    <>
    <Head>
      <title>About Me | Eddie Lopez | Graphic Designer | Illustrator | Fresno CA </title>
    </Head>
    <AboutMe>
      <div className="bio">
        <h2>About Me</h2>

        <p>
          I’m a Cental Valley based designer specializing in graphic design, illustration, and web-development. I can do anything from logos to website design. Coding to book cover illustrations.  I love working on branding and web projects for local, small businesses. I can hold my own as a designer and a web developer separately but love working on projects where I can do both.
        </p>
        <SocialList />
      </div>
      <div className="photo-container">
        <Profile>
          <Image
            layout="fill"
            src="/aboutMe.jpg"
            alt="about me"
            priority={true}
          />
        </Profile>
      </div>
    </AboutMe>
    </>
  );
};

export default About;
