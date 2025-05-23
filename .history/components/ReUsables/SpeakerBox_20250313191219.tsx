import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StaticImageData } from "next/image";
import styles from "../../styles/ReUsables/speaker.module.scss";

interface SpeakerProps{
  image: StaticImageData;
  name: string;
  position: string;
  roles: string[];
}


const SpeakerBox = ({boxData}: {boxData: SpeakerProps}) => {
  return (
    <div className={styles.speaker__box}>
      <div className={styles.speaker__image}>
        <Image fill quality={100} alt={boxData.name} src={boxData.image} />
      </div>
      <div className={styles.sbackground}>
        <div className={styles.sback__content}>
          <p>{boxData.name}</p>
          <span>{boxData.position}</span>
        </div>
      </div>
    </div>
  );
};

export default SpeakerBox;
