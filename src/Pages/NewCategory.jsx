import React, { useContext, useEffect, useState } from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import Main from '../Components/Main/Main';
import AuthContext from '../store/authContext';

function NewCategory({ title }) {
  const authCtx = useContext(AuthContext);
  const [subcategory, setSubcategory] = useState([]);
  const [subArr, setSubArr] = useState(subcategory);

  useEffect(() => {
    addToState();
  }, [subArr]);

  function formHandler(e) {
    e.preventDefault();
    setSubArr((prevState) => [...prevState, subcategory]);
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    alert('Subcategory created!');
  }

  function addToState() {
    const result = authCtx.listData.find((obj) => obj.title === title);
    result.subcategory = subArr;
  }

  return (
    <Main>
      <h2>{title} category</h2>
      <form onSubmit={formHandler}>
        <Input
          name='category'
          type='text'
          placeholder='Subcategory'
          handleChange={(subcategory) => setSubcategory(subcategory)}
        />
        <Button type='submit'>create Subcategory</Button>
      </form>
    </Main>
  );
}

export default NewCategory;
