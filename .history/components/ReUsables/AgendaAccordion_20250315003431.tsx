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
            <span className={`styles.aw__svg}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  fill="#000"
                  d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
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
