import { useState } from "react";
import FormInput from "../../FormInput/FormInput";
import StyledButton from "../../StyledButton/StyledButton";
import "../Form.css";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../../providers/UserProvider";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useUser();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const user = await response.json();
        console.log("response je ok");
        const cookies = new Cookies();
        cookies.set("token", user.token, {
          path: "/",
          sameSite: "None",
          secure: true,
        });

        login(user);
        console.log(user);
        navigate("/home");
      } else {
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleLogin}>
      <FormInput
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        type="password"
        placeholder="Lozinka"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <StyledButton styleType="primary" text="Prijava" />
    </form>
  );
};

export default LoginForm;
