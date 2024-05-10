import MoodSelector from "./MoodSelector";
import JournalCard from "./JournalCard";
import mascot from "../../../../public/mascots/mascots.png";
import styles from "./JournalArea.module.css";

const JournalArea = () => {  
  return (
    <div className={styles.journal}>
      <div>
        <img src={mascot} alt="mascots" className={styles.mascots} />

        <JournalCard />
      </div>
    </div>
  );
};

export default JournalArea;
