import Navbar from "../../../components/Navbar/Navbar";
import styles from "./PatientHomePage.module.css";

const PatientHomePage = () => {
  return (
    <div className={styles.mainArea}>
      <h1>Patient Home Page</h1>
      <Navbar currentPage="home"/>
    </div>
  );
};

export default PatientHomePage;
