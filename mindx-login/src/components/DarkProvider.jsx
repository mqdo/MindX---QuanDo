import { createContext, useContext, useState, useEffect } from "react";

const DarkContext = createContext(null);
const SetDarkContext = createContext(null);

export const useDark = () => {
  return useContext(DarkContext);
};

export const useSetDark = () => {
  return useContext(SetDarkContext);
};

const DarkProvider = ({ children }) => {
  const [dark, setDark] = useState(localStorage.getItem("dark-theme") || "light");

  useEffect(() => {
    localStorage.setItem("dark-theme", dark);

    const root = document.getElementsByTagName("html")[0];
    root.setAttribute("class", dark);
  }, [dark]);

  return (
    <DarkContext.Provider value={dark}>
      <SetDarkContext.Provider value={setDark}>
        {children}
      </SetDarkContext.Provider>
    </DarkContext.Provider>
  );
};

export default DarkProvider;
