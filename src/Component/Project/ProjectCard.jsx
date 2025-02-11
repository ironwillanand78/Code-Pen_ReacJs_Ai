import React, { useState, useEffect } from "react";
import styles from "./projectCard.module.css";

const ProjectCard = ({ project }) => {
  const { title, html, css, js } = project;
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const combinedCode = `
      <html>
        <head>
          <style>${css}</style>
        </head>
        <body>
          ${html}
          <script>${js}</script>
        </body>
      </html>
    `;
    setSrcDoc(combinedCode);
  }, [html, css, js]);

  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <div className={styles.codeContainer}>
        <div className={styles.codeBox}>
          <pre>{html}</pre>
        </div>
        <div className={styles.codeBox}>
          <pre>{css}</pre>
        </div>
        <div className={styles.codeBox}>
          <pre>{js}</pre>
        </div>
      </div>
      <div className={styles.outputContainer}>
        <h4>Output</h4>
        <iframe
          title={title}
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          className={styles.outputFrame}
        />
      </div>
    </div>
  );
};

export default ProjectCard;
