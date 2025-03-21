import React from 'react'
import styles from "../../styles/ReUsables/agendaaccordion.module.scss"

const AgendaAccordion = () => {
  return (
    <div className={styles.aa__wrapper}>
      <div className={styles.aaw__left}>
        <div className={styles.al__date}>
          <span className={styles.aw__day}>Fri</span>
          <span className={styles.aw__date}>21</span>
        </div>
        <div className={styles.aw__separator}></div>
        <div className={styles.aw__details}>
          <div className={styles.aw__time}>

          </div>
          <div className={styles.aw__}>

          </div>
        </div>
      </div>
      <div className={styles.aaw__right}>

      </div>
    </div>
  )
}

export default AgendaAccordion