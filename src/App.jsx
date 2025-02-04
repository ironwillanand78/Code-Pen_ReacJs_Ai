import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styles from "./App.module.css";
import Home from "./Component/Home/Home";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase_config";
import { doc, setDoc } from "firebase/firestore";
import Animation from "./Component/Animation";
import { useDispatch } from "react-redux";
import { SET_USER } from "./Context/Actions/userActions";
const App = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // adding the loading animation in time the value is fected from the redux store

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        console.log(userCred?.providerData[0]);
        setDoc(doc(db, "users", userCred?.uid), userCred?.providerData[0]).then(
          () => {
            // send the value to redux store by using dispatch....
            dispatch(SET_USER(userCred?.providerData[0]));
            navigate("/home/projects", { replace: true });
          }
        );
      } else {
        navigate("home/auth", { replace: true });
      }
      setInterval(() => {
        setIsLoading(false);
      }, 2000);
    });
    return () => unsubscribe();
  }, []);
  return (
    <>
      {isLoading ? (
        <div className={styles.loaderDiv}>
          <Animation />
        </div>
      ) : (
        <div className={styles.mainContainer}>
          <Routes>
            <Route path="/home/*" element={<Home />} />
            <Route path="*" element={<Navigate to={"/home"} />} />
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
