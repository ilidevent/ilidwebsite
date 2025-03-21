import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/"
import styles from "../../styles/ReUsables/sponsorwrapper.module.scss"

const SponsorsWrapper = () => {
  return (
    <div className={styles.partner__container}>
      <div className={styles.partner__wrapper}>
        <div className={styles.partner__image}>
          <Image/>
        </div>
      </div>
    </div>
  )
}

export default SponsorsWrapper