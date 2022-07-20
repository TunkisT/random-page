import React, { useContext, useState } from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import Main from '../Components/Main/Main';
import Select from '../Components/Select/Select';
import AuthContext from '../store/authContext';

const genderData = [
  {
    value: 'Male',
    title: 'Male',
  },
  {
    value: 'Female',
    title: 'Female',
  },
];

function NewUser() {
  const [userDetails, setUserDetails] = useState('');
  const authCtx = useContext(AuthContext);

  function formHandler(e) {
    e.preventDefault();
    console.log('userDetails ===', userDetails);
    authCtx.usersData = [...authCtx.usersData, userDetails];
    console.log('authCtx.usersData ===', authCtx.usersData);

    Array.from(document.querySelectorAll('input')).forEach(
      (input) => (input.value = '')
    );
    alert('User created!');
  }

  return (
    <Main>
      <h2>Create new user</h2>
      <form onSubmit={formHandler}>
        <Input
          name='password'
          type='password'
          initialValue=''
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
          type='text'
          placeholder='Name'
          handleChange={(name) => setUserDetails({ ...userDetails, name })}
        />
        {userDetails.name && userDetails.name.length < 3 ? <p>Name to short</p> : ''}
        <Input
          name='last-name'
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
          type='email'
          placeholder='Email'
          handleChange={(email) => setUserDetails({ ...userDetails, email })}
        />
        <Input
          name='age'
          type='text'
          placeholder='Age'
          handleChange={(age) => setUserDetails({ ...userDetails, age })}
        />
        {userDetails.age && Number(userDetails.age) <= 0 ? (
          <p>Age can't be less then 1 year</p>
        ) : (
          ''
        )}
        <Select
          selectList={genderData}
          placeholder='Gender'
          handleChange={(gender) => setUserDetails({ ...userDetails, gender })}
        />
        <Select
          selectList={authCtx.listData}
          placeholder='Category'
          handleChange={(category) => setUserDetails({ ...userDetails, category })}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </Main>
  );
}

export default NewUser;
