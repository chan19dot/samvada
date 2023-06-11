import { useEffect, useState } from "react";
import Friend from "../Components/Friend";
import axios from "axios";
import { Profile } from "../Components/Profile";
import styles from "./dashboard.module.css";

export const DashBoard = () => {
  const [name, setName] = useState("");
  const getName = async () => {
    const response = await axios.get(
      "http://localhost:3001/api/friend/getName"
    );
    return response.data.name;
  };
  useEffect(() => {
    (async () => {
      const name = await getName();
      setName(name);
    })();
    document.title = `Hello ${name}`;
  });

  return (
    <div className={styles["sideScreen"]}>
      <div className={styles["leftScreen"]}>
        <Profile />
      </div>
      <div className={styles["rightScreen"]}>
        <Friend />
      </div>
    </div>
  );
};
