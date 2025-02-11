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
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");

  const toggleCheck = () => {
    setIstitle((prev) => !prev);
  };

  const saveProgress = async () => {
    if (!user) {
      setMessage("❌ Error: Please log in to save your project.");
      setMessageType("error");
      return;
    }

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

    try {
      await setDoc(doc(db, "projects", id), _code);
      setMessage("✅ Project saved successfully!");
      setMessageType("success");
    } catch (err) {
      console.error("Error saving project:", err);
      setMessage("❌ Failed to save project. Try again.");
      setMessageType("error");
    }

    // Hide message after 3 seconds
    setTimeout(() => setMessage(""), 3000);
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
                <input
                  type="text"
                  placeholder="Your Project Name"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              ) : (
                <div className={styles.titlepara}>{title}</div>
              )}
              {istitle ? (
                <MdCheck
                  className={styles.icon}
                  onClick={toggleCheck}
                  style={{ color: "green" }}
                />
              ) : (
                <MdEdit className={styles.icon} onClick={toggleCheck} />
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

      {message && (
        <div
          className={styles.messageBox}
          style={{
            textAlign: "center",
            padding: "10px",
            marginTop: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            color: messageType === "success" ? "green" : "red",
            backgroundColor: messageType === "success" ? "#d4edda" : "#f8d7da",
            border:
              messageType === "success" ? "1px solid green" : "1px solid red",
          }}
        >
          {message}
        </div>
      )}
    </>
  );
};

export default Navbar;
