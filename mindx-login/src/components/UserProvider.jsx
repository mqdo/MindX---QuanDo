import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);
const SetUserContext = createContext(null);

export const useUser = () => {
  return useContext(UserContext);
};

export const useSetUser = () => {
  return useContext(SetUserContext);
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("mindx-user")) || {
      name: "",
      auth: false,
    }
  );

  useEffect(() => {
    localStorage.setItem("mindx-user", JSON.stringify(user));
  }, [user])

  return (
    <UserContext.Provider value={user}>
      <SetUserContext.Provider value={setUser}>
        {children}
      </SetUserContext.Provider>
    </UserContext.Provider>
  );
};

export default UserProvider;
