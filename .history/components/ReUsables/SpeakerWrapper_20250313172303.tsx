"use client";

import React, {useState} from "react";
import SpeakerBox from "./SpeakerBox";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

const SpeakerWrapper = () => {
  return (
    <div className={styles.sbw__wrapper}>
      <div className={styles.work__buttons}>
        <div>Speakers</div>
        <div>Works</div>
      </div>
      <SpeakerBox />
    </div>
  );
};

export default SpeakerWrapper;
