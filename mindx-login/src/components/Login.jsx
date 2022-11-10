import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useUser, useSetUser } from "./UserProvider";
import { useLang } from "./LangProvider";
import { langs } from "../constants/languages";
import { styles } from "../style";

const Login = () => {
  const user = useUser();
  const setUser = useSetUser();

  const lang = useLang();

  const navigate = useNavigate();

  useEffect(() => {
    if (user.auth) {
      navigate("/");
    }
  }, [user]);

  const handleLogin = (e) => {
    e.preventDefault();
    setUser({
      name: e.target[0].value,
      auth: true,
    });
    navigate("/");
  };

  return (
    <section className={`${styles.mainContent} ${styles.gridCenter} bg-white`}>
      <form
        onSubmit={handleLogin}
        className={`mx-auto ${styles.flexCol} justify-between ${styles.card}`}
      >
        <label
          htmlFor="user"
          className={`${styles.cardLabel} ${styles.subHeader} ${styles.gridCenter} justify-center`}
        >
          {`${langs[lang]["login.label"]}`}
        </label>
        <input
          type="text"
          name="user"
          id="user"
          className={`${styles.cardInput}`}
          placeholder={`${langs[lang]["login.placeholder"]}`}
        />
        <button
          type="submit"
          className={`${styles.cardButton} ${styles.paragraph}`}
        >
          {`${langs[lang]["login.label"]}`}
        </button>
      </form>
    </section>
  );
};

export default Login;
