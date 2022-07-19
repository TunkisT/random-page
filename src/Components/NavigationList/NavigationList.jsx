import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import * as S from './NavigationList.style';
import Navigation from '../Navigation/Navigation';
import AuthContext from '../../store/authContext';
import SubCategory from '../SubCategory/SubCategory';

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
  const [result, setResult] = useState(authCtx.listData);

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
        >
          {obj.subcategory.map((item) => (
            <SubCategory link={`${obj.link}/${item}`} key={item}>
              {item}
            </SubCategory>
          ))}
        </Navigation>
      ))}
      {}
    </S.Navigation>
  );
}

NavigationList.propTypes = {};

export default NavigationList;
