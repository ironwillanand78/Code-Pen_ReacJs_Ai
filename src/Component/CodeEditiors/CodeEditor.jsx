import styles from "./codeeditor.module.css";
import React, { useState, useCallback } from "react";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import Result from "./Result";
import CodeMirror from "@uiw/react-codemirror";
import Navbar from "./Navbar";
const CodeEditor = () => {
  const [html_edit, setHtml_Edit] = useState("");
  const [css_edit, setCss_Edit] = useState("");
  const [js_edit, setJs_Edit] = useState("");

  // Change handlers
  const onChangeHtml = useCallback((value) => setHtml_Edit(value), []);
  const onChangeCss = useCallback((value) => setCss_Edit(value), []);
  const onChangeJavaScript = useCallback((value) => setJs_Edit(value), []);

  // Construct the live HTML document
  const srcCode = `
  <html>
      <body>${html_edit}</body>
      <style>${css_edit}</style>
      <script>${js_edit}</script>
  </html>`;
  return (
    <div>
      {/* Navbar */}
      <Navbar
        htmlCode={html_edit}
        cssCode={css_edit}
        jsCode={js_edit}
        output={srcCode}
      />

      {/* Main Content */}
      <div className={styles.container}>
        {/* Code Editors */}
        <div className={styles.editorGrid}>
          {/* HTML Editor */}
          <div className={styles.editorBox}>
            <h2>HTML</h2>
            <CodeMirror
              className={styles.codeEditor}
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>

          {/* CSS Editor */}
          <div className={styles.editorBox}>
            <h2>CSS</h2>
            <CodeMirror
              className={styles.codeEditor}
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>

          {/* JavaScript Editor */}
          <div className={styles.editorBox}>
            <h2>JavaScript</h2>
            <CodeMirror
              className={styles.codeEditor}
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>

        {/* Result Section */}
        <Result srcCode={srcCode} />
      </div>
    </div>
  );
};

export default CodeEditor;
