import Navbar from "../../../components/Navbar/Navbar";
import styles from "./JournalPage.module.css";

const PatientJournalPage = () => {
  return (
    <div className={styles.mainArea}>
      <h1>Patient Profile Page</h1>
      <Navbar currentPage="journal"/>
    </div>
  );
};

export default PatientJournalPage;
