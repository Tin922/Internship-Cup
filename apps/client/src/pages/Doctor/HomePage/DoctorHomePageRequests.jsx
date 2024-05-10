import styles from "./DoctorHomePageRequests.module.css";

const DoctorHomePageRequests = () => {
  return (
    <>
      <div className={styles.buttonWrapper}>
        <button className={styles.activeButton}>Zahtjevi</button>
        <button className={styles.inactiveButton}>Klijenti</button>
      </div>

      <div>
        <div>
          <div className={styles.sortOptions}>
            <img src="/doctorHomePage/1" alt="" />
            <p>Pacijetni</p>
          </div>
          <div>
            <img src="/doctorHomePage/2" alt="" />
            <p>Neupisani</p>
          </div>
          <div>
            <img src="/doctorHomePage/3" alt="" />
            <p>Najnoviji</p>
          </div>
          <div>
            <img src="/doctorHomePage/4" alt="" />
            <p>Najstariji</p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default DoctorHomePageRequests;
