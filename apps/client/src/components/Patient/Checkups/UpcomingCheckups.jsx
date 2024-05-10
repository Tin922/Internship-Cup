import Appointment from "./Appointment";
import styles from "./UpcomingCheckups.module.css";

const UpcomingCheckups = () => {
  return (
    <div className={styles.upcomingCheckups}>
      <div className={styles.textArea}>
        <p className={styles.title}>Nadolazeći termini</p>
        <a className={styles.details}>Detalji</a>
      </div>
      <div className={styles.appointementsArea}>
        <Appointment />
      </div>
    </div>
  );
};

export default UpcomingCheckups;
