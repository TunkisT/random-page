import React, { useContext, useEffect, useState } from 'react';
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
    });

    // Array.from(document.querySelectorAll('input')).forEach(
    //   (input) => (input.value = '')
    // );
    // alert('Category created!');
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
