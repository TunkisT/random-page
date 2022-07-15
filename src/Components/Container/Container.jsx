import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.style';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';

function Container(props) {
  return (
    <S.Container>
      <S.SectionOne>
        <Navigation></Navigation>
      </S.SectionOne>
      <S.SectionTwo>
        <Main></Main>
      </S.SectionTwo>
    </S.Container>
  );
}

Container.propTypes = {};

export default Container;
