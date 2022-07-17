import PropTypes from 'prop-types';
import * as S from './Input.style';

function Input({ name, type, placeholder, handleChange }) {
  const onChange = (event) => {
    handleChange(event.target.value);
  };
  return (
    <S.Form>
      <S.Input
        type={type}
        id={name}
        placeholder={placeholder}
        required
        onChange={onChange}
      />
    </S.Form>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.node.isRequired,
  placeholder: PropTypes.node.isRequired,
};

export default Input;
