import CountryList from "../components/CountryList/CountryList";
import SearchPanel from "../components/SearchPanel/SearchPanel";
import styles from "../styles/Home.module.scss";

const Home = () => {
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
