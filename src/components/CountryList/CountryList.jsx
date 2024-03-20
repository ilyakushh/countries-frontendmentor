import styles from "../../styles/HomePage/CountryList/CountryList.module.scss";
import CountryItem from "./CountryItem/CountryItem";
import { useSelector } from "react-redux";
import { RotatingLines } from "react-loader-spinner";
import { Link } from "react-router-dom";
import { useMemo } from "react";

const CountryList = () => {
  const isLoading = useSelector((state) => state.countries.isLoading);
  const countriesData = useSelector((state) => state.countries.countriesData);
  const searchTerm = useSelector((state) => state.filter.searchTerm);
  const regionFilter = useSelector((state) => state.filter.region);
  console.log(regionFilter);
  const filteredCountries = useMemo(() => {
    return countriesData.filter(
      (country) =>
        country.name.commonName
          .toLowerCase()
          .includes(searchTerm.toLowerCase()) &&
        (!regionFilter || country.region === regionFilter) // Добавляем условие для фильтрации по региону
    );
  }, [countriesData, searchTerm, regionFilter]);

  return (
    <div className={styles.countryList}>
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
        <div className={styles.countryListWrapper}>
          {filteredCountries.map((country) => {
            const countryItems = {
              flag: country.flags.png,
              name: country.name.commonName,
              info: [
                {
                  title: "Population",
                  description: country.population.toLocaleString(),
                },
                {
                  title: "Region",
                  description: country.region,
                },
                {
                  title: "Capital",
                  description: country.capital,
                },
              ],
            };
            return (
              <Link
                to={`/country/${country.name.commonName}`}
                key={country.name.commonName}
              >
                <CountryItem {...countryItems} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CountryList;
