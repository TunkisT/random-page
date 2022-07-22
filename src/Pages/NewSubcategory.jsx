import React from 'react';
import Main from '../Components/Main/Main';

function NewSubCategory({ title }) {
  return (
    <Main>
      <h2 style={{ textTransform: ' uppercase ' }}>{title} subcategory</h2>
    </Main>
  );
}

export default NewSubCategory;
