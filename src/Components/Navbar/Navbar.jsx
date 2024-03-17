import React from "react";
import Logo from "../../assets/IGSTUDIO.png";
import styles from "./Navbar.module.css";
import NavButton from "../NavButton/NavButton";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <img src={Logo} alt="XIGSTUDIO LOGO" width="143px" height="30.3px" />
      </div>
      <NavButton />
      <div className={styles.button_1}>
        <button className={styles.button}>Contact Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
