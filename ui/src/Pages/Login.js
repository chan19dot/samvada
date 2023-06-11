import { useState } from "react";
import styles from "./Login.module.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (evt, type) => {
    if (type === "email") {
      setEmail(evt.target.value);
    } else if (type === "password") {
      setPassword(evt.target.value);
    }
  };
  return (
    <div className={styles["LoginScreen"]}>
      <h1>Welcome</h1>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          console.log(email, password);
        }}
      >
        <div className={styles["input"]}>
          <input
            id="email"
            type="email"
            value={email}
            placeholder="email"
            onChange={(event) => {
              handleChange(event, "email");
            }}
          ></input>
        </div>
        <div className={styles["input"]}>
          <input
            id="password"
            type="password"
            value={password}
            placeholder="password"
            onChange={(event) => {
              handleChange(event, "password");
            }}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
