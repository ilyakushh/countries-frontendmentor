import styles from "../../styles/CountryList/CountryList.module.scss";
import CountryItem from "./CountryItem/CountryItem";
import { useSelector, useDispatch } from "react-redux";
import { fetchCoutriesData } from "../../reducers/dataFetchSlice";
import { useEffect } from "react";

const CountryList = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.countries.isLoading);
  const countriesData = useSelector((state) => state.countries.countriesData);
  useEffect(() => {
    dispatch(fetchCoutriesData());
  }, []);
  console.log(countriesData[165]);
  return (
    <div className={styles.countryList}>
      {isLoading ? (
        <p>isLoading</p>
      ) : (
        <div className={styles.countryListWrapper}>
          <CountryItem
            flag={countriesData[162].flags.png}
            name={countriesData[165].name.common}
            population={countriesData[165].population}
            region={countriesData[165].region}
            capital={countriesData[165].capital[0]}
          />
          <CountryItem
            flag={countriesData[25].flags.png}
            name={countriesData[165].name.common}
            population={countriesData[165].population}
            region={countriesData[165].region}
            capital={countriesData[165].capital[0]}
          />
          <CountryItem
            flag={countriesData[11].flags.png}
            name={countriesData[165].name.common}
            population={countriesData[165].population}
            region={countriesData[165].region}
            capital={countriesData[165].capital[0]}
          />
          <CountryItem
            flag={countriesData[15].flags.png}
            name={countriesData[165].name.common}
            population={countriesData[165].population}
            region={countriesData[165].region}
            capital={countriesData[165].capital[0]}
          />
          <CountryItem
            flag={countriesData[1].flags.png}
            name={countriesData[165].name.common}
            population={countriesData[165].population}
            region={countriesData[165].region}
            capital={countriesData[165].capital[0]}
          />
          <CountryItem
            flag={countriesData[0].flags.png}
            name={countriesData[165].name.common}
            population={countriesData[165].population}
            region={countriesData[165].region}
            capital={countriesData[165].capital[0]}
          />
          <CountryItem
            flag={countriesData[14].flags.png}
            name={countriesData[165].name.common}
            population={countriesData[165].population}
            region={countriesData[165].region}
            capital={countriesData[165].capital[0]}
          />
          <CountryItem
            flag={countriesData[14].flags.png}
            name={countriesData[165].name.common}
            population={countriesData[165].population}
            region={countriesData[165].region}
            capital={countriesData[165].capital[0]}
          />
        </div>
      )}
    </div>
  );
};

export default CountryList;
