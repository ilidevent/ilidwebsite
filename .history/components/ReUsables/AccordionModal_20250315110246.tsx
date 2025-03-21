import React from 'react'
import ButtonTwo from './ButtonTwo'
import styles from "../../styles/ReUsables/accordionmodal.module.scss"

const AccordionModal = () => {
  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.am__wrapper}>
        <div className={styles.am__left}>
          <div className={styles.al__topone}>
            <p className={styles.day__date}></p>
            
          </div>
          <div className={styles.al__toptwo}>

          </div>
          <div className={styles.al__bottom}>

          </div>
        </div>
        <div className={styles.am__right}>

        </div>
      </div>
    </div>
  )
}

export default AccordionModal