import styles from "./DoctorHomePageRequests.module.css";
import PatientRequest from "../../../components/DoctorPatient/PatientRequest/PatientRequest";
import NavbarDoctor from "../../../components/Navbar/NavbarDoctor/NavbarDoctor";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.buttonWrapperOuterContianer}>
        <div className={styles.buttonWrapper}>
          <button className={styles.activeButton}>Zahtjevi</button>
          <button
            className={styles.inactiveButton}
            onClick={() => navigate("/doctor/clients")}
          >
            Klijenti
          </button>
        </div>
      </div>

      <div>
        <div>
          <div className={styles.sortOptions}>
            <div>
              <img src="/doctorHomePage/patients.svg" alt="patients" />
              <p>Pacijetni</p>
            </div>
            <div>
              <img src="/doctorHomePage/unregistered.svg" alt="unregistered" />
              <p>Neupisani</p>
            </div>
            <div>
              <img src="/doctorHomePage/newest.svg" alt="newest" />
              <p>Najnoviji</p>
            </div>
            <div>
              <img src="/doctorHomePage/oldest.svg" alt="oldest" />
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
