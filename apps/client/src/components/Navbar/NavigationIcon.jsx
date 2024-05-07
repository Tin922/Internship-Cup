import { useNavigate } from "react-router-dom";
import styles from "./NavigationIcon.module.css";

const NavigationIcon = (props) => {
  const { icon, name, currentPage } = props;
  const navigate = useNavigate();
  const handleClick = (page) => {
    navigate(`/${page}`);
  };

  return (
    <li
      className={currentPage === name ? styles.active : ""}
      onClick={() => handleClick(name)}>
      <img className={styles.icon} src={icon} alt={name} />
    </li>
  );
};

export default NavigationIcon;
