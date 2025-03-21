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

    const navigation = navRef.current;
    if (navigation) {
      // First, ensure the navigation starts with translateY 0 and transparent background.
      gsap.set(navigation, { translateY: "0%", background: "transparent" });

      // Create a timeline to control the nav translation and background when scroll >= 700.
      const tl = gsap.timeline({ paused: true });
      tl.to(navigation, {
        translateY: "-100%",
        background:
          "linear-gradient(180deg, rgba(255, 91, 0, 0.8) 20%, rgba(255, 91, 0, 0) 100%)",
        duration: 0.3,
        ease: "none",
      });

      let lastScroll = 0;

      ScrollTrigger.create({
        start: "top+=700 top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: (self) => {
          if (self.scroll() < 700) {
            // When scroll is less than 700, force the nav to be visible with transparent background.
            gsap.set(navigation, { translateY: "0%", background: "transparent" });
            tl.pause(0); // reset timeline
          } else {
            // When past 700, drive the timeline progress based on scroll direction.
            // For example, play the timeline when scrolling down, reverse when scrolling up.
            if (self.direction === 1) {
              tl.play();
            } else if (self.direction === -1) {
              tl.reverse();
            }
          }
          lastScroll = self.scroll();
        },
      });
    }
  });

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
