import { useState } from "react";
import DoctorCard from "./DoctorCard";
import Searchbar from "../../../components/SearchBar/Searchbar";
import Navbar from "../../../components/Navbar/Navbar";
import doctor1 from "../../../../public/doctors/doctor1.png";
import styles from "./SearchPage.module.css";

const PatientSearchPage = () => {
  const [filters, setFilters] = useState([]);
  const handleFilterChange = (filter) => {
    if (filters.includes(filter)) {
      setFilters(filters.filter((item) => item !== filter));
      return;
    }
    setFilters([...filters, filter]);
  };

  return (
    <div className={styles.mainArea}>
      <h1 className={styles.pageTitle}>Dobar dan!</h1>
      <Searchbar />
      <div className={styles.filters}>
        <p
          className={`${styles.filter} ${filters.includes("grad") ? styles.active : ""}`}
          onClick={() => handleFilterChange("grad")}>
          Grad
        </p>
        <p
          className={`${styles.filter} ${filters.includes("psiholog") ? styles.active : ""}`}
          onClick={() => handleFilterChange("psiholog")}>
          Psiholog
        </p>
        <p
          className={`${styles.filter} ${filters.includes("psihijatar") ? styles.active : ""}`}
          onClick={() => handleFilterChange("psihijatar")}>
          Psihijatar
        </p>
        <p
          className={`${styles.filter} ${filters.includes("iskustvo") ? styles.active : ""}`}
          onClick={() => handleFilterChange("iskustvo")}>
          Iskustvo
        </p>
      </div>
      <div className={styles.doctorList}>
        <DoctorCard
          image={doctor1}
          name="Ivo Šeparović "
          title="dr. spec. psihijatar, psihoterapeut"
          office="Ordinacija Svijetlo"
        />
      </div>

      <Navbar currentPage="search" />
    </div>
  );
};

export default PatientSearchPage;
