import Navbar from "../../../components/Navbar/Navbar";
import styles from "./PatientProfilePage.module.css";
import avatar from "../../../../public/profile/avatar.svg";
import "../../page.css";

const PatientProfilePage = () => {
  const username = "User";
  const email = "user@example.com";
  // This should be fetched from the backend

  return (
    <div className="mainArea center">
      <h1 className="title">Profil</h1>
      <div className={styles.profileInfo}>
        <div className={styles.profileInfoItem}>
          <h3 className={styles.profileInfoTitle}>Avatar</h3>
          <img src={avatar} alt="users avatar" />
        </div>
        <div className={styles.profileInfoItem}>
          <h3 className={styles.profileInfoTitle}>Korisničko ime</h3>
          <p className={styles.profileInfoValue}>{username}</p>
        </div>
        <div className={styles.profileInfoItem}>
          <h3 className={styles.profileInfoTitle}>Email</h3>
          <p className={styles.profileInfoValue}>{email}</p>
        </div>
      </div>

      <Navbar currentPage="profile" />
    </div>
  );
};

export default PatientProfilePage;
