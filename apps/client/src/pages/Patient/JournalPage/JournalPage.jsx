import Navbar from "../../../components/Navbar/Navbar";
import styles from "./PatientJournalPage.module.css";

const PatientJournalPage = () => {
  return (
    <div className={styles.mainArea}>
      <h1>Patient Journal Page</h1>
      <Navbar currentPage="journal" />
    </div>
  );
};

export default PatientJournalPage;
