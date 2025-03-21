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
    <>
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
                <div className={styles.svgg}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      fill="fff6ed"
                      d="M277.333 64v170.666H448v42.667H277.333V448h-42.666l-.001-170.667H64v-42.666l170.666-.001V64z"
                    ></path>
                  </svg>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className={styles.tw__bottom}></div>
      </div>
      <div className={styles.team__modal}>
        <div className={styles.modal__main}>
          <div className={styles.tm__top}>
            <div className={styles.mimage}>
              <Image fill quality={100} alt={boxData.name} src={IMAGE} />
            </div>
            <div className={styles.tm__info}>
              <p className={styles.tm__name}>{boxData.name}</p>
              <span className={styles.tm__position}>{boxData.position}</span>
            </div>
          </div>
          <div className={styles.tm__bottom}>
            <span className={styles.bio__head}>Quick Biography</span>
            <p className={styles.bio}>{boxData.bio}</p>
          </div>
        </div>
        <div className={styles.bio}>

        </div>
      </div>
    </>
  );
};

export default TeamWrapper;
