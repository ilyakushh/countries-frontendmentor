import styles from "../../../styles/HomePage/CountryList/CountryItem.module.scss";

const CountryItem = ({ flag, name, population, region, capital }) => {
  return (
    <div className={styles.countryItem}>
      <div className={styles.image}>
        <img src={flag} alt="" />
      </div>
      <div className={styles.description}>
        <h3>{name}</h3>
        <ul className={styles.details}>
          <li>
            <span>Population: </span>
            {population.toLocaleString()}
          </li>
          <li>
            <span>Region: </span>
            {region}
          </li>
          <li>
            <span>Capital: </span>
            {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryItem;
