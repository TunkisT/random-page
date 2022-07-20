import React, { useContext } from 'react';
import Main from '../Components/Main/Main';
import AuthContext from '../store/authContext';

function NewSubCategory({ title }) {
  const authCtx = useContext(AuthContext);

  return (
    <Main>
      <h2 style={{ textTransform: ' uppercase ' }}>{title} subcategory</h2>
    </Main>
  );
}

export default NewSubCategory;
