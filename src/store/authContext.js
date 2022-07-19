import { createContext } from 'react';

const AuthContext = createContext({
  usersData: [],
  listData: [
    {
      link: '/server',
      title: 'Server',
      subcategory: [],
    },
    {
      link: '/web',
      title: 'Web',
      subcategory: [],
    },
  ],
});

AuthContext.displayName = 'AuthContext';
export default AuthContext;
