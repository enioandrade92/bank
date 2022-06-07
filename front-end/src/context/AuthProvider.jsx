import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AuthContext from './AuthContext';
import { userSignIn, userSignUp } from '../services/resources/user'

export default function AuthProvider({children}) {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser({
      id: 0,
      email: '',
      firtName: '',
      lastName: '',
      accountNumber: 0,
      accountDigit: 0,
      wallet: 0,
      token: '',
    });
  }, []);

  async function authSingIn(dataLogin) {
    const { data } = await userSignIn(dataLogin);
    console.log(data);
    if (data.message) return data.message;
    localStorage.setItem('@Bank:Token', data.token)
    setUser(...data);
    return data;
  }

  async function authSingUp(dataCreate) {
    const { data } = await userSignUp(dataCreate);
    if (data.message) return data.message;
    localStorage.setItem('@Bank:Token', data.token)
    setUser(...data);
    return data;
  }

  return (
    <AuthContext.Provider value={{user, setUser, authSingIn, authSingUp}}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
