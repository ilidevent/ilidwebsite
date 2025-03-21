import React from 'react'
import styles from "../../styles/ReUsables/venuebanner.module.scss"

const VenueBanner = () => {
  return (
    <section className={`section ${styles.vb__section}`}>
      <div className={styles.vbslider__container}>
        <div className={styles.vb__slider}>
          <div className={styles.slider__main}>
            <div className={styles.first__slide}>
              <p>NATIONAL ADVANCED SCHOOL OF PUBLIC WORKS | 25th - 27th & 30th APRIL, 2025</p><span></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VenueBanner