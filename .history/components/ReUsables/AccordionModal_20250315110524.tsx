import React from "react";
import ButtonTwo from "./ButtonTwo";
import styles from "../../styles/ReUsables/accordionmodal.module.scss";

const AccordionModal = () => {
  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.am__wrapper}>
        <div className={styles.am__left}>
          <div className={styles.al__topone}>
            <p className={styles.day__date}></p>
            <div className={styles.al__infoone}>
              <span className={styles.al__svg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"
                  ></path>
                </svg>
              </span>
              <p className={styles.al__text}>12:30 - 14:00</p>
            </div>
            <div className={styles.al__infoone}>
              <span className={`${styles.al__svg} ${styles.location}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                  ></path>
                </svg>
              </span>
              <p className={styles.al__text}>Amphi 100 Reception</p>
            </div>
          </div>
          <div className={styles.al__toptwo}>
            <div className={styles.}>

            </div>
          </div>
          <div className={styles.al__bottom}></div>
        </div>
        <div className={styles.am__right}></div>
      </div>
    </div>
  );
};

export default AccordionModal;
