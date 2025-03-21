"use client";

import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/ReUsables/formselector.module.scss";

const FormSelector = ({
  selections,
  selectedItem,
  setSelectedItem,
  selectError,
  toggleSelectedItem,
}: {
  selections: string[];
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
  selectError: boolean;
  toggleSelectedItem: (selection: string) => void;
}) => {
  const [activeBox, setActiveBox] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveBox(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.select__wrapper}>
      <span className={styles.flabel}>What is your Inquiry?*</span>
      <div className={styles.finput} onClick={() => setActiveBox(!activeBox)}>
        <span
          className={`${styles.selection} ${
            selectedItem !== "Please select" ? styles.active__select : ""
          }`}
        >
          {selectedItem}
        </span>
        <div
          className={`${styles.select__boxer} ${
            activeBox ? styles.active__boxer : ""
          }`}
          ref={drop}
        >
          {selections.map((data, i) => (
            <div
              className={styles.sbox}
              key={i}
              onClick={() => {
                toggleSelectedItem(data);
                setActiveBox(false);
              }}
            >
              <span>{data}</span>
            </div>
          ))}
        </div>
      </div>
      <span
        className={`${styles.ferror} ${
          selectError ? styles.active__ferror : ""
        }`}
      >
        Please select an inquiry
      </span>
    </div>
  );
};

export default FormSelector;
