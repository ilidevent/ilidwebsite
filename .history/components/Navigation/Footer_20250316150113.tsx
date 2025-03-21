"use client";

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import IMAGE from "../../public/svg/heroback.svg";
import LOGO from "../../public/svg/whitelogo.svg";
import styles from "../../styles/Navigation/footer.module.scss";
import BetterMarque from "./BetterMarque";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const [activeBetter, setActiveBetter] = useState(false);

  const navOne = [
    { name: "Attend", link: "/attend" },
    { name: "About", link: "/about" },
    { name: "Agenda", link: "/agenda" },
  ];

  const navTwo = [
    { name: "Speakers", link: "/speakers" },
    { name: "Partners", link: "/partners" },
    { name: "Pitch Contest", link: "/pitch-contest" },
  ];

  return (
    <footer className={styles.footer__section}>
      <div className={`container ${styles.footer__container}`}>
        <div className={styles.footer__top}>
          <div className={styles.ft__top}>
            <div className={styles.ft__image}>
              <Image fill quality={100} alt="ILID Logo" src={LOGO} />
            </div>
            <p className={styles.loca__venue}>
              <span>25th-27th & 30th April, 2025</span>
              <br />
              <span>National Advanced School of Public Works</span>
            </p>
          </div>

          <div className={styles.ft__bottom}>
            <div className={styles.ftb__left}>
              <p>
                Our flagship infrastructure and development event premieres in
                Yaoundé this 2025.
              </p>

              <div className={styles.svg__container}>
                <Link href="/" className={styles.svg} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#FFF6ED"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9S287.7 141 224.1 141m0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7s74.7 33.5 74.7 74.7s-33.6 74.7-74.7 74.7m146.4-194.3c0 14.9-12 26.8-26.8 26.8c-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8s26.8 12 26.8 26.8m76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9c-26.2-26.2-58-34.4-93.9-36.2c-37-2.1-147.9-2.1-184.9 0c-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9c1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0c35.9-1.7 67.7-9.9 93.9-36.2c26.2-26.2 34.4-58 36.2-93.9c2.1-37 2.1-147.8 0-184.8M398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6c-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6c-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6c29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6c11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1"
                    ></path>
                  </svg>
                </Link>

                <Link href="/" className={styles.svg} target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#FFF6ED"
                      d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3M447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2c-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3c94 0 111.28 61.9 111.28 142.3V448z"
                    ></path>
                  </svg>
                </Link>

                <Link href="/" className={styles.svg} target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-96 0 512 512"
                  >
                    <path
                      fill="#FFF6ED"
                      d="m279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            <div className={styles.ftb__right}>
              <nav className={styles.fnav__links}>
                {navOne.map((data, i) => (
                  <Link href={data.link} key={i}>
                    {data.name}
                  </Link>
                ))}
              </nav>

              <nav className={styles.fnav__links}>
                {navTwo.map((data, i) => (
                  <Link href={data.link} key={i}>
                    {data.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom}>
          <span>#ILID2025 ©{year} Powered by CABRIC Engineering</span>
          <p>
            <span>Website by</span>
            <span className={styles.better} onClick={() => setActiveBetter(!activeBetter)}>Better Marque</span>
          </p>
        </div>
        <BetterMarque activeBetter={activeBetter} setActiveBetter={setActiveBetter} />
      </div>
      <div className={styles.fback__image}>
        <Image fill quality={100} alt="ILID Pattern" src={IMAGE} />
      </div>
    </footer>
  );
};

export default Footer;
