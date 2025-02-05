import React, { useState } from "react";
import styles from "./navbar.module.css";
import loginlogo from "../../assets/loginlogo.png";
import { MdCheck, MdEdit } from "react-icons/md";
import UserProfile from "../UserProfile/UserProfile";
import { useSelector } from "react-redux";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase_config";
const Navbar = ({ htmlCode, cssCode, jsCode, output }) => {
  const user = useSelector((state) => state.user?.user);
  const [title, setTitle] = useState("My Project");
  const [istitle, setIstitle] = useState(false);
  const toggleCheck = () => {
    setIstitle((prev) => !prev);
  };
  const saveProgress = async () => {
    const id = `${Date.now()}`;

    const _code = {
      id: id,
      title: title,
      html: htmlCode,
      css: cssCode,
      js: jsCode,
      output: output,
      user: user,
    };
    await setDoc(doc(db, "projects", id), _code)
      .then((res) => {})
      .catch((err) => console.log(err.message));
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.leftside}>
          <div className={styles.logoDiv}>
            <img src={loginlogo} alt="codePen" />
          </div>
          <div className={styles.projectDiv}>
            <div className={styles.inputDiv}>
              {istitle ? (
                <>
                  {" "}
                  <input
                    type="text"
                    placeholder="Your Project Name"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </>
              ) : (
                <>
                  <div className={styles.titlepara}>{title}</div>
                </>
              )}
              {istitle ? (
                <>
                  <MdCheck
                    className={styles.icon}
                    onClick={toggleCheck}
                    style={{ color: "green" }}
                  />
                </>
              ) : (
                <>
                  <MdEdit className={styles.icon} onClick={toggleCheck} />
                </>
              )}
            </div>
            <div className={styles.followDiv}>
              {user?.displayName
                ? user?.displayName
                : `${user?.email.split("@")[0]}`}
              <button className={styles.followBtn}>
                <i>+ Follow</i>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.rightside}>
          <button className={styles.saveBtn} onClick={saveProgress}>
            Save
          </button>
          <UserProfile />
        </div>
      </div>
    </>
  );
};

export default Navbar;
