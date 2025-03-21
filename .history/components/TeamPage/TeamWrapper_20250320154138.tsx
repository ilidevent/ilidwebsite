"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { speakerAnimation } from "@/animations";
import { TeamMembersData } from "@/utils";
import IMAGE from "../../public/images/speaker.jpg";
import { AnimatePresence } from "framer-motion";
import styles from "../../styles/ReUsables/teamwrapper.module.scss";
import Link from "next/link";

const TeamWrapper = () => {
  const [activeModal, setActiveModal] = useState(false);
  const [activeTeam, setActiveTeam] = useState(0);
  const activeTeamData = TeamMembersData[activeTeam];

  return (
    <>
      <div className={styles.team__wrapper}>
        <div className={styles.tw__top}>
          <AnimatePresence>
            {TeamMembersData.map((data, i) => (
              <motion.div
                variants={speakerAnimation}
                initial="initial"
                animate="enter"
                exit="closed"
                className={styles.speaker__box}
                key={data.id}
              >
                <div className={styles.speaker__image}>
                  <Image
                    fill
                    quality={100}
                    alt={data.name}
                    src={data.imageData.image}
                  />
                </div>
                <div className={styles.sbackground}>
                  <div className={styles.sback__content}>
                    <p>{data.name}</p>
                    <span>{data.role}</span>
                  </div>
                  <div
                    className={styles.svgg}
                    onClick={() => {
                      setActiveTeam(0);
                      setActiveModal(true);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="fff6ed"
                        d="M277.333 64v170.666H448v42.667H277.333V448h-42.666l-.001-170.667H64v-42.666l170.666-.001V64z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className={styles.tw__bottom}></div>
      </div>
      <div
        className={`${styles.team__modal} ${
          activeModal ? styles.active__modal : ""
        }`}
      >
        <div className={styles.modal__main}>
          <div className={styles.tm__top}>
            <div className={styles.mimage}>
              <Image
                fill
                quality={100}
                alt={activeTeamData.name}
                src={activeTeamData.imageData.image}
              />
            </div>
            <div className={styles.tm__info}>
              <p className={styles.tm__name}>{activeTeamData.name}</p>
              <span className={styles.tm__position}>{activeTeamData.role}</span>
            </div>
          </div>
          <div className={styles.tm__bottom}>
            <span className={styles.bio__head}>Quick Biography</span>
            <p className={styles.bio}>{activeTeamData.bio}</p>
          </div>
          {activeTeamData.linkData && (
            <div className={styles.in__profile}>
              <Link href={activeTeamData.linkData.link}>LinkedIn</Link>
            </div>
          )}
          <div className={styles.close} onClick={() => setActiveModal(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="#FFF6ED"
                fillRule="evenodd"
                d="M420.48 121.813L390.187 91.52L256 225.92L121.813 91.52L91.52 121.813L225.92 256L91.52 390.187l30.293 30.293L256 286.08l134.187 134.4l30.293-30.293L286.08 256z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamWrapper;
