import Navbar from "../../../components/Navbar/Navbar";
import JournalArea from "../../../components/Patient/Journal/JournalArea";
import UpcomingCheckups from "../../../components/Patient/Checkups/UpcomingCheckups";
import Challenges from "../../../components/Patient/Challenges/Challenges";
import Habits from "../../../components/Patient/Habits/Habits";
import Sos from "../../../components/Patient/Sos/Sos";
import styles from "./PatientHomePage.module.css";
import "../../page.css";

const PatientHomePage = () => {
  const name = "User"; // This should be fetched from the backend

  return (
    <div className="mainArea">
      <div className={styles.welcomeTextArea}>
        <h2 className={styles.pageSubtitle}>Pozdrav {name}!</h2>
        <h1 className={styles.pageTitle}>Započni svoj dan</h1>
      </div>
      <JournalArea />
      <UpcomingCheckups />
      <Challenges />
      <Habits />
      <Sos />
      <Navbar currentPage="home" />
    </div>
  );
};

export default PatientHomePage;
