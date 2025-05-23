"use client";

import React, { useState, useRef } from "react";
import FormInput from "../ReUsables/FormInput";
import { AttendFormFields } from "@/utils";
import styles from "../../styles/AttendPage/attendform.module.scss";

const AttendForm = () => {
  const [buttonText, setButtonText] = useState("Send message");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <div className={styles.aform__wrapper}>
      <form ref={formRef}>
        <div className={styles.form__top}>
          <div className={styles.form__forms}>
            {AttendFormFields.map((data, i) => (
              <FormInput data={data} key={i} isSubmitting={isSubmitting} />
            ))}
          </div>
          <div className={styles.checkbox__wrapper}>

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
