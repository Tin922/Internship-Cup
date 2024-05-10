import Navbar from "../../../components/Navbar/Navbar";
import styles from "./PatientProfilePage.module.css";

const PatientProfilePage = () => {
  return (
    <div className={styles.mainArea}>
      <h1>Patient Profile Page</h1>
      <Navbar currentPage="profile" />
    </div>
  );
};

export default PatientProfilePage;
