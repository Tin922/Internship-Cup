import FormInput from "../../FormInput/FormInput";
import StyledButton from "../../StyledButton/StyledButton";
import "../Form.css";

const LoginForm = () => {
  return (
    <form className="form">
      <FormInput type="email" placeholder="Email" />
      <FormInput type="password" placeholder="Lozinka" />
      <StyledButton styleType="primary" text="Prijava" />
    </form>
  );
};

export default LoginForm;
