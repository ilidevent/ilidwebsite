import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/attend.jpg";
import styles from "../../styles/ReUsables/dontmissbox.module.scss";

const DontMissBox = () => {
  return (
    <div className={styles.dmb__wrapper}>
      <div className={styles.dmw__image}>
        <Image fill quality={100} alt="Dont Miss" src={IMAGE} />
      </div>
      <div className={styles.dm__text}>
        <span>Gain actionable insights</span>
        <p>
          Hear from top experts innovating infrastructure and sustainable
          development in engaging sessions.
        </p>
      </div>
    </div>
  );
};

export default DontMissBox;
