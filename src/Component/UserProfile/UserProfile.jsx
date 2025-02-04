import { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./userprofile.module.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { signOutUser } from "../../firebase_config";
import { Link } from "react-router-dom";
const UserProfile = () => {
  const user = useSelector((state) => state.user?.user);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.parentDiv}>
      <div className={styles.userDiv} onClick={() => setIsOpen(!isOpen)}>
        {user?.photoURL ? (
          <img
            src={user?.photoURL}
            alt={user?.displayName}
            referrerPolicy="no-referrer"
          />
        ) : (
          <p>{user?.email[0]}</p>
        )}
      </div>

      <div className={styles.downArrow} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FaChevronUp className={styles.ghumJao} />
        ) : (
          <FaChevronDown className={styles.ghumJao} />
        )}
      </div>

      {isOpen && (
        <div className={styles.dropDownMenu}>
          <Link to={"/home/UserProfile"}>
            <p>👤 Profile</p>
          </Link>
          <Link to={"/home/collection"}>
            <p>📚 Collections</p>
          </Link>
          <Link to={"/home/projects"}>
            <p>🗂️ Project</p>
          </Link>
          <Link onClick={signOutUser}>
            <p>🚪 Logout</p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
