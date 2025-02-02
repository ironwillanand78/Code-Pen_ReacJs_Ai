import React, { useState } from "react";
import styles from "./Login.module.css";
import { MdEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import loginlogo from "../../assets/loginlogo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  auth,
  githubAuthProvider,
  googleAuthProvider,
} from "../../firebase_config";

const Login = () => {
  const [hasAccount, setHasAccount] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleAccount = () => {
    setHasAccount((prev) => !prev);
    setErrorMessage("");
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const googleLoginHadler = async () => {
    try {
      await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const githubLoginHandler = async () => {
    try {
      await signInWithPopup(auth, githubAuthProvider);
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const createUser = async () => {
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCred);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const loginUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setErrorMessage("");
    } catch (err) {
      setErrorMessage("Invalid email or password");
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.image}>
        <img src={loginlogo} alt="logo" />
      </div>

      <div className={styles.formDiv}>
        <p className={styles.welcomeText}>Join with Us! 😃</p>
        <div className={styles.formContainer}>
          <div className={styles.emaildiv}>
            <h4>Email</h4>
            <div className={styles.emailInput}>
              <MdEmail className={styles.icons} />
              <input type="email" placeholder="Email" onChange={emailHandler} />
            </div>
          </div>

          <div className={styles.passdiv}>
            <h4>Password</h4>
            <div className={styles.passInput}>
              <TbLockPassword className={styles.icons} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={passwordHandler}
              />
            </div>
          </div>

          {errorMessage && (
            <p style={{ color: "red", fontSize: "14px" }}>{errorMessage}</p>
          )}

          <div>
            {!hasAccount ? (
              <button className={styles.loginbtn} onClick={createUser}>
                {" "}
                Sign up{" "}
              </button>
            ) : (
              <button className={styles.loginbtn} onClick={loginUser}>
                Log in
              </button>
            )}
          </div>

          <div className={styles.accountDiv}>
            <p>
              {hasAccount
                ? "Doesn't have an account? "
                : "Already have an account? "}
              <span onClick={toggleAccount}>
                {hasAccount ? "Create here" : "Login here"}
              </span>
            </p>
          </div>

          <div className={styles.orDiv}>
            <div className={styles.firstOrDiv}></div>
            <p>OR</p>
            <div className={styles.secondOrDiv}></div>
          </div>

          <div className={styles.googleLoginDiv} onClick={googleLoginHadler}>
            <FcGoogle />
            <p>Sign In With Google</p>
          </div>

          <div className={styles.orDiv}>
            <div className={styles.firstOrDiv}></div>
            <p>OR</p>
            <div className={styles.secondOrDiv}></div>
          </div>

          <div className={styles.githubLoginDiv} onClick={githubLoginHandler}>
            <FaGithub />
            <p>Sign In With GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
