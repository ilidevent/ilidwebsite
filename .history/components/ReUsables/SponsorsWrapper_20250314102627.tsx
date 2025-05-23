import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/partner.png";
import styles from "../../styles/ReUsables/sponsorwrapper.module.scss";

const SponsorsWrapper = () => {
  return (
    <div className={styles.partner__container}>
      <div className={styles.partner__wrapper}>
        <div className={styles.partneri__wrapper}>
          <div className={styles.partner__image}>
            <Image fill quality={100} alt="Partner Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsWrapper;
