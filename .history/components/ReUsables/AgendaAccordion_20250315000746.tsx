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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                <path
                  fill="#000"
                  fillRule="evenodd"
                  d="M8 1a5 5 0 0 0-5 5c0 1.14.56 2.488 1.377 3.934c.827 1.463 1.967 3.107 3.216 4.857l.407.57l.407-.57c1.25-1.75 2.389-3.394 3.216-4.857C12.44 8.488 13 7.14 13 6a5 5 0 0 0-5-5m0 2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
          <div className={styles.aw__infoone}>
            <span className={styles.aw__svg}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill="#000"
                  d="M16 2C8.4 2 2 8.4 2 16s6.4 14 14 14s14-6.4 14-14S23.6 2 16 2m4.587 20L15 16.41V7h2v8.582l5 5.004z"
                ></path>
                <path
                  fill="none"
                  d="M20.587 22L15 16.41V7h2v8.582l5 5.005z"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className={styles.aaw__right}></div>
    </div>
  );
};

export default AgendaAccordion;
