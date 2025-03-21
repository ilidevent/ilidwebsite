import React from 'react'
import AboutBox from './AboutBox'
import 
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss"

const AboutboxWrapper = () => {
  return (
    <div className={styles.abw__wrapper}>
      <AboutBox/>
    </div>
  )
}

export default AboutboxWrapper