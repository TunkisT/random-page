import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  min-height: 31.75rem;
  @media screen and (max-width: 768px) {
    display: block;
    margin: 0;
    min-height: 31.75rem;
  }
`;
export const SectionOne = styled.div`
  background: #a1a5a8;
  width: 35%;
  @media screen and (max-width: 768px) {
    padding: 0.3rem 0;
    width: 100%;
  }
`;
export const SectionTwo = styled.div`
  background: #eee;
  text-align: center;
  width: 65%;
  @media screen and (max-width: 768px) {
    min-height: 10rem;
    padding: 0.3rem 0;
    width: 100%;
  }
`;
