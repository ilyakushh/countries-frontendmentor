import { IoArrowBack } from "react-icons/io5";
import styles from "../styles/DetailsPage/Details.module.scss";
import InfoCard from "../components/InfoCard/InfoCard";
import Button from "../components/UI/Button";

const Deatails = () => {
  return (
    <div className={styles.details}>
      <div className="container">
        <Button className={styles.button}>
          <IoArrowBack className={styles.icon} />
          Back
        </Button>
        <InfoCard />
      </div>
    </div>
  );
};

export default Deatails;
