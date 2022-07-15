import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Navigation.style';

function Navigation(props) {
  return (
    <div>
      <S.Navigation>
        <S.Navigate to='/'>new user</S.Navigate>
        <S.Navigate to='/categories'>new category</S.Navigate>
      </S.Navigation>
    </div>
  );
}

Navigation.propTypes = {};

export default Navigation;
