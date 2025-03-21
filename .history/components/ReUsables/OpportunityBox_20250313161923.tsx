import React from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import IMAGE from "../../public/images/speaker.jpg";
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
        <span>Industry Leading Speakers</span>
        <p>
          Hear from top experts innovating infrastructure and sustainable
          development in engaging sessions.
        </p>
      </div>
      <div className={styles.obimage__wrapper}>
        <div className={styles.ob__image}>
          <Image fill quality={100} alt="Speaker" src={IMAGE} />
        </div>
        <div className={styles.overlay}></div>
        {boxData.linkData <Link href="/speakers" className={styles.button__fill}>Become a speaker</Link>
      </div>
    </div>
  );
};

export default OpportunityBox;
