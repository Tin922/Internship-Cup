import styles from "./Sos.module.css";

const Sos = () => {
  return (
    <div className={styles.sos}>
      <p className={styles.title}>Hitno ti treba pomoć?</p>
      <div className={styles.bttnWrapper}>
        <button className={styles.bttn}>SOS</button>
      </div>
    </div>
  );
};

export default Sos;
