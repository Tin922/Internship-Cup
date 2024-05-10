import { useState } from "react";
import confused from "../../../../public/moods/confused.svg";
import down from "../../../../public/moods/down.svg";
import happy from "../../../../public/moods/happy.svg";
import mad from "../../../../public/moods/mad.svg";
import neutral from "../../../../public/moods/neutral.svg";
import sad from "../../../../public/moods/sad.svg";
import tired from "../../../../public/moods/tired.svg";
import styles from "./MoodSelector.module.css";

const MoodSelector = () => {
  const [currentMood, setCurrentMood] = useState("");
  const handleMoodChange = (mood) => {
    console.log(mood);
    setCurrentMood(mood);
  };

  return (
    <div className={styles.moodSelector}>
      <img
        className={`${styles.mood} ${currentMood === "neutral" ? styles.currentMood : ""}`}
        src={neutral}
        alt="neutral"
        onClick={() => handleMoodChange("neutral")}
      />
      <img
        className={`${styles.mood} ${currentMood === "happy" ? styles.currentMood : ""}`}
        src={happy}
        alt="happy"
        onClick={() => handleMoodChange("happy")}
      />
      <img
        className={`${styles.mood} ${currentMood === "down" ? styles.currentMood : ""}`}
        src={down}
        alt="down"
        onClick={() => handleMoodChange("down")}
      />
      <img
        className={`${styles.mood} ${currentMood === "sad" ? styles.currentMood : ""}`}
        src={sad}
        alt="sad"
        onClick={() => handleMoodChange("sad")}
      />
      <img
        className={`${styles.mood} ${currentMood === "confused" ? styles.currentMood : ""}`}
        src={confused}
        alt="confused"
        onClick={() => handleMoodChange("confused")}
      />
      <img
        className={`${styles.mood} ${currentMood === "mad" ? styles.currentMood : ""}`}
        src={mad}
        alt="mad"
        onClick={() => handleMoodChange("mad")}
      />
      <img
        className={`${styles.mood} ${currentMood === "tired" ? styles.currentMood : ""}`}
        src={tired}
        alt="tired"
        onClick={() => handleMoodChange("tired")}
      />
    </div>
  );
};

export default MoodSelector;
