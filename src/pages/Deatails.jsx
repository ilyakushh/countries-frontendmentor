import { IoArrowBack } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import Button from "../components/UI/Button";
import InfoCard from "../components/InfoCard/InfoCard";
import styles from "../styles/DetailsPage/Details.module.scss";

const Deatails = () => {
  const darkTheme = useSelector((state) => state.darkMode.darkTheme);

  const countriesData = useSelector((state) => state.countries.countriesData);

  const isLoading = useSelector((state) => state.countries.isLoading);

  const location = useParams();

  const countryData = countriesData.find(
    (country) => country.name.commonName === location.name
  );

  const findBorders = () => {
    if (!countryData || !countryData.borders) return [];
    return countryData.borders.map((borderCode) => {
      const borderCountry = countriesData.find(
        (country) => country.cca3 === borderCode
      );
      return borderCountry ? borderCountry.name.commonName : null;
    });
  };

  const borderCountries = findBorders();

  return (
    <div className={styles.details}>
      {isLoading ? (
        <div className="spinerWrapper">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            strokeColor="blue"
            strokeWidth="5"
            ariaLabel="rotating-lines-loading"
          />
        </div>
      ) : (
        <div className="container">
          <Link to="..">
            <Button
              className={
                darkTheme
                  ? `${styles.button} ${styles.darkMode}`
                  : styles.button
              }
            >
              <IoArrowBack className={styles.icon} />
              Back
            </Button>
          </Link>
          <InfoCard {...countryData} borderCountries={borderCountries} />
        </div>
      )}
    </div>
  );
};

export default Deatails;
