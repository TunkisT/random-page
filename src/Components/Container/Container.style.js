import styled from 'styled-components';

export const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  min-height: 31.75rem;
  @media screen and (max-width: 768px) {
    display: block;
    min-height: 31.75rem;
    margin: 0;
  }
`;
export const SectionOne = styled.div`
  background: #a1a5a8;
  width: 35%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0.3rem 0;
  }
`;
export const SectionTwo = styled.div`
  background: #eee;
  width: 65%;
  @media screen and (max-width: 768px) {
    width: 100%;
    min-height: 10rem;
    padding: 0.3rem 0;
  }
`;
