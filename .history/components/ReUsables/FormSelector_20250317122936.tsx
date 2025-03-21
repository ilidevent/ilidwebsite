import React from "react";
import styles from "../../styles/ReUsables/formselector.module.scss";

const FormSelector = () => {
  const selections = 
  return (
    <div className={styles.select__wrapper}>
      <span className={styles.flabel}>What is your Inquiry?*</span>
      <div className={styles.finput}>
        <span className={styles.selection}>Please select</span>
        <div className={styles.select__wrapper}>

        </div>
      </div>
      <span className={styles.ferror}>Please select an inquiry</span>
    </div>
  );
};

export default FormSelector;
