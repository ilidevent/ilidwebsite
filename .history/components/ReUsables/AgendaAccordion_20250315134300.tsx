"use client";

import React, { useState } from "react";
import { StaticImageData } from "next/image";
import IMAGE from "../../public/images/speaker.jpg";
import Image from "next/image";
import AccordionModal from "./AccordionModal";
import styles from "../../styles/ReUsables/agendaaccordion.module.scss";

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
}

const AgendaAccordion = ({
  data,
  date,
  abbreviations,
}: {
  data: AgendaItem;
  date: string;
  abbreviations: string[];
}) => {
  const speakers = [IMAGE, IMAGE, IMAGE, IMAGE];
  const [activeModal, setActiveModal] = useState(false);

  return (
    <>
      <div className={styles.aa__wrapper}>
        <div className={styles.aaw__left}>
          <div className={styles.al__date}>
            <span className={styles.aw__day}>{abbreviations[0]}</span>
            <span className={styles.aw__date}>{abbreviations[1]}</span>
          </div>
          <div className={styles.aw__separator}></div>
          <div className={styles.aw__details}>
            <div className={styles.aw__infoone}>
              <span className={styles.aw__svg}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"
                  ></path>
                </svg>
              </span>
              <p className={styles.aw__text}>{data.time}</p>
            </div>
            <div className={styles.aw__infoone}>
              <span className={`${styles.aw__svg} ${styles.location}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    fill="#000"
                    d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                  ></path>
                </svg>
              </span>
              <p className={styles.aw__text}>{data.location}</p>
            </div>
          </div>
        </div>
        <div className={styles.aaw__right}>
          <div className={styles.awr__left}>
            <p className={styles.arl__text}>{data.header}</p>
            {data.panelist && (
              <div className={styles.speaker__images}>
                {data.panelist?.map((data, i) => (
                  <div
                    className={styles.speaker__image}
                    key={i}
                    style={{ zIndex: speakers.length - i }}
                  >
                    <Image fill quality={100} alt={data.name} src={data.image} />
                  </div>
                ))}
              </div>
            )}
            {
              data.break && <p className={}>BREAK</p>
            }
          </div>
          <div className={styles.awr__right}>
            <span onClick={() => setActiveModal(true)}>Details</span>
          </div>
        </div>
      </div>
      <AccordionModal
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        agenda={data}
        date={date}
      />
    </>
  );
};

export default AgendaAccordion;
