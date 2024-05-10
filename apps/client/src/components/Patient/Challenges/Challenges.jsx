import meditate from "../../../../public/habits/meditate.svg";
import walk from "../../../../public/habits/walk.svg";
import breathe from "../../../../public/habits/breathe.svg";
import styles from "./Challenges.module.css";

const Challenges = () => {
  return (
    <div className={styles.challenges}>
      <p className={styles.title}>Izazovi</p>
      <div className={styles.challengeList}>
        <div className={styles.challenge}>
          <img className={styles.challengeImage} src={meditate} />
          <p className={styles.challengeTitle}>Meditiraj</p>
        </div>
        <div className={styles.challenge}>
          <img className={styles.challengeImage} src={walk} />
          <p className={styles.challengeTitle}>Prošetaj</p>
        </div>
        <div className={styles.challenge}>
          <img className={styles.challengeImage} src={breathe} />
          <p className={styles.challengeTitle}>Diši</p>
        </div>
      </div>
    </div>
  );
};

export default Challenges;
