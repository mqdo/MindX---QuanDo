import { Link } from "react-router-dom";

import { useUser } from "./UserProvider";
import { useLang } from "./LangProvider";
import { langs } from "../constants/languages";
import { styles } from "../style";
import bus from "../assets/bus.svg";

const Welcome = () => {
  const user = useUser();
  const lang = useLang();

  return (
    <section
      className={`${styles.mainContent} ${styles.flexCol} justify-evenly text-center`}
    >
      <h2 className={`${styles.welcome} mt-12`}>
        {user.auth ? `${langs[lang]["welcome.greeting"]} ${user.name}` : `${langs[lang]["welcome.greeting"]}`}
      </h2>
      <img src={bus} alt="welcome-bus" className={`w-[250px] ss:w-[300px] mx-auto`} />
      <p className={`${styles.paragraph}`}>
        {`${langs[lang]["welcome.invite"]} `}
        <a
          href="https://mindx.edu.vn/"
          target="_blank"
          className="text-red text-xl font-medium"
        >
          MindX!
        </a>
      </p>
      {user.auth ? null : (
        <p className={`${styles.paragraph}`}>
          {`${langs[lang]["welcome.option"]} `}
          <Link to="/login" className="text-primary text-xl font-medium">
            {`${langs[lang]["login.label"]}`}
          </Link>
        </p>
      )}
    </section>
  );
};

export default Welcome;
