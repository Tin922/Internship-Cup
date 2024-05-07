import StyledButton from "../../components/StyledButton/StyledButton";
import styles from "./Survey.module.css";
import mascot from "../../../public/mascots/blue.svg";

const Survery = () => {
  return (
    <div className={styles.mainArea}>
      <img className={styles.mascotImage} src={mascot} alt="" />
      <p className={styles.surveyQuestion}>
        Osjećate li preopterećenost i stres?
      </p>
      <div className={styles.surveyAnswers}>
        <StyledButton text="DA" />
        <StyledButton text="NE" />
      </div>
      <a className={styles.skipSurvey} href="#">
        Preskoči kviz
      </a>
    </div>
  );
};

export default Survery;
