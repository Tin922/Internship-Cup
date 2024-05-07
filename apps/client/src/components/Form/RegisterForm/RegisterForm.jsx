import FormInput from "../../FormInput/FormInput";
import StyledButton from "../../StyledButton/StyledButton";
import styles from "./RegisterForm.module.css";
import "../Form.css";

const RegisterForm = () => {
  return (
    <form className="form">
      <FormInput type="text" placeholder="Ime" />
      <FormInput type="text" placeholder="Prezime" />
      <FormInput type="date" placeholder="Godina rođenja" />
      <FormInput type="email" placeholder="Email" />
      <FormInput type="password" placeholder="Password" />
      <StyledButton styleType="primary" text="Register" />
    </form>
  );
};

export default RegisterForm;
