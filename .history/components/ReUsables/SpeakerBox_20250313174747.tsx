import React from "react";
import Image from "next/image";
import IMAGE from "../../public/images/speaker.jpg";
import styles from "../../styles/ReUsables/speaker.module.scss";

interface Spea


const SpeakerBox = () => {
  return (
    <div className={styles.speaker__box}>
      <div className={styles.speaker__image}>
        <Image fill quality={100} alt="Speaker" src={IMAGE} />
      </div>
      <div className={styles.sbackground}>
        <div className={styles.sback__content}>
          <p>Fankam Louisa</p>
          <span>Founder GICSA</span>
        </div>
      </div>
    </div>
  );
};

export default SpeakerBox;
