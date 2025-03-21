import React from 'react'
import Image from 'next/image'
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  return (
    <>
      <header className={styles.nav__header}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.nav__}>

          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar