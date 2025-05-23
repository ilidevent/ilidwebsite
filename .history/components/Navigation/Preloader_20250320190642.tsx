import React from "react";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = ({
  setAnimation,
}: {
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className={styles.preloader}>
      <div className={styles.preload__home}>
        <div className={styles.ilid}>ILID 2025</div>
        <div className={styles.loader}>
          <span className={styles.percentage}>ILID 2025 100%</span>
          <div className={styles.loading}>
            <span className={styles.inside}></span>
          </div>
        </div>
      </div>
      <div className={styles.preload__other}></div>
    </div>
  );
};

export default Preloader;
