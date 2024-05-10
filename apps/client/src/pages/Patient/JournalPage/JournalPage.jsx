import { useNavigate } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import confused from "../../../../public/mascots/confused.svg";
import plus from "../../../../public/journal/plus.svg";
import styles from "./PatientJournalPage.module.css";

const PatientJournalPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.mainArea}>
      <img src={confused} alt="confused mascot" />
      <p className={styles.confusedText}>Zašto je tvoj dnevnik prazan?</p>
      <button className={styles.fab} onClick={() => navigate("/journal-entry")}>
        <img src={plus} />
      </button>

      <Navbar currentPage="journal" />
    </div>
  );
};

export default PatientJournalPage;
