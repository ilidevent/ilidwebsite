import React from 'react'
import AboutBox from './AboutBox'
import { AboutData } from '@/utils'
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss"

const AboutboxWrapper = () => {
  return (
    <div className={styles.abw__wrapper}>
      {
        AboutBox.map(() => (

          <AboutBox/>
        ))
      }
    </div>
  )
}

export default AboutboxWrapper