import { Navigate, Route, Routes } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./Component/Home/Home";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Routes>
        <Route path="/home/*" element={<Home />} />
        <Route path="*" element={<Navigate to={"/home"} />} />
      </Routes>
    </div>
  );
}

export default App;
