import { Link } from "react-router-dom";
import styles from "../../styles/Header.module.scss";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setDarkTheme } from "../../reducers/darkModeSlice";

const Header = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.darkMode.darkTheme);
  const toggleDarkMode = () => {
    dispatch(setDarkTheme());
  };
  return (
    <div
      className={
        darkTheme ? `${styles.header} ${styles.darkMode}` : styles.header
      }
    >
      <div className="container">
        <div className={styles.headerWrapper}>
          <Link to="/">
            <h1>Where in the world?</h1>
          </Link>
          <div className={styles.modeSwitcher} onClick={toggleDarkMode}>
            {darkTheme ? (
              <IoSunnyOutline className={styles.icon} />
            ) : (
              <IoMoonOutline className={styles.icon} />
            )}
            {darkTheme ? <span>Light Mode</span> : <span>Dark Mode</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
