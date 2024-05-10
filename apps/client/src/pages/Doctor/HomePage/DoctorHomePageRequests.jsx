import styles from "./DoctorHomePageRequests.module.css";
import PatientRequest from "../../../components/DoctorPatient/PatientRequest/PatientRequest";
import NavbarDoctor from "../../../components/Navbar/NavbarDoctor/NavbarDoctor";

const patients = [
  {
    id: 1,
    name: "Marta",
    surname: "Divić",
    date: "2024-13-05",
    profilePhoto: "/patients/profilePhoto1.svg",
  },
  {
    id: 2,
    name: "Jakov",
    surname: "Matić",
    date: "2024-13-05",
    profilePhoto: "/patients/profilePhoto2.svg",
  },
];
const DoctorHomePageRequests = () => {
  return (
    <>
      <div className={styles.buttonWrapperOuterContianer}>
        <div className={styles.buttonWrapper}>
          <button className={styles.activeButton}>Zahtjevi</button>
          <button className={styles.inactiveButton}>Klijenti</button>
        </div>
      </div>

      <div>
        <div>
          <div className={styles.sortOptions}>
            <div>
              <img src="/doctorHomePage/1.svg" alt="" />
              <p>Pacijetni</p>
            </div>
            <div>
              <img src="/doctorHomePage/2.svg" alt="" />
              <p>Neupisani</p>
            </div>
            <div>
              <img src="/doctorHomePage/3.svg" alt="" />
              <p>Najnoviji</p>
            </div>
            <div>
              <img src="/doctorHomePage/4.svg" alt="" />
              <p>Najstariji</p>
            </div>
          </div>
          <PatientRequest patients={patients} />
        </div>
        <NavbarDoctor currentPage="doctor" />
      </div>
    </>
  );
};

export default DoctorHomePageRequests;
