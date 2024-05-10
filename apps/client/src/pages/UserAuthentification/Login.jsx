import { Link } from "react-router-dom";
import LoginForm from "../../components/Form/LoginForm/LoginForm";
import "../page.css";

const Login = () => {
  return (
    <div className="mainArea">
      <p className="title">Prijavi se</p>
      <LoginForm />
      <Link to="/register" className="smallText">
        Nemaš račun? <strong>Registriraj se</strong>
      </Link>
    </div>
  );
};

export default Login;
