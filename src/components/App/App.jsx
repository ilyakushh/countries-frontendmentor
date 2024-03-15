import styles from "../../styles/App.module.scss";
import Header from "../Header/Header";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <AppRoutes />
    </div>
  );
};

export default App;
