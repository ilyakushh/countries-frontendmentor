import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.scss";
import { IoMoonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <div className={styles.modeSwitcher}>
            <IoMoonOutline className={styles.icon} />
            <span>Dark mode</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
