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
            <div
              className={`${styles.checkbox} ${
                activeBox ? styles.active__box : ""
              }`}
              onClick={() => setActiveBox(!activeBox)}
            >
              <div className={styles.checkbox__content}>
                <span className={styles.svg}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      fill="#fff"
                      d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
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
        <button
          className={styles.submit}
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
        >
          <span>{buttonText}</span>

          <div className={styles.sub__right}>
            {isSubmitting ? (
              <span className={styles.spinner}></span>
            ) }
          </div>
        </button>
      </form>
    </div>
  );
};

export default AttendForm;
