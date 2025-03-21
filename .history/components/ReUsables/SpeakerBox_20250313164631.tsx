import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/images/speaker.jpg"
import styles from "../../styles/ReUsables/speaker.module.scss"

const SpeakerBox = () => {
  return (
    <div className={styles.speaker__box}>
      <div className={styles.speaker__image}>

      </div>
    </div>
  )
}

export default SpeakerBox