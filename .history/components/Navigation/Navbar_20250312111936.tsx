import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LOGO from "../../public/svg/whitelogo.svg"
import styles from "../../styles/Navigation/navbar.module.scss"

const Navbar = () => {
  const navLinks = [
    {
      name: "Attend",
      link: "/attend"
    },
    {
      name: "Speakers",
      link: "/speakers"
    },
    {
      name: "About",
      link: "/about"
    },
    {
      name: "Agenda",
      link: "/agenda"
    }
  ]
  return (
    <>
      <header className={styles.nav__header}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.nav__logo}>
            <Image fill quality={100} alt='ILID Logo' src={LOGO}/>
          </div>
          <nav className={styles.nav__center}>
            {
              navLinks.map(() => ())
            }
          </nav>
          <nav className={styles.nav__right}>

          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar