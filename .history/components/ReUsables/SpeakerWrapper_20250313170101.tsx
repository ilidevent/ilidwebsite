import React from "react";
import SpeakerBox from "./SpeakerBox";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

const SpeakerWrapper = () => {
  return (
    <div className={styles.sbw__wrapper}>
      <SpeakerBox />
    </div>
  );
};

export default SpeakerWrapper;
