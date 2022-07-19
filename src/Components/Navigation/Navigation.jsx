import PropTypes from 'prop-types';
import * as S from './Navigation.style';

function Navigation({ link, title, color }) {
  return (
    <S.Navigate color={color} to={link}>
      {title}
    </S.Navigate>
  );
}

Navigation.propTypes = {
  link: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

export default Navigation;
