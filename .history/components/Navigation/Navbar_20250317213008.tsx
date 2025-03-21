"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Link from "next/link";
import LOGO from "../../public/svg/whitelogo.svg";
import Button from "../ReUsables/Button";
import styles from "../../styles/Navigation/navbar.module.scss";

const Navbar = () => {
  const navLinks = [
    {
      name: "Attend",
      link: "/attend",
    },
    {
      name: "Speakers",
      link: "/speakers",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Agenda",
      link: "/agenda",
    },
    {
      name: "Team",
      link: "/team",
    },
  ];

  const buttonOne = {
    name: "Pitch your idea",
    link: "/pitch-contest",
  };

  const buttonTwo = {
    name: "Partner with us",
    link: "/partners",
  };

  const Navbar = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const navigation = Navbar.current;
    if (navigation) {
      // Initially set navigation to visible with a transparent background.
      gsap.set(navigation, { translateY: "0%", background: "transparent" });
      
      let lastScroll = 0;
      
      ScrollTrigger.create({
        start: "top+=700 top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          // If scrolled less than 700, force nav to be visible and transparent.
          if (self.scroll() < 700) {
            gsap.to(navigation, { translateY: "0%", background: "transparent", duration: 0.3, ease: "none" });
          } else {
            // Once past 700, always force the gradient background immediately.
            gsap.set(navigation, {
              background:
                "linear-gradient(180deg, rgba(255, 91, 0, 0.8) 20%, rgba(255, 91, 0, 0) 100%)",
            });
            // Then animate the translateY based on scroll direction.
            if (self.direction === 1 && self.scroll() > lastScroll) {
              // Scrolling down: hide nav.
              gsap.to(navigation, { translateY: "-100%", duration: 0.3, ease: "none" });
            } else if (self.direction === -1 && self.scroll() < lastScroll) {
              // Scrolling up: show nav.
              gsap.to(navigation, { translateY: "0%", duration: 0.3, ease: "none" });
            }
          }
          lastScroll = self.scroll();
        },
      });
    }
  }, []);

  return (
    <>
      <header className={`nav__translate ${styles.nav__header}`} ref={Navbar}>
        <div className={`container ${styles.nav__container}`}>
          <Link className={styles.nav__logo} href="/">
            <Image fill quality={100} alt="ILID Logo" src={LOGO} />
          </Link>
          <nav className={styles.nav__center}>
            {navLinks.map((data, i) => (
              <Link key={i} href={data.link}>
                {data.name}
              </Link>
            ))}
          </nav>
          <nav className={styles.nav__right}>
            <Button fill={false} buttonInfo={buttonOne} />
            <Button fill buttonInfo={buttonTwo} />
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
