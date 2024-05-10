import clock from "../../../../public/appointments/clock.svg";
import calendar from "../../../../public/appointments/calendar.svg";
import styles from "./Appointment.module.css";

const Appointment = () => {
  let date, startTime, endTime;
  date = "Utorak, 12. jul";
  startTime = "12:00";
  endTime = "13:00";

  return (
    <div className={styles.appointment}>
      <div className={styles.date}>
        <img className={styles.icon} src={clock} alt="clock" />
        {date}
      </div>
      <div className={styles.time}>
        <img className={styles.icon} src={calendar} alt="clock" />
        {startTime} - {endTime}
      </div>
    </div>
  );
};

export default Appointment;
