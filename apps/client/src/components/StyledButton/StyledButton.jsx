import { useNavigate } from "react-router-dom";
import styles from "./StyledButton.module.css";

const StyledButton = (props) => {
  const { styleType, type, text, link, clickFunction } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("clicked");
    if (link) {
      navigate(link);
    } else {
      clickFunction();
    }
  };

  return (
    <button
      type={type}
      className={`${styles.styledButton} ${styles[styleType] || ""}`}
      {...(link || clickFunction ? { onClick: handleClick } : {})}>
      {text}
    </button>
  );
};

export default StyledButton;
