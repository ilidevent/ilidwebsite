import React from 'react'
import Tex
import styles from "../../styles/ReUsables/pitchapply.module.scss"

const PitchApply = () => {
  return (
    <div className={styles.pa__wrapper}>
      <div className={styles.pa__container}>
        <div className={styles.pa__content}>
          <div className={styles.pac__left}>
            <div className={styles.pac__box}>
              <span className={styles.box__heading}></span>
              <div className={styles.box__list}>
                <ol className={styles.ordered__list}>
                  <li></li>
                </ol>
              </div>
            </div>
          </div>
          <div className={styles.pac__middle}>

          </div>
          <div className={styles.pac__right}>

          </div>
        </div>
      </div>
      <div className={styles.pa__indicator}>

      </div>
    </div>
  )
}

export default PitchApply