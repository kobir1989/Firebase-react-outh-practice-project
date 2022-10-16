import React, { useState } from "react";

const AuthContext = React.createContext({});

export const AuthContextProvider = (props) => {
  const initalToken = localStorage.getItem("token");
  const [token, setToken] = useState(initalToken);
  const userIsLoggedIn = !!token;
  console.log(userIsLoggedIn);
  const getAuthToken = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  const contextData = {
    idToken: token,
    isLoggedIn: userIsLoggedIn,
    login: getAuthToken,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
