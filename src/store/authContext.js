import { createContext } from 'react';

const AuthContext = createContext({
  usersData: [],
  listData: [
    {
      link: '/server',
      title: 'Server',
      subcategory: ['one', 'two'],
    },
    {
      link: '/web',
      title: 'Web',
      subcategory: ['three', 'four'],
    },
  ],
});

AuthContext.displayName = 'AuthContext';
export default AuthContext;
