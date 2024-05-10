import Navbar from "../../../components/Navbar/Navbar";
import styles from "./SearchPage.module.css";

const PatientSearchPage = () => {
  return (
    <div className={styles.mainArea}>
      <h1>Patient Search Page</h1>
      <Navbar currentPage="search" />
    </div>
  );
};

export default PatientSearchPage;
