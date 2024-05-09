import JournalBook from "./JournalBook";
import dnevnikLogo from "../../../../public/dnevnik.svg";
import styles from "./JournalCard.module.css";

const JournalCard = () => {
  return (
    <div className={styles.journalCard}>
      <div className="column1">
        <img className={styles.journalLogo} src={dnevnikLogo} alt="dnevnik" />
        <p className={styles.journalText}>
          Nemoj zaboraviti unijeti zapis u svoj dnevnik.
          <br />
          <strong>Super te ide!</strong>
        </p>
        <button className={styles.bttn} type="button">
          Kreni
        </button>
      </div>
      <div className="column2">
        <JournalBook />
      </div>
    </div>
  );
};

export default JournalCard;
