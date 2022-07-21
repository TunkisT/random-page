import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import Main from '../Components/Main/Main';

function CreateCategory({ getData }) {
  const [category, setCategory] = useState('');

  function formHandler(e) {
    e.preventDefault();

    getData({
      link: category,
      title: category,
      subcategory: [],
    });

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
        <Button color='#39ace7' type='submit'>create Category</Button>
      </form>
    </Main>
  );
}

export default CreateCategory;
