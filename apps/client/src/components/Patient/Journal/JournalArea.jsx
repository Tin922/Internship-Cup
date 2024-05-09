import MoodSelector from "./MoodSelector";
import JournalCard from "./JournalCard";
import mascot from "../../../../public/mascots/blue.svg";
import styles from "./JournalArea.module.css";

const JournalArea = () => {
  return (
    <div className={styles.journal}>
      <div className="currentMoodArea">
        <img
          src={mascot}
          alt="current mood"
          className={styles.currentMoodMascot}
        />

        <div className="moodSelector">
          <p className={styles.smallText}>Osjećam se</p>
          <div className="moodButtons">
            <MoodSelector />
          </div>
        </div>

        <JournalCard />
      </div>
    </div>
  );
};

export default JournalArea;
