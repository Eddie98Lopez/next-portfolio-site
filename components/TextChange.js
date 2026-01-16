import React, { useState, useEffect } from 'react';
import { Typewriter } from 'motion-plus/react';
import styled from 'styled-components';

const StyledP = styled.div`
  box-sizing: border-box;
  width: 100%;

  & .typewriter {
    text-transform: uppercase;
    font-style: normal;
    width: 100%;
    font-family: var(--display-type);
    letter-spacing: 5px;
    font-variation-settings: 'wght' 600;
    text-wrap: wrap;
    font-size: clamp(5rem, calc(100vw * 160 / 1440), 10rem);

    @media only screen and (max-width: 768px) {
      text-align: left;
      letter-spacing: -6px;
      font-size: 7rem;
    }

    @media only screen and (max-width: 425px) {
      font-size: 3.2rem;
      letter-spacing: -3px;
    }
  }
`;

const titles = ['designer.', 'developer.', 'engineer.'];

const Typewrite = () => {
  const [text, setText] = useState(titles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentIndex = titles.indexOf(text);

      if (currentIndex + 1 > titles.length) {
        setText(titles[0]);
      } else {
        setText(titles[currentIndex + 1]);
      }
    }, 5000);

    // cleanup when text changes or component unmounts
    return () => clearInterval(interval);
  }, [text]);

  return (
    <StyledP>
      <Typewriter as="h1" speed={'slow'} textClassName="typewriter">
        {text}
      </Typewriter>
    </StyledP>
  );
};

export default Typewrite;
