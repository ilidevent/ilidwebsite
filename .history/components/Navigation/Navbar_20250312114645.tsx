import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LOGO from "../../public/svg/whitelogo.svg"
import Button from '../ReUsables/Button'
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

  const buttonOne = {
    color: "#FFF6ED",
    name: "Pitch your idea",
    link: "/pitch-contest",
  }

  const buttonTwo = {
    color: "#FF5B00",
    background: "#FFF6ED",
    name: "Partner with us",
    link: "/partners",
  }
  
  return (
    <>
      <header className={styles.nav__header}>
        <div className={`container ${styles.nav__container}`}>
          <div className={styles.nav__logo}>
            <Image fill quality={100} alt='ILID Logo' src={LOGO}/>
          </div>
          <nav className={styles.nav__center}>
            {
              navLinks.map((data, i) => (
                <Link key={i} href={data.link}>{data.name}</Link>
              ))
            }
          </nav>
          <nav className={styles.nav__right}>
            <Button fill={false} buttonInfo={buttonOne}/>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar