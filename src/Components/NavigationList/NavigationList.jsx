import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import * as S from './NavigationList.style';
import Navigation from '../Navigation/Navigation';
import AuthContext from '../../store/authContext';

const pageData = [
  {
    link: '/',
    title: 'New user',
  },
  {
    link: '/categories',
    title: 'New category',
  },
];

function NavigationList(props) {
  const authCtx = useContext(AuthContext);

  return (
    <S.Navigation>
      {pageData.map((obj) => (
        <Navigation color='#ede' key={obj.title} link={obj.link} title={obj.title} />
      ))}
      {authCtx.listData.map((obj) => (
        <Navigation
          color='#e7a1e7'
          key={obj.title}
          link={obj.link}
          title={obj.title}
        />
      ))}
    </S.Navigation>
  );
}

NavigationList.propTypes = {};

export default NavigationList;
