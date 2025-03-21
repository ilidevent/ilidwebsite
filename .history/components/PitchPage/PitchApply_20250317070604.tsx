import React from 'react'
import TextLink from '../ReUsables/TextLink'
import styles from "../../styles/ReUsables/pitchapply.module.scss"

const PitchApply = () => {
  return (
    <div className={styles.pa__wrapper}>
      <div className={styles.pa__container}>
        <div className={styles.pa__content}>
          <div className={styles.pac__left}>
            <div className={styles.pac__box}>
              <span className={styles.box__heading}>Application</span>
              <div className={styles.box__list}>
                <ol className={styles.ordered__list} type='1' start={1}>
                  <li><TextLink text="Access the application form." targetWord='here' link='/pitch-contest'/></li>
                  <li><TextLink text=" Fill out and submit the application form here" targetWord='here' link='/pitch-contest'/></li>
                  <li><TextLink text="Feedback will be communicated after the closing date" targetWord='here' link='/pitch-contest'/></li>
                </ol>
              </div>
            </div>
          </div>
          <div className={styles.pac__middle}>

          </div>
          <div className={styles.pac__right}>
            <span className={styles.}></span>
          </div>
        </div>
      </div>
      <div className={styles.pa__indicator}>

      </div>
    </div>
  )
}

export default PitchApply