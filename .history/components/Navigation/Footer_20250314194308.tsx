import React from "react";
import Image from "next/image";
import IMAGE from "../../public/svg/heroback.svg";
import LOGO from "../../public/svg/whitelogo.svg";
import styles from "../../styles/Navigation/footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer__section}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__top}>
          <div className={styles.ft__top}>
            <div className={styles.ft__image}>
              <Image fill quality={100} alt="ILID Logo" src={LOGO} />
            </div>
            <p className={styles.loc__venue}>
              <span> 25th-27th & 30th April, 2025</span>
              <br />
              <span>NATIONAL ADVANCED SCHOOL OF PUBLIC WORKS</span>
            </p>
          </div>
          <div className={styles.ft__bottom}>
            <div className={styles.ftb__left}>
              <p>
                Our flagship infrastructure and development event premieres in
                Yaounde this 2025.
              </p>
              <div className={styles.svg}>

              </div>
            </div>
            <div className={styles.ftb__right}></div>
          </div>
        </div>
        <div className={styles.footer__bottom}></div>
      </div>
      <div></div>
    </footer>
  );
};

export default Footer;
