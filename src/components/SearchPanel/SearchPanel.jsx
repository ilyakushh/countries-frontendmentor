import SearchBar from "./SearchBar/SearchBar";
import Select from "react-select";
import styles from "../../styles/HomePage/SearchPanel/SearchPanel.module.scss";

const SearchPanel = () => {
  const options = [
    { value: "Africa", label: "Africa" },
    { value: "America", label: "America" },
    { value: "Asia", label: "Asia" },
    { value: "Europe", label: "Europe" },
    { value: "Oceania", label: "Oceania" },
  ];
  return (
    <div className={styles.searchPanel}>
      <SearchBar />
      <Select
        options={options}
        isSearchable={false}
        classNamePrefix="customSelect"
        placeholder="Filter by Region"
      />
    </div>
  );
};

export default SearchPanel;
