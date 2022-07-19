import { createContext } from 'react';

const AuthContext = createContext({
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
