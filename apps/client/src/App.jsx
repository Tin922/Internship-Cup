import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/UserAuthentification/Login";
import Register from "./pages/UserAuthentification/Register";
import Welcome from "./pages/Welcome/Welcome";
import Survey from "./pages/Survey/Survey";
import PatientHomePage from "./pages/Patient/HomePage/PatientHomePage";
import PatientJournalPage from "./pages/Patient/JournalPage/JournalPage";
import PatientProfilePage from "./pages/Patient/ProfilePage/ProfilePage";
import PatientSearchPage from "./pages/Patient/SearchPage/SearchPage";
import "./theme/colors.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/home" element={<PatientHomePage />} />
          <Route path="/journal" element={<PatientJournalPage />} />
          <Route path="/search" element={<PatientSearchPage />} />
          <Route path="/profile" element={<PatientProfilePage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
