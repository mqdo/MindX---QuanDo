import DarkProvider from "./DarkProvider";
import LangProvider from "./LangProvider";
import UserProvider from "./UserProvider";

const ProviderContainer = ({ children }) => {
  return (
    <UserProvider>
      <LangProvider>
        <DarkProvider>{children}</DarkProvider>
      </LangProvider>
    </UserProvider>
  );
};

export default ProviderContainer;
