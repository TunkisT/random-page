import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Select.style';

function Select({ selectList, handleChange, placeholder }) {
  const onChange = (event) => {
    handleChange(event.target.value);
  };

  return (
    <S.Select required onChange={onChange} placeholder={placeholder}>
      {selectList.map((data) => (
        <option key={data.title} value={data.value}>
          {data.title}
        </option>
      ))}
    </S.Select>
  );
}

Select.propTypes = {
  selectList: PropTypes.array.isRequired,
  placeholder: PropTypes.node.isRequired,
};

export default Select;
