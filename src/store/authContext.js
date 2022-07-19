import { createContext } from 'react';

const AuthContext = createContext({
  usersData: [],
  listData: [
    {
      link: '/Server',
      title: 'Server',
    },
    {
      link: '/web',
      title: 'Web',
    },
  ],
});

AuthContext.displayName = 'AuthContext';
export default AuthContext;
