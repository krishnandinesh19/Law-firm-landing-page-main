import React from "react";
import person from "../../assets/person.png";
import emaillog from "../../assets/Messagelogo.png";
import styles from "./Landing.module.css";
import Navbar from "../Navbar/Navbar";

const Landing = () => {
  return (
    <div className={styles.parent}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.comm}>
          <p className={styles.heading}>You don’t have to</p>
          <p className={styles.highlite}>Fight them Alone.</p>
          <p className={styles.subhead}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit blandit,
            curabitur sodales conubia ut inceptos faucibus himenaeos tortor
            eget, hac massa gravida arcu interdum proin curae.
          </p>
          <div className={styles.wrapper}>
            <img src={emaillog} alt="Email log" />
            <input type="text" placeholder="      Enter your email" />
            <button>Let's Talk</button>
          </div>
        </div>
        <div>
          <div className={styles.lawimg}>
            <img src={person} alt="Law-img" width="350px" height="480px" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;
