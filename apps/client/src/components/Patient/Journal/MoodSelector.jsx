import styles from "./MoodSelector.module.css";
import confused from "../../../../public/moods/confused.svg";
import down from "../../../../public/moods/down.svg";
import happy from "../../../../public/moods/happy.svg";
import mad from "../../../../public/moods/mad.svg";
import neutral from "../../../../public/moods/neutral.svg";
import sad from "../../../../public/moods/sad.svg";
import tired from "../../../../public/moods/tired.svg";

const MoodSelector = () => {
  return (
    <div className={styles.moodSelector}>
      <img className={styles.mood} src={neutral} alt="neutral" />
      <img className={styles.mood} src={happy} alt="happy" />
      <img className={styles.mood} src={down} alt="down" />
      <img className={styles.mood} src={sad} alt="sad" />
      <img className={styles.mood} src={confused} alt="confused" />
      <img className={styles.mood} src={mad} alt="mad" />
      <img className={styles.mood} src={tired} alt="tired" />
    </div>
  );
};

export default MoodSelector;
