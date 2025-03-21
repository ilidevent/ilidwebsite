import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";
import styles from "../../styles/ReUsables/dontmissbox.module.scss";


interface MissProps{
  image: StaticImageData,
  heading: string,
  text: string,
  link?: {}
}

const DontMissBox = ({data}: {data:  MissProps}) => {
  return (
    <div className={styles.dmb__wrapper}>
      <div className={styles.dmw__image}>
        <Image fill quality={100} alt={data.heading} src={data.image} />
      </div>
      <div className={styles.dm__text}>
        <span>{data.heading}</span>
        <p>
          {data.text}
        </p>
      </div>
    </div>
  );
};

export default DontMissBox;
