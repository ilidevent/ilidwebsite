"use client";

import React, { useState, useRef } from "react";
import FormInput from "../ReUsables/FormInput";
import { AttendFormFields } from "@/utils";
import styles from "../../styles/AttendPage/attendform.module.scss";

const AttendForm = () => {
  const [buttonText, setButtonText] = useState("Send message");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBox, setActiveBox] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <div className={styles.aform__wrapper}>
      <form ref={formRef} className={styles.form}>
        <div className={styles.form__top}>
          <div className={styles.form__forms}>
            {AttendFormFields.map((data, i) => (
              <FormInput data={data} key={i} isSubmitting={isSubmitting} />
            ))}
          </div>
          <div className={styles.checkbox__wrapper}>
            <div className={styles.checkbox}>
              <div className={styles.checkbox__content}>
                <span className={styles.svg}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15">
                    <path
                      fill="#fff"
                      fillRule="evenodd"
                      d="M14.707 3L5.5 12.207L.293 7L1 6.293l4.5 4.5l8.5-8.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <span className={styles.checkbox__text}>
              To keep you informed about the latest updates on ILID 2025, please
              agree to receive information about our events by ticking this box.
            </span>
          </div>
        </div>
        <button type="submit" className={styles.submit} disabled={isSubmitting}>
          <span>{buttonText}</span>
        </button>
      </form>
    </div>
  );
};

export default AttendForm;
