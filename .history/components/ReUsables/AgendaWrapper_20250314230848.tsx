import React from 'react'
import styles from "../../styles/ReUsables/agendawrapper.module.scss"


const AgendaWrapper = () => {
  const agendaDays = ["Day 1", ""]
  return (
    <div className={styles.agenda__wrapper}>
      <div className={styles.agenda__selection}>

      </div>
      <div className={styles.agenda__content}>

      </div>
    </div>
  )
}

export default AgendaWrapper