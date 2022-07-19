import PropTypes from 'prop-types';
import * as S from './Navigation.style';

function Navigation({ link, title, color, children }) {
  return (
    <>
      <S.Navigate color={color} to={link}>
        {title}
      </S.Navigate>
      <h5>{children}</h5>
    </>
  );
}

Navigation.propTypes = {
  link: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

export default Navigation;
