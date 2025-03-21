"use client";

import React, {useState} from 'react'
import styles from "../../styles/ReUsables/agendawrapper.module.scss"


const AgendaWrapper = () => {
  const agendaDays = ["Day 1", "Day 2", "Day 3", "Day 4"];

  const [activeDay, setActiveDay] = useState(0)

  return (
    <div className={styles.agenda__wrapper}>
      <div className={styles.agenda__selection}>
        {
          agendaDays.map((data, i) => (
            <span className={styles.agenda__button} key={i} onClick={()}>
              {data}
            </span>
          ))
        }
      </div>
      <div className={styles.agenda__content}>

      </div>
    </div>
  )
}

export default AgendaWrapper