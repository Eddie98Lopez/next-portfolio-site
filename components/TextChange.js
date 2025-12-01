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
    font-family: 'GrockMarker', sans-serif;
    letter-spacing: -10px;
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

const Typewrite = () => {
  const [text, setText] = useState('designer');

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prev) => (prev === 'designer' ? 'developer' : 'designer'));
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
