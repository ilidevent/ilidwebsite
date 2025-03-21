"use client";

import React, { useState } from "react";
import SpeakerBox from "./SpeakerBox";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

const SpeakerWrapper = () => {
  return (
    <div className={styles.sb__wrapper}>
      <div className={styles.work__buttons}>
        <div className={styles.wbuttons}>Speakers</div>
        <div className={styles.wbuttons}>Workshops</div>
      </div>
      <div >
        <SpeakerBox />
      </div>
    </div>
  );
};

export default SpeakerWrapper;
