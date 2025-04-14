"use client";

import React, { useState } from "react";
import { SpeakerData } from "@/utils";
import SpeakerBox from "./SpeakerBox";
import { AnimatePresence } from "framer-motion";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

const SpeakerWrapper = () => {
  const [activeButton, setActiveButton] = useState("speaker");

  const sectionData = SpeakerData.filter((item) =>
    item.roles.includes(activeButton)
  );
  
  return (
    <div className={styles.sb__wrapper}>
      <div className={styles.work__buttons}>
        <div
          className={`${styles.wbuttons} ${
            activeButton === "speaker" ? styles.active__button : ""
          }`}
          onClick={() => setActiveButton("speaker")}
        >
          Speakers
        </div>
        <div
          className={`${styles.wbuttons} ${
            activeButton === "workshop" ? styles.active__button : ""
          }`}
          onClick={() => setActiveButton("workshop")}
        >
          Workshops
        </div>
      </div>
      <div className={styles.sbw__wrapper}>
        <AnimatePresence>
          {sectionData.map((data) => (
            <SpeakerBox boxData={data} key={data.id}/>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default SpeakerWrapper;
