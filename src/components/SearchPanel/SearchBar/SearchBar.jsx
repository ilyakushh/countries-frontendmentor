import styles from "../../../styles/HomePage/SearchPanel/SearchBar.module.scss";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "../../../reducers/filterSlice";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    dispatch(setSearchTerm(value));
  };

  //только доделал поиск по Input
  //нужно перепроверить что сделал тк сделал при помощи gpt
  return (
    <div className={styles.searchBar}>
      <FaSearch className={styles.icon} />
      <input
        type="text"
        placeholder="Search for a country..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBar;
