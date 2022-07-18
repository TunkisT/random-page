import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './NavigationList.style';
import Navigation from '../Navigation/Navigation';
import AuthContext from '../../store/authContext';

function NavigationList(props) {
  const authCtx = useContext(AuthContext);

  return (
    <S.Navigation>
      {authCtx.listData.map((obj) => (
        <Navigation key={obj.title} link={obj.link} title={obj.title} />
      ))}
    </S.Navigation>
  );
}

NavigationList.propTypes = {};

export default NavigationList;
