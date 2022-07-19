import React from 'react';
import PropTypes from 'prop-types';
import * as S from './SubCategory.style';

function SubCategory({ children, link }) {
  return <S.SubCategory to={link}>{children}</S.SubCategory>;
}

SubCategory.propTypes = {};

export default SubCategory;
