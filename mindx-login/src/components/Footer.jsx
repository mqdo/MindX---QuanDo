import { styles } from "../style";

const Footer = () => {
  return (
    <div
      className={`absolute bottom-0 w-full ${styles.bar} ${styles.gridCenter} text-center bg-gray text-primary dark:bg-primary dark:text-gray`}
    >
      <p className={`font-light text-lg`}>
        <span className={`font-normal text-lg text-red`}>MindX</span> FullStack 2022
      </p>
    </div>
  );
};

export default Footer;
