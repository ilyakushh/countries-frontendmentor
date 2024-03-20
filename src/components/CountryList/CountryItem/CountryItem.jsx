import { useSelector } from "react-redux";
import styles from "../../../styles/HomePage/CountryList/CountryItem.module.scss";

const CountryItem = ({ flag, name, info }) => {
  const darkTheme = useSelector((state) => state.darkMode.darkTheme);

  return (
    <div
      className={
        darkTheme
          ? `${styles.darkMode}  ${styles.countryItem}`
          : styles.countryItem
      }
    >
      <div className={styles.image}>
        <img src={flag} alt="" />
      </div>
      <div className={styles.description}>
        <h3>{name}</h3>
        <ul className={styles.details}>
          {info.map((item) => (
            <li key={item.title}>
              <span>{`${item.title}: `}</span>
              {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CountryItem;
