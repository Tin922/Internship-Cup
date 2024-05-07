import home from "../../../public/navbar/Home.svg";
import pen from "../../../public/navbar/Pen.svg";
import plus from "../../../public/navbar/Plus.svg";
import user from "../../../public/navbar/User.svg";
import styles from "./Navbar.module.css";
import NavigationIcon from "./NavigationIcon";

const Navbar = (props) => {
  const { currentPage } = props;

  return (
    <ul className={styles.navigation}>
      <NavigationIcon currentPage={currentPage} icon={home} name="home" />
      <NavigationIcon currentPage={currentPage} icon={pen} name="pen" />
      <NavigationIcon currentPage={currentPage} icon={plus} name="plus" />
      <NavigationIcon currentPage={currentPage} icon={user} name="profile" />
    </ul>
  );
};

export default Navbar;
