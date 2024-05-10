import { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../../../public/search/search.svg";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  return (
    <div className={styles.searchbar}>
      <img
        className={styles.searchButton}
        src={search}
        alt="search icon"
        onClick={() => navigate(`/search/${searchInput}`)}
      />
      <input
        type="text"
        className={styles.searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
