import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../../../reducers/filterSlice";
import styles from "../../../styles/HomePage/SearchPanel/SearchBar.module.scss";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const darkTheme = useSelector((state) => state.darkMode.darkTheme);

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    dispatch(setSearchTerm(value));
  };

  return (
    <div
      className={
        darkTheme ? `${styles.darkTheme} ${styles.searchBar}` : styles.searchBar
      }
    >
      <FaSearch className={styles.icon} />
      <input
        type="text"
        placeholder="Search for a country..."
        value={inputValue}
        className={darkTheme ? styles.darkMode : ""}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
