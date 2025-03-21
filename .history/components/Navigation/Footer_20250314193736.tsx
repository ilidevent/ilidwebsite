import React from 'react'
import Image from 'next/image'
import IMAGE from "../../public/svg/heroback.svg"
import styles from "../../styles/Navigation/footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer__section}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__top}>
          <div className={styles.ft__top}>

          </div>
          <div className={styles.ft__top}>

          </div>
        </div>
        <div className={styles.footer__bottom}>

        </div>
      </div>
      <div></div>
    </footer>
  )
}

export default Footer