import Appointment from "./Appointment";
import styles from "./UpcomingCheckups.module.css";

const UpcomingCheckups = () => {
  const checkups = []; // This should be fetched from the backend

  return (
    <div className={styles.upcomingCheckups}>
      <div className={styles.textArea}>
        <p className={styles.title}>Nadolazeći termini</p>
        <a className={styles.details}>Detalji</a>
      </div>
      <div className={styles.appointementsArea}>
        {/* {checkups.map((checkup, index) => (
          <Appointment
            key={index}
            date={checkup.date}
            startTime={checkup.startTime}
            endTime={checkup.endTime}
          />
        ))} */}
        <Appointment
          date={"Utorak, 12. jul"}
          startTime={"12:00"}
          endTime={"13:00"}
        />
      </div>
    </div>
  );
};

export default UpcomingCheckups;
