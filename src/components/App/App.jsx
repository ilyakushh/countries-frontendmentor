import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoutriesData } from "../../reducers/dataFetchSlice";
import styles from "../../styles/App.module.scss";
import Header from "../Header/Header";
import AppRoutes from "./AppRoutes";

const App = () => {
  const darkTheme = useSelector((state) => state.darkMode.darkTheme);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoutriesData());
  }, []);

  return (
    <div className={darkTheme ? styles.appDark : styles.appLight}>
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
