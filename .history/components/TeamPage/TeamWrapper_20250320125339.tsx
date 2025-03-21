import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { speakerAnimation } from "@/animations";
import IMAGE from "../../public/images/speaker.jpg";
import { AnimatePresence } from "framer-motion";
import { StaticImageData } from "next/image";
import styles from "../../styles/ReUsables/teamwrapper.module.scss";

const TeamWrapper = () => {
  const boxData = {
    id: "i1",
    name: "Fankam Louisa",
    image: IMAGE,
    position: "GICSA Founder & CEO",
    bio: "Louisa is a driven, resourceful team member passionate about sustainable infrastructure and community development. With a background in civil engineering and a keen interest in innovative design, she bridges theory with practice. Her dedication to empowering youth and creating lasting impact fuels her work at ILID 2025. Louisa brings energy, creativity, and a collaborative spirit to every project to change.",
  };
  return (
    <div className={styles.team__wrapper}>
      <div className={styles.tw__top}>
        <AnimatePresence>
          <motion.div
            variants={speakerAnimation}
            initial="initial"
            animate="enter"
            exit="closed"
            className={styles.speaker__box}
          >
            <div className={styles.speaker__image}>
              <Image
                fill
                quality={100}
                alt={boxData.name}
                src={boxData.image}
              />
            </div>
            <div className={styles.sbackground}>
              <div className={styles.sback__content}>
                <p>{boxData.name}</p>
                <span>{boxData.position}</span>
              </div>
            </div>
            <div className={styles.svgg}>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className={styles.tw__bottom}></div>
    </div>
  );
};

export default TeamWrapper;
