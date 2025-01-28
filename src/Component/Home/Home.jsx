import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./home.module.css";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { MdHome } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import Projects from "../Project/Projects";
import Login from "../SignUp/Login";

const Home = () => {
  const [ischeked, setIsChecked] = useState(false);

  // checking for user

  const [user, setUser] = useState("");

  const Handleleftidewidth = () => {
    setIsChecked(!ischeked);
  };
  return (
    <div className={styles.mainContainer}>
      {/* Left part Main screen */}
      <div
        className={styles.leftside}
        style={{ width: ischeked ? "1%" : "20%" }}
      >
        <div className={styles.anchortag}>
          <HiChevronDoubleLeft
            className={styles.checktag}
            onClick={() => {
              Handleleftidewidth();
            }}
          />
        </div>
        <div
          className={styles.logodiv}
          style={{ display: ischeked ? "none" : null }}
        >
          {/* Add logo */}
          <Link to={"/home"}>
            <img src={logo} />
          </Link>

          {/* Initial text */}
          <p>Try Our Online Editor</p>

          <div className={styles.codingText}>Start Coding</div>
          {/* Home button  */}

          <Link to={"/home/projects"} className={styles.link}>
            <div className={styles.homediv}>
              <MdHome /> <p>Home</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Right part main screen */}
      <div className={styles.rightside}>
        {/* Right side top part */}

        <div className={styles.rightSideTopPart}>
          <div className={styles.search}>
            <FaSearch className={styles.searchIcon} />
            <input type="text" placeholder="Search here..." />
          </div>

          {/* If user is not present  */}

          {!user && (
            <div className={styles.auth}>
              <Link to={"/home/auth"} className={styles.signUpLink}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
        <div className={styles.rightSideBottomPart}>
          <Routes>
            <Route path="/*" element={<Projects />} />
            <Route path="/auth" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Home;
