import React, { createContext, useContext, useState } from "react";
import Cookies from "universal-cookie";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const cookie = new Cookies();
  const authToken = cookie.get("token");

  const login = (user) => {
    setUser(user);
    setIsLoggedIn(true);
  };

  const logOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const contextValue = {
    user,
    isLoggedIn,
    login,
    logOut,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
