import styles from "./JournalBook.module.css";
import logo from "../../../../public/logo.svg";

const JournalBook = () => {
  return (
    <div className={styles.journalBook}>
      <img
        className={styles.journalBookLogo}
        src={logo}
        alt="worry knot logo"
      />
      <p className={styles.journalBookText}>uzastopni dani</p>
      <p className={styles.daysCounter}>5</p>
    </div>
  );
};

export default JournalBook;
