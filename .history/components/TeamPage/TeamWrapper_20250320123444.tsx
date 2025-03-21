import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { speakerAnimation } from "@/animations";
import IMAGE from "../../public/images/speaker.jpg"
import { StaticImageData } from "next/image";
import styles from "../../styles/ReUsables/teamwrapper.module.scss";

const TeamWrapper = () => {
  const boxData = {
    id: "i1",
    name: "Fankam Louisa",
    image: IMAGE,
    position: "GICSA Founder"

  }
  return (
    <div className={styles.team__wrapper}>
      <div className={styles.tw__top}>
        <motion.div
          variants={speakerAnimation}
          initial="initial"
          animate="enter"
          exit="closed"
          className={styles.speaker__box}
        >
          <div className={styles.speaker__image}>
            <Image fill quality={100} alt={boxData.name} src={boxData.image} />
          </div>
          <div className={styles.sbackground}>
            <div className={styles.sback__content}>
              <p>{boxData.name}</p>
              <span>{boxData.position}</span>
            </div>
          </div>
        </motion.div>
      </div>
      <div className={styles.tw__bottom}></div>
    </div>
  );
};

export default TeamWrapper;
