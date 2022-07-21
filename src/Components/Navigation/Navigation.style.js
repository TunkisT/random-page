import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigate = styled(Link)`
  background: ${({ color }) => (color ? color : 'grey')};
  border-radius: 0.3rem;
  border: 0;
  color: grey;
  display: block;
  font-size: 1rem;
  letter-spacing: 1px;
  margin: 0.6rem 0.2rem;
  padding: 0.3rem 2rem;
  text-align: center;
  text-decoration: 0;
  text-transform: uppercase;
  :hover {
    background: grey;
    color: white;
    transition: 0.5s;
  }
`;
