import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import SUMMIT from "../../public/svg/summit.svg";
import styles from "../../styles/ReUsables/aboutbox.module.scss";


interface BoxProps {
  image: StaticImageData,
    aspectRatio: string,
    name: string,
    text: string
}

const AboutBox = ({boxData}: {boxData: BoxProps}) => {
  return (
    <div className={styles.aboutbox}>
      <div className={styles.aboutb__image} style={{aspectRatio: boxData.aspectRatio }}>
        <Image fill quality={100} alt={"Summit Icon"} src={SUMMIT} />
      </div>
      <div className={styles.about__content}>
        <span>ILID Summit</span>
        <p>
          Participants engage with industry experts through panels,
          presentations, and networking to explore challenges and sustainable
          solutions.
        </p>
      </div>
    </div>
  );
};

export default AboutBox;
