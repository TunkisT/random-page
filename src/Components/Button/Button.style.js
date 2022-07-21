import styled from 'styled-components';

export const Button = styled.button`
  background: ${({ color }) => (color ? color : 'inherit')};
  border-radius: 0.3rem;
  border: 0;
  color: white;
  cursor: pointer;
  display: block;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  margin: 0 auto;
  padding: 0.6rem 3rem;
  text-transform: uppercase;
  :hover {
    color: black;
    transition: 0.5s;
  }
`;
