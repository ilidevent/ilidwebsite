import React from "react";
import SpeakerBox from "./SpeakerBox";
import styles from "../../styles/ReUsables/about.module.scss";

const SpeakerWrapper = () => {
  return (
    <div className={styles.sbw__wrapper}>
      <SpeakerBox />
    </div>
  );
};

export default SpeakerWrapper;
