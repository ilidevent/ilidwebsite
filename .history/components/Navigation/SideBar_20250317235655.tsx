import React from "react";
import styles from "../../styles/Navigation/sidebar.module.scss";

const SideBar = () => {
  const links = [
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
      name: "Pitch your idea",
      link: "/pitch-contest"
    },
    {
      name: "Partner with us",
      link: "/partners"
    },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      link: "/"
    },
    {
      name: "Instagram",
      link: "/"
    },
    {
      name: "LinkedIn",
      link: "/"
    }
  ]

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebar__wrapper}>
        <div className={`container ${styles.sidebar__container}`}>
          <div className={styles.ilid__cancel}>
            <span className={styles.sidelogo}>
              Youth Building Resilient
              <br />
              Communities through Infrastructure
            </span>
            <div className={styles.cancel__button}>
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
          </div>
          <div className={styles.sidebar__footer}></div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
