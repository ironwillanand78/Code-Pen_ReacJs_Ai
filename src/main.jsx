import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { Provider } from "react-redux";
import Store from "./Context/Store.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <Router>
        {" "}
        <App />
      </Router>
    </Provider>
  </StrictMode>
);
