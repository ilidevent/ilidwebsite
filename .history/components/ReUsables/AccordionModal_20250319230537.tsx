import React from "react";
import { StaticImageData } from "next/image";
import ButtonTwo from "./ButtonTwo";
import Image from "next/image";
import styles from "../../styles/ReUsables/accordionmodal.module.scss";

interface Panelist {
  name: string;
  position: string;
  image: StaticImageData;
  about: string;
}

interface AgendaItem {
  key: string;
  time: string;
  location: string;
  header: string;
  title: string;
  details: string;
  panelist?: Panelist[]; // Optional since some agenda items (like breaks) may not have panelists.
  break?: boolean; // Optional flag for items like "Refreshments & Networking".
  s2name?: string;
}

const AccordionModal = ({
  activeModal,
  setActiveModal,
  agenda,
  date,
}: {
  agenda: AgendaItem;
  date: string;
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const buttonInfo = {
    name: "Secure my spot",
    link: "/attend",
  };

  return (
    <div
      className={`${styles.modal__wrapper} ${
        activeModal ? styles.active__modal : ""
      } ${!agenda.panelist ? styles.break__wrapper : ""}` }
    >
      <div className={styles.am__wrapper}>
        <div className={styles.am__left}>
          <div className={styles.al__topone}>
            <p className={styles.day__date}>{date}</p>
            <div className={styles.al__infoone}>
              <span className={styles.al__svg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"
                  ></path>
                </svg>
              </span>
              <p className={styles.al__text}>{agenda.time}</p>
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
              <p className={styles.al__text}>{agenda.location}</p>
            </div>
          </div>
          <div className={styles.al__toptwo}>
            <div className={styles.alt__top}>
              <span>{agenda.header}</span>
              <p>{agenda.title}</p>
            </div>
            <div className={styles.alt__bottom}>
              <p>{agenda.details}</p>
            </div>
          </div>
          <div className={styles.al__bottom}>
            <ButtonTwo buttonInfo={buttonInfo} />
          </div>
        </div>
        <div className={styles.am__right}>
          <div className={styles.panelist}>
            <p>{agenda.s2name}</p>
          </div>
          {agenda.panelist && (
            <div className={styles.panelist__wrapper}>
              {agenda.panelist?.map((data, i) => (
                <div key={i} className={styles.panelist__box}>
                  <div className={styles.p__image}>
                    <Image
                      fill
                      quality={100}
                      alt={data.name}
                      src={data.image}
                    />
                  </div>
                  <div className={styles.p__details}>
                    <p>{data.name}</p>
                    <span>{data.position}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className={styles.aww__svg} onClick={() => setActiveModal(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path
              fill="#FFF6ED"
              fillRule="evenodd"
              d="M420.48 121.813L390.187 91.52L256 225.92L121.813 91.52L91.52 121.813L225.92 256L91.52 390.187l30.293 30.293L256 286.08l134.187 134.4l30.293-30.293L286.08 256z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default AccordionModal;
