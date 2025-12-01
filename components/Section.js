import styled from 'styled-components';

const Section = styled.section`
  width: ${(props) => props.width || '100%'};
  max-width: ${(props) => props.maxWidth || 'none'};
  padding: ${(props) => props.padding || '50px 8%'};
`;

export default Section;
