import { createContext, useContext, useState, useEffect } from "react";

const LangContext = createContext(null);
const SetLangContext = createContext(null);

export const useLang = () => {
  return useContext(LangContext);
};

export const useSetLang = () => {
  return useContext(SetLangContext);
};

const LangProvider = ({ children }) => {
  const [lang, setLang] = useState(localStorage.getItem("mindx-lang") || "en");

  useEffect(() => {
    localStorage.setItem("mindx-lang", lang);
  }, [lang])

  return (
    <LangContext.Provider value={lang}>
      <SetLangContext.Provider value={setLang}>
        {children}
      </SetLangContext.Provider>
    </LangContext.Provider>
  );
};

export default LangProvider;
