import styles from "../../../styles/HomePage/SearchPanel/SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className={styles.searchBar}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        placeholder="Search for a country..."
        value={inputValue}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};

export default SearchBar;
