import React from 'react'
import styles from "../../styles/ReUsables/herosection.module.scss"

interface Content {
  largeText: string;
  normalText: string;
  buttonText?: string;
  buttonProps: {
    name: string;
    link: string;
  }
}

interface HeroBreakpoints {
  lg: string;
  nm: string;
  md: string;
  sm: string;
}

const HeroSection = ({content, breakpoints}: co) => {
  return (
    <section className={styles.hero__section}>
      <div className={`container ${styles.hero__container}`}>

      </div>
    </section>
  )
}

export default HeroSection