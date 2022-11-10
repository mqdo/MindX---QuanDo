import { Link } from "react-router-dom";

import { useUser, useSetUser } from "./UserProvider";
import { useLang, useSetLang } from "./LangProvider";
import { useDark, useSetDark } from "./DarkProvider";
import { langs } from "../constants/languages";
import { styles } from "../style";
import moon from "../assets/moon.svg";
import sun from "../assets/sun.svg";

const NavBar = () => {
  const user = useUser();
  const setUser = useSetUser();

  const lang = useLang();
  const setLang = useSetLang();

  const dark = useDark();
  const setDark = useSetDark();

  const changeLanguage = (e) => {
    setLang(e.target.value);
  };

  const changeDark = () => {
    if (dark === "dark") {
      setDark("light");
    } else {
      setDark("dark");
    }
  }

  const logout = () => {
    setUser({
      name: "",
      auth: false,
    });
  };

  return (
    <header
      className={`bg-primary ${styles.bar} ${styles.gridCenter} text-secondary`}
    >
      <nav
        className={`mx-auto w-[90%] sm:w-[80%] lg:w-[calc(100%-205px)] ${styles.flexCenter}`}
      >
        <div className={`${styles.flexCenter}`}>
          <Link to="/">
            <h1 className={styles.header}>
              Mind<span className="text-red">X</span>
            </h1>
          </Link>
          <img src={dark ? moon : sun} alt="dark-mode" className="ml-4 w-[20px] cursor-pointer" onClick={changeDark} />
        </div>
        <div className={`${styles.flexCenter}`}>
          <select
            name="language-long"
            id="language-long"
            aria-label="language"
            className={`hidden md:block ${styles.select}`}
            onChange={changeLanguage}
            value={lang}
          >
            <option value="en">English</option>
            <option value="vi">Tiếng Việt</option>
          </select>
          <select
            name="language-short"
            id="language-short"
            aria-label="language"
            className={`md:hidden ${styles.select}`}
            onChange={changeLanguage}
            value={lang}
          >
            <option value="en">EN</option>
            <option value="vi">VI</option>
          </select>
          {user.auth ? (
            <Link to="/" onClick={logout}>
              <p className={styles.subHeader}>{langs[lang]["navbar.logout"]}</p>
            </Link>
          ) : (
            <Link to="/login">
              <p className={styles.subHeader}>{langs[lang]["navbar.login"]}</p>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
