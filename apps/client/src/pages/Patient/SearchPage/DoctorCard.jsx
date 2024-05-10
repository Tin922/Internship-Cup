import styles from "./DoctorCard.module.css";

const DoctorCard = ({ image, name, title, office }) => {
  return (
    <div className={styles.doctorCard}>
      <img src={image} alt="doctor image" className={styles.image} />
      <div className={styles.textArea}>
        <p className={styles.name}>{name}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.office}>{office}</p>
      </div>
    </div>
  );
};
export default DoctorCard;
