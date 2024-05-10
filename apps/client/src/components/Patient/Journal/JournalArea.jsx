import MoodSelector from "./MoodSelector";
import JournalCard from "./JournalCard";
import mascot from "../../../../public/mascots/blue.svg";
import styles from "./JournalArea.module.css";

const JournalArea = () => {
  return (
    <div className={styles.journal}>
      <div>
        <img
          src={mascot}
          alt="current mood"
          className={styles.currentMoodMascot}
        />

        <div className={styles.moodSelectorArea}>
          <p className={styles.smallText}>Osjećam se</p>
          <div>
            <MoodSelector />
          </div>
        </div>

        <JournalCard />
      </div>
    </div>
  );
};

export default JournalArea;
