import home from "../../../../public/navbar/Home.svg";
import calendar from "../../../../public/doctorHomePage/icon2Navbar.svg";
import schedule from "../../../../public/doctorHomePage/icon3Navbar.svg";
import user from "../../../../public/navbar/User.svg";
import styles from "./NavbarDoctor.module.css";
import NavigationIcon from "../NavigationIcon";

const Navbar = (props) => {
  const { currentPage } = props;

  return (
    <ul className={styles.navigation}>
      <NavigationIcon currentPage={currentPage} icon={home} name="doctor" />
      <NavigationIcon
        currentPage={currentPage}
        icon={calendar}
        name="doctor/help"
      />
      <NavigationIcon
        currentPage={currentPage}
        icon={schedule}
        name="doctor/schedule"
      />
      <NavigationIcon
        currentPage={currentPage}
        icon={user}
        name="doctor/profile"
      />
    </ul>
  );
};

export default Navbar;
