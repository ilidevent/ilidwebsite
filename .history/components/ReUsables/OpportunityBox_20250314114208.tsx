import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import styles from "../../styles/ReUsables/opportunitybox.module.scss";

interface BoxContentProps{
  heading: string;
  text: string;
  image: StaticImageData;
  linkData?: {
    name: string;
    link: string;
  }
}


const OpportunityBox = ({boxData}: {boxData: BoxContentProps}) => {
  return (
    <div className={styles.obox__wrapper}>
      <div className={styles.ob__content}>
        <span>{boxData.heading}</span>
        <p>
          {boxData.text}
        </p>
      </div>
      <div className={styles.obimage__wrapper}>
        <div className={styles.ob__image}>
          <Image fill quality={100} alt={boxData.heading} src={boxData.image} />
        </div>
        <div className={styles.overlay}></div>
        {boxData.linkData && <Link href={boxData.linkData.link} className={styles.button__fill}>Become a speaker</Link>}
      </div>
    </div>
  );
};

export default OpportunityBox;
