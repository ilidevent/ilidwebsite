import React from "react";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = () => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preload__home}>
        <div>ILID 2025</div>
        <div className={styles.loader}>
          <span>Loading100%</span>
          <div className={styles.loading}>
            <span className={styles.insise}></span>
          </div>
        </div>
      </div>
      <div className={styles.preload__other}></div>
    </div>
  );
};

export default Preloader;
