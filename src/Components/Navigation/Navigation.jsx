import PropTypes from 'prop-types';
import * as S from './Navigation.style';

function Navigation({ link, title, color, children }) {
  return (
    <>
      <S.Navigate color={color} to={link}>
        {title}
      </S.Navigate>
      <p>{children}</p>
    </>
  );
}

Navigation.propTypes = {
  children: PropTypes.node,
  link: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  color: PropTypes.node,
};

export default Navigation;
