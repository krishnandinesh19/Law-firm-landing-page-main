import React from "react";
import styles from "./Photo.module.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";
const Area = () => {
  return (
    <div className={styles.main}>
      <h1>Area of Practices</h1>
      <div className={styles.gridcontainer}>
        <div className={styles.griditem}>
          <img src={img1} alt="" />
        </div>
        <div className={styles.griditem}>
          <img src={img2} alt="" />
        </div>
      </div>
      <div className={styles.gridcontainer1}>
        <div className={styles.griditem}>
          <img src={img3} alt="" />
        </div>
        <div className={styles.griditem}>
          <img src={img4} alt="" />
        </div>
      </div>
      <div className={styles.gridcontainer}>
        <div className={styles.griditem}>
          <img src={img6} alt="" />
        </div>
        <div className={styles.griditem}>
          <img src={img5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Area;
