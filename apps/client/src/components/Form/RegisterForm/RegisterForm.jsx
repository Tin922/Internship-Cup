import FormInput from "../../FormInput/FormInput";
import StyledButton from "../../StyledButton/StyledButton";
import styles from "./RegisterForm.module.css";
import "../Form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !dateOfBirth || !email || !password) {
      return;
    }

    const formattedDateOfBirth = formatDateOfBirth(dateOfBirth);

    try {
      const response = await fetch("http://localhost:3000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          password,
          email,
          dateOfBirth: formattedDateOfBirth,
        }),
      });

      if (response.ok) {
        navigate("/login");
      } else {
        throw new Error("Error when trying to register");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    const formatDateOfBirth = (dateString) => {
      const date = new Date(dateString);
      const year = date.getFullYear();
      let month = (1 + date.getMonth()).toString();
      month = month.length > 1 ? month : "0" + month;
      let day = date.getDate().toString();
      day = day.length > 1 ? day : "0" + day;
      return `${year}-${month}-${day}`;
    };
  };
  return (
    <form className="form" onSubmit={handleLogin}>
      <FormInput
        type="text"
        placeholder="Ime"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <FormInput
        type="text"
        placeholder="Prezime"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <FormInput
        type="date"
        placeholder="Godina rođenja"
        value={dateOfBirth}
        onChange={(e) => setDateOfBirth(e.target.value)}
      />
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton styleType="primary" text="Register" />
    </form>
  );
};

export default RegisterForm;
