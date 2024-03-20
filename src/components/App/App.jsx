import styles from "../../styles/App.module.scss";
import Header from "../Header/Header";
import AppRoutes from "./AppRoutes";
import { fetchCoutriesData } from "../../reducers/dataFetchSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const darkTheme = useSelector((state) => state.darkMode.darkTheme);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoutriesData());
  }, []);
  console.log(darkTheme);
  return (
    <div className={darkTheme ? styles.appDark : styles.appLight}>
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
