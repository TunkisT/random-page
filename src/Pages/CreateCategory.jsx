import React, { useContext, useState } from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import Main from '../Components/Main/Main';
import AuthContext from '../store/authContext';

function CreateCategory() {
  const authCtx = useContext(AuthContext);
  const [category, setCategory] = useState('');

  function formHandler(e) {
    e.preventDefault();
    authCtx.categoryData.push(category);
    console.log('authCtx ===', authCtx);
    
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    alert('Category created!');
  }

  return (
    <Main>
      <h2>Create new category</h2>
      <form onSubmit={formHandler}>
        <Input
          name='category'
          type='text'
          placeholder='Category'
          handleChange={(category) => setCategory(category)}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Main>
  );
}

export default CreateCategory;
