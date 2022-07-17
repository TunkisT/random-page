import React, { useState } from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import Main from '../Components/Main/Main';

function NewUser() {
  const [userDetails, setUserDetails] = useState('');

  function formHandler(e) {
    e.preventDefault();
    console.log('userDetails ===', userDetails);
  }
  return (
    <Main>
      <h2>Create new user</h2>
      <form onSubmit={formHandler}>
        <Input
          name='password'
          labelText='Password'
          type='password'
          placeholder='Password'
          handleChange={(password) => setUserDetails({ ...userDetails, password })}
        />
        {userDetails.password && userDetails.password.length < 6 ? (
          <p>Password to short</p>
        ) : (
          ''
        )}
        <Input
          name='name'
          labelText='Name'
          type='text'
          placeholder='Name'
          handleChange={(name) => setUserDetails({ ...userDetails, name })}
        />
        {userDetails.name && userDetails.name.length < 3 ? <p>Name to short</p> : ''}
        <Input
          name='last-name'
          labelText='last-name'
          type='text'
          placeholder='Last name'
          handleChange={(lastName) => setUserDetails({ ...userDetails, lastName })}
        />
        {userDetails.lastName && userDetails.lastName.length < 3 ? (
          <p>Last name to short</p>
        ) : (
          ''
        )}
        <Input
          name='email'
          labelText='Email'
          type='email'
          placeholder='Email'
          handleChange={(email) => setUserDetails({ ...userDetails, email })}
        />
        <Input
          name='age'
          labelText='age'
          type='text'
          placeholder='Age'
          handleChange={(age) => setUserDetails({ ...userDetails, age })}
        />
        {userDetails.age && Number(userDetails.age) <= 0 ? (
          <p>Age can't be less then 1 year</p>
        ) : (
          ''
        )}
        <Input
          name='gender'
          labelText='gender'
          type='text'
          placeholder='Gender(male/female)'
          handleChange={(gender) => setUserDetails({ ...userDetails, gender })}
        />
        {userDetails?.gender &&
        userDetails.gender !== 'male' &&
        userDetails.gender !== 'female' ? (
          <p>Wrong gender entered</p>
        ) : (
          ''
        )}
        <Input
          name='category'
          labelText='category'
          type='text'
          placeholder='Category'
          handleChange={(category) => setUserDetails({ ...userDetails, category })}
        />
        {userDetails.category && userDetails.category.length < 4 ? (
          <p>Category name to short</p>
        ) : (
          ''
        )}
        <Button type='submit'>Submit</Button>
      </form>
    </Main>
  );
}

export default NewUser;
