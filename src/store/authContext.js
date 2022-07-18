import { createContext } from 'react';

const AuthContext = createContext({
  listData: [
    {
      link: '/',
      title: 'New user',
    },
    {
      link: '/categories',
      title: 'New category',
    },
  ],
});

AuthContext.displayName = 'AuthContext';
export default AuthContext;
