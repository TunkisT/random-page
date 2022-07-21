import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Main.style';

function Main({ children }) {
  return <S.Main>{children}</S.Main>;
}

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
