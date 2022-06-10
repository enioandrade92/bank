import { useState } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import { userSignIn, userSignUp, userMe } from '../services/resources/user';

export default function AuthProvider({children}) {
  const [user, setUser] = useState({});

  // enio@gmail.com
  // --adm2@21!!--

  async function getCurrentUser() {
    const userData = await userMe();
    if (userData.message) return userData.message;
    setUser(userData);    
    return userData;
  }

  async function authSingIn(dataLogin) {
    const token  = await userSignIn(dataLogin);
    if (token.message) return token.message;
    
    localStorage.setItem('@Bank:Token', token.token)
    const userData = await getCurrentUser();
    return userData;
  }

  async function authSingUp(dataCreate) {
    const token  = await userSignUp(dataCreate);
    
    if (token.message) return token.message;

    localStorage.setItem('@Bank:Token', token.token)
    
    const userData = await getCurrentUser();
    return userData;
  }

  return (
    <AuthContext.Provider value={{user, setUser, authSingIn, authSingUp, getCurrentUser}}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
