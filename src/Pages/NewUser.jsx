import React from 'react';
import Button from '../Components/Button/Button';
import Input from '../Components/Input/Input';
import Main from '../Components/Main/Main';

function NewUser() {
  return (
    <Main>
      <h2>Create new user</h2>
      <form>
        <Input
          name='password'
          labelText='Password'
          type='password'
          placeholder='Password'
        />
        <Input name='name' labelText='Name' type='name' placeholder='Name' />
        <Input
          name='last-name'
          labelText='last-name'
          type='last-name'
          placeholder='Last name'
        />
        <Input name='email' labelText='Email' type='email' placeholder='Email' />
        <Input name='age' labelText='age' type='age' placeholder='Age' />
        <Input name='gender' labelText='gender' type='gender' placeholder='Gender' />
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

export default NewUser;
