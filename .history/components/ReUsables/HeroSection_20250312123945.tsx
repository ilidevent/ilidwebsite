import React from 'react'
import styles from "../../styles/ReUsables/herosection.module.scss"

interface Content {
  large
}


const HeroSection = ({content, breakpoints}: ) => {
  return (
    <section className={styles.hero__section}>
      <div className={`container ${styles.hero__container}`}>

      </div>
    </section>
  )
}

export default HeroSection