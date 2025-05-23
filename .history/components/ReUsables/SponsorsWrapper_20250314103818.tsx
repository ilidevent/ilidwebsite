import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/partner.png";
import styles from "../../styles/ReUsables/sponsorwrapper.module.scss";

const SponsorsWrapper = () => {
  return (
    <div className={styles.partner__container}>
      <div className={styles.partner__wrapper}>
        <div className={styles.partneri__wrapper}>
          <div className={styles.partner__image} style={{width: "75%", aspectRatio: "1/1",}}>
            <Image fill quality={100} alt="Partner Image" src={IMAGE} />
          </div>
        </div>
        <div className={styles.partner__content}>
          <div className={styles.left__button}></div>
          <p className={styles.partner__type}></p>
        </div>
      </div>
    </div>
  );
};

export default SponsorsWrapper;
