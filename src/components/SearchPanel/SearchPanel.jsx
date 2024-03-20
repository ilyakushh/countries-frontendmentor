import SearchBar from "./SearchBar/SearchBar";
import Select from "react-select";
import styles from "../../styles/HomePage/SearchPanel/SearchPanel.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "../../reducers/filterSlice";

const SearchPanel = () => {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.darkMode.darkTheme);
  const options = [
    { value: "All", label: "All" },
    { value: "Africa", label: "Africa" },
    { value: "Americas", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];
  const handleRegionChange = (selectedOption) => {
    dispatch(setRegion(selectedOption.value));
  };
  return (
    <div className={styles.searchPanel}>
      <SearchBar />
      <Select
        options={options}
        isSearchable={false}
        classNamePrefix={
          darkTheme ? `customSelectDark customSelect` : "customSelect"
        }
        placeholder="Filter by Region"
        onChange={handleRegionChange}
      />
    </div>
  );
};

export default SearchPanel;
