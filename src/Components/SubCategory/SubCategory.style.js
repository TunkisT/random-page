import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SubCategory = styled(Link)`
  border-radius: 0.3rem;
  border: 0;
  color: white;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0.1rem;
  padding: 0.6rem 0.5rem;
  text-align: center;
  text-decoration: 0;
  text-transform: uppercase;
  :hover {
    background: gray;
    color: white;
    transition: 0.5s;
  }
`;
