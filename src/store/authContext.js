import { createContext } from 'react';

const AuthContext = createContext({
  categoryData: [],
});

AuthContext.displayName = 'AuthContext';
export default AuthContext;
