import React from "react";
import styles from "./result.module.css";
const Result = ({ srcCode }) => {
  return (
    <div className={styles.resultContainer}>
      <h2>Result</h2>
      <iframe
        className={styles.resultFrame}
        srcDoc={srcCode}
        title="output"
        sandbox="allow-scripts"
      ></iframe>
    </div>
  );
};

export default Result;
