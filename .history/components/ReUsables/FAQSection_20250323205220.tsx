"use client";

import React, { useState } from "react";
import DoubleTextLink from "./DoubleTextLink";
import { FAQData } from "@/utils";
import styles from "../../styles/ReUsables/faqsection.module.scss";

const FAQSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(-1);

  const handleAccordionClick = (index: number) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <div className={styles.faqwrapper}>
      {FAQData.map((data, i) => (
        <div className={styles.accordion__item} key={data.id} onClick={() => handleAccordionClick(i)}>
          <div className={styles.a__header}>
            <p className={styles.p__tag}>{data.question}</p>
            <span className={`${styles.svg} ${activeAccordion===i ? styles.active__svg : ""}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                <path
                  fill="currentColor"
                  d="m4.22 10.78l-1.44 1.44l12.5 12.5l.72.686l.72-.687l12.5-12.5l-1.44-1.44L16 22.564z"
                ></path>
              </svg>
            </span>
          </div>
          <div className={`${styles.a__content} ${activeAccordion===i ? styles.active__content : ""}`}>
            <p className={styles.p__content}>
              <DoubleTextLink text={data.answer} links={data.links}/>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQSection;
