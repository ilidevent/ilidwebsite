import React from 'react'
import styles from "../../styles/ReUsables/agendaaccordion.module.scss"

const AgendaAccordion = () => {
  return (
    <div className={styles.aa__wrapper}>
      <div className={styles.aaw__left}>
        <div className={styles.al__date}>

        </div>
        <div className={styles.a__separator}></div>
      </div>
      <div className={styles.aaw__right}>

      </div>
    </div>
  )
}

export default AgendaAccordion