import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);

  const logOut = () => {
    setUserId(null);
  };

  return (
    <UserContext.Provider value={{ userId, setUserId, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
