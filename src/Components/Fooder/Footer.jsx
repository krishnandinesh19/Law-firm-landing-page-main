import React from "react";
import styles from "./Footer.css";
import Logo from "../../assets/IGSTUDIO.png";
import NavButton from "../NavButton/NavButton";
import { ReactComponent as Instagram } from "../../assets/instra.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Printrest } from "../../assets/x.svg";
const Footer = () => {
  return (
    <div className={styles.main}>
      <nav className="nav">
        <div>
          <img src={Logo} alt="XIGSTUDIO LOGO" width="140px" height="30.3px" />
        </div>
        <NavButton />
        <div className={styles.button_1}>
          <button>
            <Instagram />
          </button>
          <button>
            <Facebook />
          </button>
          <button>
            <Twitter />
          </button>
          <button>
            <Printrest />
          </button>
        </div>
      </nav>
      <div className="button_2">
        <p>© 2020 Acme. All right reserved. Privacy Policy Terms of Service</p>
      </div>
    </div>
  );
};

export default Footer;
