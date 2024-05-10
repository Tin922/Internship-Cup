import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MoodSelector from "../../../../components/Patient/Journal/MoodSelector";
import plus from "../../../../../public/journal/plus.svg";
import cross from "../../../../../public/journal/cross.svg";
import styles from "./PatientJournalEntry.module.css";
import "../../../page.css";

const PatientJournalEntry = () => {
  const [factor, setFactor] = useState("");
  const [mood, setMood] = useState("");
  const [journalEntry, setJournalEntry] = useState("");
  const navigate = useNavigate();

  const handleFactorChange = (factor) => {
    setFactor(factor);
  };
  const handleButtonClick = () => {
    navigate(-1);
  };

  return (
    <div className="mainArea">
      <div className={styles.header}>
        <p className={styles.title}>Dodaj zapis</p>
        <img
          className={styles.cross}
          src={cross}
          onClick={() => handleButtonClick()}
        />
      </div>
      <p className={styles.smallText}>Osjećam se</p>
      <MoodSelector className={styles.moods} />
      <p className={styles.smallText}>Faktori koji su utjecali na vas</p>
      <div className={styles.factors}>
        <p
          className={`${styles.factor} ${factor === "obitelj" ? styles.active : ""}`}
          onClick={() => handleFactorChange("obitelj")}>
          Obitelj
        </p>
        <p
          className={`${styles.factor} ${factor === "prijatelji" ? styles.active : ""}`}
          onClick={() => handleFactorChange("prijatelji")}>
          Prijatelji
        </p>
        <p
          className={`${styles.factor} ${factor === "okolina" ? styles.active : ""}`}
          onClick={() => handleFactorChange("okolina")}>
          Okolina
        </p>
        <p
          className={`${styles.factor} ${factor === "partner" ? styles.active : ""}`}
          onClick={() => handleFactorChange("partner")}>
          Partner
        </p>
        <p
          className={`${styles.factor} ${factor === "posao" ? styles.active : ""}`}
          onClick={() => handleFactorChange("posao")}>
          Posao
        </p>

        <div className={`${styles.factor} ${styles.active}`}>
          <img src={plus} alt="" />
        </div>
      </div>

      <p className={styles.smallText}>Zapišite svoje misli</p>
      <textarea
        className={styles.textArea}
        value={journalEntry}
        onChange={(e) => setJournalEntry(e.target.value)}
      />

      <button className={styles.saveButton}>Dodaj u svoj dnevnik</button>
    </div>
  );
};

export default PatientJournalEntry;
