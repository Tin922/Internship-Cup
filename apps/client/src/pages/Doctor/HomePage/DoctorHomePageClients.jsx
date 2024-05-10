import styles from "./DoctorHomePageRequests.module.css";
import PatientClients from "../../../components/DoctorPatient/PatientClients/PatientClients";
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

const DoctorHomePageClients = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.buttonWrapperOuterContianer}>
        <div className={styles.buttonWrapper}>
          <button
            className={styles.inactiveButton}
            onClick={() => navigate("/doctor/requests")}
          >
            Zahtjevi
          </button>
          <button className={styles.activeButton}>Klijenti</button>
        </div>
      </div>

      <div>
        <div>
          <div className={styles.sortOptions}>
            <div>
              <img
                src="/doctorHomePage/alphabeticalOrder.svg"
                alt="alphabeticalOrder"
              />
              <p>Abecedno</p>
            </div>
            <div>
              <img src="/doctorHomePage/pen.svg" alt="pen" />
              <p>Novi zapis</p>
            </div>
            <div>
              <img src="/doctorHomePage/newest.svg" alt="newest" />
              <p>Najnoviji</p>
            </div>
            <div>
              <img src="/doctorHomePage/time.svg" alt="time" />
              <p>Najskoriji</p>
            </div>
          </div>
          <PatientClients patients={patients} />
        </div>
        <NavbarDoctor currentPage="doctor" />
      </div>
    </>
  );
};

export default DoctorHomePageClients;
