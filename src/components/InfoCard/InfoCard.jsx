import styles from "../../styles/InfoCard.module.scss";

const InfoCard = () => {
  return (
    <div className={styles.infoCard}>
      <img src="https://flagcdn.com/fr.svg" alt="flag" />
      <div className={styles.information}>
        <h3>Belgium</h3>
        <ul>
          <li>
            <span>Native Name: </span>Belgie
          </li>
          <li>
            <span>Population: </span>11,319,511
          </li>
          <li>
            <span>Region: </span>Europe
          </li>
          <li>
            <span>Sub region: </span>Western Europe
          </li>
          <li>
            <span>Capital: </span>Brussels
          </li>
          <li>
            <span>Top Level Domain: </span>.be
          </li>
          <li>
            <span>Currencies: </span>Euro
          </li>
          <li>
            <span>Languages: </span>Dutch, French, German
          </li>
        </ul>
        <p>
          <span>Border Countries:</span>
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
