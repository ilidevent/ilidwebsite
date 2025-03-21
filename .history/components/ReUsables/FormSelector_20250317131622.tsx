"use client";

import React, { useState } from "react";
import styles from "../../styles/ReUsables/formselector.module.scss";


const FormSelector = ({selections, selectedItem, setSelectedItem}: {selections: string[], selectedItem: string, setSelectedItem: React.Dispatch<React.SetStateAction<string>>}) => {
  const [activeBox, setActiveBox] = useState(false)
  
  const handleSelectedItem = (data: string) => {
    setSelectedItem(data)
    setActiveBox(false)
  }

  return (
    <div className={styles.select__wrapper}>
      <span className={styles.flabel}>What is your Inquiry?*</span>
      <div className={styles.finput} onClick={() => setActiveBox(!activeBox)}>
        <span className={`${styles.selection} ${selectedItem!== }`}>{selectedItem}</span>
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
