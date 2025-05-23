"use client";

import React, {useState} from 'react'
import A
import AgendaAccordion from './AgendaAccordion';
import styles from "../../styles/ReUsables/agendawrapper.module.scss"


const AgendaWrapper = () => {
  const agendaDays = ["Day 1", "Day 2", "Day 3", "Day 4"];

  const [activeDay, setActiveDay] = useState(0)

  return (
    <div className={styles.agenda__wrapper}>
      <div className={styles.agenda__selection}>
        {
          agendaDays.map((data, i) => (
            <span className={`${styles.agenda__button} ${activeDay===i ? styles.active__day : ""}`} key={i} onClick={() => setActiveDay(i)}>
              {data}
            </span>
          ))
        }
      </div>
      <div className={styles.agenda__content}>
        <AgendaAccordion/>
      </div>
    </div>
  )
}

export default AgendaWrapper