import React from 'react'
import styles from "../../styles/ReUsables/reusablesection.module.scss"

const ReusableSection = () => {
  return (
    <section className={`section ${styles.rs__section}`}>
      <div className={`container ${styles.rs__container}`}>
        <div className={styles.content__header}>

        </div>
      </div>
    </section>
  )
}

export default ReusableSection