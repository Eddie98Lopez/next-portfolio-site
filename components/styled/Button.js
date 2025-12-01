import styled from 'styled-components';

export const Button = styled.button`
  display: inline-flex;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  color: white;
  cursor: pointer;
  border: var(--slate-900, #0f172a) solid 1px;
  font-family: 'Cascadia Code', sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  font-size: 1rem;

  border-radius: 0.375rem;
  background: var(--slate-900, #0f172a);
  transition: all 0.3s ease;

  &:hover {
    border-radius: 0.375rem;
    background: grey;

    border: lightgrey solid 1px;
  }
`;

export default Button;
