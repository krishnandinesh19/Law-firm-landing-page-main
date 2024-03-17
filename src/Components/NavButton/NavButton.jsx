import React from "react";
import styles from "./NavButton.module.css";

const NavButton = () => {
  return (
    <div>
      <button className={styles.btn}>Home</button>
      <button className={styles.btn}>Attorneys</button>
      <button className={styles.btn}>Practice Areas</button>
      <button className={styles.btn}>About Us</button>
    </div>
  );
};

export default NavButton;
