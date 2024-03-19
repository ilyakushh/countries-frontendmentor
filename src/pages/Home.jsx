import CountryList from "../components/CountryList/CountryList";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import styles from "../styles/HomePage/Home.module.scss";
import { useSelector } from "react-redux";

const Home = () => {
  const countriesData = useSelector((state) => state.countries.countriesData);
  return (
    <div className={styles.home}>
      <div className="container">
        <SearchPanel />
        <CountryList />
      </div>
    </div>
  );
};

export default Home;
