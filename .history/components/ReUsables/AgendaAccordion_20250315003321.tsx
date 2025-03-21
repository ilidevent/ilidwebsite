import React from "react";
import styles from "../../styles/ReUsables/agendaaccordion.module.scss";

const AgendaAccordion = () => {
  return (
    <div className={styles.aa__wrapper}>
      <div className={styles.aaw__left}>
        <div className={styles.al__date}>
          <span className={styles.aw__day}>Fri</span>
          <span className={styles.aw__date}>21</span>
        </div>
        <div className={styles.aw__separator}></div>
        <div className={styles.aw__details}>
          <div className={styles.aw__infoone}>
            <span className={styles.aw__svg}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#000"
                  d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"
                ></path>
              </svg>
            </span>
            <p className={styles.aw__text}>12:30 - 14:00</p>
          </div>
          <div className={styles.aw__infoone}>
            <span className={styles.aw__svg}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M23.424 41.817L24 41zm1.152 0l.004-.002l.01-.007l.03-.023l.118-.085q.152-.111.43-.324c.368-.282.89-.697 1.513-1.23a43.4 43.4 0 0 0 4.575-4.54C34.564 31.78 38 26.32 38 20.076c0-3.73-1.474-7.31-4.098-9.95A13.96 13.96 0 0 0 24 6a13.96 13.96 0 0 0-9.902 4.125A14.12 14.12 0 0 0 10 20.077c0 6.243 3.436 11.703 6.744 15.529a43.4 43.4 0 0 0 4.575 4.54c.624.533 1.145.948 1.513 1.23a26 26 0 0 0 .547.41l.032.022l.009.007l.004.002c.345.243.807.243 1.152 0M24 41l.576.817zm5-21a5 5 0 1 1-10 0a5 5 0 0 1 10 0"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <p className={styles.aw__text}>Amphi 100 Reception</p>
          </div>
        </div>
      </div>
      <div className={styles.aaw__right}></div>
    </div>
  );
};

export default AgendaAccordion;
