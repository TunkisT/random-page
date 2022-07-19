import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SubCategory = styled(Link)`
  @media screen and (max-width: 768px) {
    flex: 1 3rem;
  }
  border-radius: 0.3rem;
  border: 0;
  color: white;
  display: block;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 1px;
  margin: 0.2rem;
  padding: 0.6rem 2rem;
  text-align: center;
  text-decoration: 0;
  text-transform: uppercase;
  :hover {
    color: white;
    background: gray;
    transition: 0.5s;
  }
`;
