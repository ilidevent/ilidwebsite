import React from "react";
import styles from "../../styles/ReUsables/formselector.module.scss";

const FormSelector = () => {
  return (
    <div className={styles.select__wrapper}>
      <span className={styles.flabel}> What is your Inquiry?*</span>
      <div className={styles.finput}>
        <span>Please select</span>
      </div>
      <span></span>
    </div>
  );
};

export default FormSelector;
