import styles from "../../styles/DetailsPage/InfoCard.module.scss";
import { Link } from "react-router-dom";

const InfoCard = ({
  name,
  population,
  region,
  subregion,
  capital,
  tld,
  currencies,
  languages,
  flags,
  borderCountries,
}) => {
  const countryCard = {
    "Native Name": name.nativeName.official,
    Population: population,
    Region: region,
    "Sub region": subregion,
    Capital: capital,
    "Top Level Domain": tld,
    Currencies: currencies.join(", "),
    Languages: languages.join(", "),
  };

  return (
    <div className={styles.infoCard}>
      <img src={flags.svg} alt="flag" />
      <div className={styles.information}>
        <h3>{name.commonName}</h3>
        <ul>
          {Object.keys(countryCard).map((key) => (
            <li key={key}>
              <span>{key}: </span>
              {countryCard[key]}
            </li>
          ))}
        </ul>
        <p>
          Border Countries:
          {borderCountries.map((borderCountry) => (
            <Link to={`/country/${borderCountry}`} key={borderCountry}>
              <span> {borderCountry}</span>
            </Link>
          ))}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
