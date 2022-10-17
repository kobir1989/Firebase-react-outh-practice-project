import React, { useCallback, useState, useEffect } from "react";

const AuthContext = React.createContext({});
let interval;
const calcRemainingTime = (expTime) => {
  const currentTime = new Date().getTime();
  const adjExpTime = new Date(expTime).getTime();
  const remainingTime = adjExpTime - currentTime;
  console.log(adjExpTime);
  return remainingTime;
};

const retriveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpDate = localStorage.getItem("expirationTime");
  const remainingTimes = calcRemainingTime(storedExpDate);
  if (remainingTimes <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    return null;
  }
  return {
    token: storedToken,
    duration: remainingTimes,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);
  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);

    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");
    if (interval) {
      clearTimeout(interval);
    }
  }, []);

  const getAuthToken = (token, expTime) => {
    setToken(token);

    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expTime);
    const remainingDuration = calcRemainingTime(expTime);
    interval = setTimeout(logoutHandler, remainingDuration);
  };

  useEffect(() => {
    if (tokenData) {
      interval = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextData = {
    idToken: token,
    isLoggedIn: userIsLoggedIn,
    login: getAuthToken,
    logout: logoutHandler,
  };

  return <AuthContext.Provider value={contextData}>{props.children}</AuthContext.Provider>;
};
export default AuthContext;
