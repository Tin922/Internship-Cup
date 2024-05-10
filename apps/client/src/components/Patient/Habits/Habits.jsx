import meditate from "../../../../public/habits/meditate.svg";
import walk from "../../../../public/habits/walk.svg";
import styles from "./Habits.module.css";

const Habits = () => {
  return (
    <div className={styles.habits}>
      <p className={styles.title}>Zdrave navike</p>
      <div className={styles.habitList}>
        <div className={styles.habit}>
          <img src={meditate} />
        </div>
        <div className={styles.habit}>
          <img src={walk} />
        </div>
      </div>
    </div>
  );
};

export default Habits;
