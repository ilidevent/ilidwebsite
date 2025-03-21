"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { sideBarAnimation, sideContentAnim } from "@/animations";
import { usePathname } from "next/navigation";
import styles from "../../styles/Navigation/sidebar.module.scss";

interface sideBarProps {
  activeSide: boolean;
  setActiveSide: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar = ({ activeSide, setActiveSide }: sideBarProps) => {
  const pathname = usePathname();

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
    {
      name: "Pitch your idea",
      link: "/pitch-contest",
    },
    {
      name: "Partner with us",
      link: "/partners",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      link: "https://www.facebook.com/share/1PgCT3pVLy/",
    },
    {
      name: "Instagram",
      link: "https://www.instagram.com/ilid.event",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/compan",
    },
    {
      name: "Twitter(X)",
      link: "/",
    },
  ];

  return (
    <motion.div
      className={styles.sidebar}
      variants={sideBarAnimation}
      animate={activeSide ? "enter" : "initial"}
      exit="closed"
    >
      <motion.div
        className={styles.sidebar__wrapper}
        variants={sideContentAnim}
        animate={activeSide ? "enter" : "initial"}
        exit="closed"
      >
        <div className={`container ${styles.sidebar__container}`}>
          <div className={styles.ilid__cancel}>
            <span className={styles.sidelogo}>
              Youth Building Resilient
              <br />
              Communities through Infrastructure
            </span>
            <div
              className={styles.cancel__button}
              onClick={() => setActiveSide(false)}
            >
              <span className={styles.ssvg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048">
                  <path
                    fill="currentColor"
                    d="m1115 1024l690 691l-90 90l-691-690l-691 690l-90-90l690-691l-690-691l90-90l691 690l691-690l90 90z"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className={styles.sidebar__content}>
            <div className={styles.snav}>
              <span>NAVIGATION</span>
            </div>
            <div className={styles.snav__links}>
              {navLinks.map((data, i) => (
                <Link key={i} className={styles.snav__link} href={data.link} onClick={() => setActiveSide(false)}>
                  <span className={styles.link__main}>{data.name}</span>
                  <span
                    className={`${styles.lindicator} ${
                      pathname === data.link ? styles.active__indicator : ""
                    }`}
                  ></span>
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.sidebar__footer}>
            <div className={styles.ssocials}>
              <span>Socials</span>
            </div>
            <div className={styles.ssocial__links}>
              {socialLinks.map((data, i) => (
                <Link
                  key={i}
                  className={styles.social__link}
                  target="_blank"
                  href={data.link}
                  onClick={() => setActiveSide(false)}
                >
                  {data.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default SideBar;
