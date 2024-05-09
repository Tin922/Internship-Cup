import StyledButton from "../../components/StyledButton/StyledButton";
import logo from "../../../public/worryKnotWelcomeScreenLogo.svg";
import styles from "./Welcome.module.css";

const Welcome = () => {
  return (
    <div className={styles.mainArea}>
      <img className={styles.image} src={logo} alt="Worry knot logo" />
      <div className={styles.formArea}> 
        <StyledButton text="Prijavi se" styleType="outlined" link="/login" />
        <StyledButton
          text="Registriraj se"
          styleType="contained"
          link="/register"
        />
      </div>
    </div>
  );
};

export default Welcome;
