import React from "react";
import ButtonTwo from "./ButtonTwo";
import Image from "next/image";
import IMAGE from "../../public/images/speaker.jpg"
import styles from "../../styles/ReUsables/accordionmodal.module.scss";


const AccordionModal = () => {
  const buttonInfo = {
    name: "Secure my spot",
    link: "/attend"
  }

  const panelists = [
    {
      name: "Fankam Louisa",
      position: "GICSA, Founder & CEO",
      image: IMAGE,
      about: "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change."
    },
    {
      name: "Fankam Louisa",
      position: "GICSA, Founder & CEO",
      image: IMAGE,
      about: "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change."
    },
    {
      name: "Fankam Louisa",
      position: "GICSA, Founder & CEO",
      image: IMAGE,
      about: "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change."
    },
    {
      name: "Fankam Louisa",
      position: "GICSA, Founder & CEO",
      image: IMAGE,
      about: "Fankam Louisa champions sustainable infrastructure through innovative solutions, empowering communities and driving positive change."
    }
  ]

  return (
    <div className={styles.modal__wrapper}>
      <div className={styles.am__wrapper}>
        <div className={styles.am__left}>
          <div className={styles.al__topone}>
            <p className={styles.day__date}>Friday, 21st</p>
            <div className={styles.al__infoone}>
              <span className={styles.al__svg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"
                  ></path>
                </svg>
              </span>
              <p className={styles.al__text}>12:30 - 14:00</p>
            </div>
            <div className={styles.al__infoone}>
              <span className={`${styles.al__svg} ${styles.location}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                  ></path>
                </svg>
              </span>
              <p className={styles.al__text}>Amphi 100 Reception</p>
            </div>
          </div>
          <div className={styles.al__toptwo}>
            <div className={styles.alt__top}>
              <span>Pannel Discussion 1</span>
              <p>
                Infrastructure Challenges in Cameroon - Analyzing Obstacles and
                Crafting Sustainable Solutions for the Future.
              </p>
            </div>
            <div className={styles.alt__bottom}>
              <p>
                We invite you to join us for a pivotal discussion on the
                infrastructure challenges facing Cameroon. We'll delve into
                cutting-edge strategies, sustainable solutions, and the
                collaborative efforts required to overcome these obstacles. This
                is your chance to gain valuable insights, engage with key
                stakeholders, and contribute to shaping the future of Cameroon's
                infrastructure. Don't miss this opportunity to be part of a
                transformative conversation and help build a resilient,
                sustainable future for our nation.
              </p>
            </div>
          </div>
          <div className={styles.al__bottom}>
            <ButtonTwo buttonInfo={buttonInfo}/>
          </div>
        </div>
        <div className={styles.am__right}>
          <div className={styles.panelist}>
            <p>Panelists</p>
          </div>
          <div className={styles.panelist__wrapper}>
            {
              panelists.map((data, i) => (
                <div key={i} className={styles.panelist__box}>
                  <div className={styles.pb__top}>
                    <div className={}>

                    </div>
                  </div>
                  <div className={styles.pb__bottom}>
                    {data.about}
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionModal;
