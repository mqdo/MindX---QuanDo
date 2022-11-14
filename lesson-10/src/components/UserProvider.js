import React, { useState, createContext, useContext } from "react";

export const UserContext = createContext(null);

export const useUser = () => useContext(UserContext).user;

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear()
  );

  const handleSetUser = (newUser) => {
    if (!newUser) return;
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser));
  };

  return (
    <UserContext.Provider value={{ user: user, setNewUser: handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
