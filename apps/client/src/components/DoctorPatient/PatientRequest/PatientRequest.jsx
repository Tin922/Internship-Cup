import styles from "./PatientRequest.module.css";

const PatientRequest = ({ patients }) => {
  return (
    <div>
      <div className={styles.patientOuterContainer}>
        {patients.map((patient) => {
          return (
            <div className={styles.patientContainer}>
              <div key={patient.id}>
                <div className={styles.main}>
                  <div>
                    <img src={patient.profilePhoto} alt={patient.name} />
                  </div>
                  <div className={styles.patientData}>
                    <div className={styles.patientName}>
                      {patient.name} {patient.surname}
                    </div>
                    <div className={styles.requestTime}>prije 2 sata</div>
                  </div>
                  <div>
                    <img src="/patients/patientDoctorIcon.svg" alt="" />
                  </div>
                </div>

                <div className={styles.therapyTime}>
                  <div className={styles.iconsAndTime}>
                    <div>
                      <img src="/patients/calendar.svg" alt="calendar" />
                    </div>
                    <div>{patient.date}</div>
                  </div>
                  <div className={styles.iconsAndTime}>
                    <div>
                      <img src="/patients/clock.svg" alt="clock" />
                    </div>
                    <div>11:00 - 12:00</div>
                  </div>
                </div>

                <div className={styles.buttonWrapper}>
                  <button className={styles.inactiveButton}>Odbij</button>
                  <button className={styles.activeButton}>Prihvati</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PatientRequest;
