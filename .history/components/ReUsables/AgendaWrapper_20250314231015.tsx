import React from 'react'
import styles from "../../styles/ReUsables/agendawrapper.module.scss"
import { span } from 'framer-motion/client';


const AgendaWrapper = () => {
  const agendaDays = ["Day 1", "Day 2", "Day 3", "Day 4"];

  return (
    <div className={styles.agenda__wrapper}>
      <div className={styles.agenda__selection}>
        {
          agendaDays.map(() => (
            span
          ))
        }
      </div>
      <div className={styles.agenda__content}>

      </div>
    </div>
  )
}

export default AgendaWrapper