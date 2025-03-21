import React from 'react'
import styles from "../../styles/ReUsables/formselector.module.scss"

const FormSelector = () => {
  return (
    <div className={styles.select__wrapper}>
      <div className={styles.finput__wrapper}>
        <span className={styles.fabel}> What is your Inquiry?*</span>
        
      </div>
    </div>
  )
}

export default FormSelector