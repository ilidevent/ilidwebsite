import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/speaker.jpg"
import styles from "../../styles/ReUsables/opportunitybox.module.scss"

const OpportunityBox = () => {
  return (
    <div className={styles.obox__wrapper}>
      <div className={styles.ob__content}>
        <span></span>
      </div>
      <div className={styles.ob__image}>
        <Image fill quality={100} alt="Speaker" src={IMAGE}/>
      </div>
    </div>
  )
}

export default OpportunityBox