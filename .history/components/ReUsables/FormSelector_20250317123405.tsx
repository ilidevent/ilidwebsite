"use client";

import React, { useState } from "react";
import styles from "../../styles/ReUsables/formselector.module.scss";


const FormSelector = () => {
  const selections = [
    "Please select",
    "Sponsorship",
    "Partnership"
  ]
  const [activeBox, setActiveBox] = useState(false)

  return (
    <div className={styles.select__wrapper}>
      <span className={styles.flabel}>What is your Inquiry?*</span>
      <div className={styles.finput} onClick={() => setActiveBox(!activeBox)}>
        <span className={styles.selection}>Please select</span>
        <div className={styles.select__wrapper}>
          {
            selections.map((data, i) => (
              <div className={styles.sbox}>

              </div>
            ))
          }
        </div>
      </div>
      <span className={styles.ferror}>Please select an inquiry</span>
    </div>
  );
};

export default FormSelector;
