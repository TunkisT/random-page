import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.style';

function Button({ children, color, type, onClick }) {
  return (
    <S.Button color={color} type={type} onClick={onClick}>
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['submit', 'button']).isRequired,
};

export default Button;
