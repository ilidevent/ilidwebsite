"use client";

import React, { useState } from "react";
import SpeakerBox from "./SpeakerBox";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

const SpeakerWrapper = () => {
  const [activeButton, setActiveButton] = useState("speaker");

  return (
    <div className={styles.sb__wrapper}>
      <div className={styles.work__buttons}>
        <div className={`styles.wbuttons {}`} onClick={() => setActiveButton("speaker")}>Speakers</div>
        <div className={`styles.wbuttons`} onClick={() => setActiveButton("workshop")}>Workshops</div>
      </div>
      <div className={styles.sbw__wrapper}>
        <SpeakerBox />
      </div>
    </div>
  );
};

export default SpeakerWrapper;
