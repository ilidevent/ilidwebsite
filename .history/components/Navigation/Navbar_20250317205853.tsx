"use client";

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
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
    },
    {
      name: "Team",
      link: "/team"
    }
  ]

  const buttonOne = {
    name: "Pitch your idea",
    link: "/pitch-contest",
  }

  const buttonTwo = {
    name: "Partner with us",
    link: "/partners",
  }

  const Navbar = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navigation = Navbar.current;

    if (navigation) {
      let lastScroll = 0;

      ScrollTrigger.create({
        start: "top+=700 top",
        end: "bottom bottom",
        onUpdate: (self) => {
          if (self.direction === -1 && self.scroll() < lastScroll) {
            gsap.to(".nav__translate", { translateY: "0%", background: "transparent" });
          } else {
            gsap.to(".nav__translate", { translateY: "-100%", background: "background: linear-gradient(180deg, rgba(255, 91, 0, 0.8) 20%, rgba(255, 91, 0, 0) 100%);" });
          }
          lastScroll = self.scroll();
        },
        scrub: 0.3,
      });
    }
  });
  
  return (
    <>
      <header className={`nav__translate ${styles.nav__header}`} ref={Navbar}>
        <div className={`container ${styles.nav__container}`}>
          <Link className={styles.nav__logo} href="/">
            <Image fill quality={100} alt='ILID Logo' src={LOGO}/>
          </Link>
          <nav className={styles.nav__center}>
            {
              navLinks.map((data, i) => (
                <Link key={i} href={data.link}>{data.name}</Link>
              ))
            }
          </nav>
          <nav className={styles.nav__right}>
            <Button fill={false} buttonInfo={buttonOne}/>
            <Button fill buttonInfo={buttonTwo}/>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Navbar