import Navbar from "../../../components/Navbar/Navbar";
import JournalArea from "../../../components/Patient/Journal/JournalArea";
import styles from "./PatientHomePage.module.css";
import "../../page.css";
import UpcomingCheckups from "../../../components/Patient/Checkups/UpcomingCheckups";

const PatientHomePage = () => {
  return (
    <div className="mainArea">
      <div className={styles.welcomeTextArea}>
        <h2 className={styles.pageSubtitle}>Pozdrav Marta!</h2>
        <h1 className={styles.pageTitle}>Započni svoj dan</h1>
      </div>

      <JournalArea />
      <UpcomingCheckups />

      <div className="challangesArea"></div>

      <div className="habitsArea"></div>

      <div className="sosButtonArea"></div>
      <Navbar currentPage="home" />
    </div>
  );
};

export default PatientHomePage;
