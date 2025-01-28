import React from "react";
import styles from "./Login.module.css";
import { MdEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import loginlogo from "../../assets/loginlogo.png";
const Login = () => {
  return (
    <div className={styles.main}>
      {/* Image */}

      <div className={styles.image}>
        <img src={loginlogo} alt="logo" />
      </div>

      {/* form container */}
      <div className={styles.formDiv}>
        <p className={styles.welcomeText}>Join with Us!😃</p>
        <div className={styles.formContainer}>
          {/* Email div */}
          <div className={styles.emaildiv}>
            <h4>Email</h4>
            <div className={styles.emailInput}>
              <MdEmail />
              <input type="email" placeholder="Email" />
            </div>
          </div>

          {/* password Div */}

          <div className={styles.passdiv}>
            <h4>Password</h4>
            <div className={styles.passInput}>
              <MdPassword />
              <input type="password" placeholder="Password" />
            </div>
          </div>

          {/* Login button */}
          <button className={styles.loginbtn}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
