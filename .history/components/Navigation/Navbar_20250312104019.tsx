import React from 'react'
import Image from 'next/image'
import LOGO from "../../public/svg/whitelogo.svg"
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  return (
    <>
      <header className={styles.nav__header}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.nav__logo}>
            <Image fill quality={100} alt='ILID Logo' src={LOGO}/>
          </div>
          <nav className={styles.nav__center}>

          </nav>
          <nav className={styles.nav__right}>

          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar