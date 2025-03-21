import React from 'react'
import styles from "../../styles/ReUsables/accordionmodal.module.scss"

const AccordionModal = () => {
  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.am__wrapper}>
        <div className={styles.am__left}>
          <div></div>
        </div>
        <div className={styles.am__right}>

        </div>
      </div>
    </div>
  )
}

export default AccordionModal