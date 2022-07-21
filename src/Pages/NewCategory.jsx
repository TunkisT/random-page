import React, { useContext, useState } from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import Main from '../Components/Main/Main';
import AuthContext from '../store/authContext';

function NewCategory({ title, getSubData }) {
  const authCtx = useContext(AuthContext);
  const [subcategory, setSubcategory] = useState([]);

  const data = authCtx.usersData.filter((item) => item.category === title);

  function formHandler(e) {
    e.preventDefault();
    addToState();
    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    alert('Subcategory created!');
  }

  function addToState() {
    const result = authCtx.listData.find((obj) => obj.title === title);
    result.subcategory.push(subcategory);
    getSubData(subcategory);
  }

  return (
    <Main>
      <h2 style={{ textTransform: ' uppercase ' }}>{title} category</h2>
      <form onSubmit={formHandler}>
        <Input
          name='category'
          type='text'
          placeholder='Subcategory'
          handleChange={(subcategory) => setSubcategory(subcategory)}
        />
        <Button color='#39ace7' type='submit'>
          create Subcategory
        </Button>
      </form>
      {data.length === 0 ? (
        <h2>No users in this category</h2>
      ) : (
        <h2>Active users ({data.length})</h2>
      )}
      {data.map((obj) => (
        <p style={{ textTransform: ' capitalize  ' }} key={obj.password}>
          {obj.name} {obj.lastName}
        </p>
      ))}
    </Main>
  );
}

export default NewCategory;
