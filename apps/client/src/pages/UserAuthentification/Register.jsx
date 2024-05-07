import { Link } from "react-router-dom";
import RegisterForm from "../../components/Form/RegisterForm/RegisterForm";
import "../page.css";

const Register = () => {
  return (
    <div className="mainArea">
      <p className="title">Registriraj se</p>
      <RegisterForm />
      <Link to="/login" className="smallText">
        Već imate račun? <strong>Prijavite se</strong>.
      </Link>
    </div>
  );
};

export default Register;
