import React from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import Main from '../Components/Main/Main';

function CreateCategory() {
  return (
    <Main>
      <h2>Create new category</h2>
      <form>
        <Input
          name='category'
          labelText='category'
          type='category'
          placeholder='Category'
        />
      </form>
      <Button type='submit'>Submit</Button>
    </Main>
  );
}

export default CreateCategory;
