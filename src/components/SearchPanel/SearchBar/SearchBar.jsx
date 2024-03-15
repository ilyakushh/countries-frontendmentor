import styles from "../../../styles/SearchPanel/SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <FaSearch className={styles.icon} />
      <input type="text" placeholder="Search for a country..." />
    </div>
  );
};

export default SearchBar;
