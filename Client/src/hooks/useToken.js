import { useState } from 'react';
import { loginUser } from '../components/login/Login';

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken
  };

  const [token, setToken] = useState(getToken());

  const saveToken = userToken => {
    localStorage.setItem('token', JSON.stringify(userToken));
    setToken(userToken);
  };
  const deleteToken = () => {
      localStorage.removeItem('token');
      setToken();
  }
  const renewToken = (token,email)=>{
    loginUser({email},"PUT").then((result)=>{
        setToken(result)
        localStorage.setItem('token', JSON.stringify(result));

        return result
    })
}
  return {
    
    setToken: saveToken,
    clearToken: deleteToken,
    renewToken: renewToken,
    getToken: getToken,
    token
  }


}