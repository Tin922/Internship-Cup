import styles from "./JournalBook.module.css";
import logo from "../../../../public/logo.svg";

const JournalBook = () => {
  const days = 5; // This should be fetched from the backend

  return (
    <div className={styles.journalBook}>
      <img
        className={styles.journalBookLogo}
        src={logo}
        alt="worry knot logo"
      />
      {days > 0 && (
        <>
          <p className={styles.journalBookText}>uzastopni dani</p>
          <p className={styles.daysCounter}>{days}</p>
        </>
      )}
    </div>
  );
};

export default JournalBook;
