"use client";

import React, { useState } from "react";
import styles from "../../styles/ReUsables/formselector.module.scss";


const FormSelector = ({}) => {
  const selections = [
    "Please select",
    "Sponsorship",
    "Partnership"
  ]
  const [activeBox, setActiveBox] = useState(false)
  const [selectedItem, setSelectedItem] = useState("Please select")

  const handleSelectedItem = (data: string) => {
    setSelectedItem(data)
    setActiveBox(false)
  }

  return (
    <div className={styles.select__wrapper}>
      <span className={styles.flabel}>What is your Inquiry?*</span>
      <div className={styles.finput} onClick={() => setActiveBox(!activeBox)}>
        <span className={styles.selection}>{selectedItem}</span>
        <div className={`${styles.select__boxer} ${activeBox ? styles.active__boxer : ""}`}>
          {
            selections.map((data, i) => (
              <div className={styles.sbox} key={i} onClick={() => handleSelectedItem(data)}>
                <span>{data}</span>
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
