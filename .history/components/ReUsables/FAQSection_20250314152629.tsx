import React from "react";
import { FAQData } from "@/utils";
import styles from "../../styles/ReUsables/faqsection.module.scss";

const FAQSection = () => {
  return (
    <div className={styles.faqwrapper}>
      {
        
      }
      <div className={styles.accordion__item}>
        <div className={styles.a__header}>
          <p className={styles.p__tag}>How do I register for ILID 2025?</p>
          <span className={styles.svg}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path
                fill="currentColor"
                d="m4.22 10.78l-1.44 1.44l12.5 12.5l.72.686l.72-.687l12.5-12.5l-1.44-1.44L16 22.564z"
              ></path>
            </svg>
          </span>
        </div>
        <div className={styles.a__content}>
          <p className={styles.p__content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
