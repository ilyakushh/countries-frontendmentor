import styles from "../../styles/App.module.scss";
import Header from "../Header/Header";
import AppRoutes from "./AppRoutes";
import { fetchCoutriesData } from "../../reducers/dataFetchSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCoutriesData());
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
