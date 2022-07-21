import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Container.style';
import Main from '../Main/Main';
import NavigationList from '../NavigationList/NavigationList';

function Container({ children }) {
  return (
    <S.Container>
      <S.SectionOne>
        <NavigationList />
      </S.SectionOne>
      <S.SectionTwo>
        {children}
        <Main />
      </S.SectionTwo>
    </S.Container>
  );
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
