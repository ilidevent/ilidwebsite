import React from 'react'
import styles from "../../styles/ReUsables/venuebanner.module.scss"

const VenueBanner = () => {
  return (
    <section className={`section ${styles.vb__section}`}>
      <div className={styles.vbslider__container}>
        <div className={styles.vb__slider}>
          <div className={styles.slider__}>

          </div>
        </div>
      </div>
    </section>
  )
}

export default VenueBanner