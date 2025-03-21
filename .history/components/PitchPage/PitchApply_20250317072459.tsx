import React from "react";
import TextLink from "../ReUsables/TextLink";
import Image from "next/image";
import IMAGE from "../../public/svg/calendar.svg";
import styles from "../../styles/ReUsables/pitchapply.module.scss";

const PitchApply = () => {
  return (
    <div className={styles.pa__wrapper}>
      <div className={styles.pa__container}>
        <div className={styles.pa__content}>
          <div className={styles.pac__left}>
            <div className={styles.pac__box}>
              <span className={styles.box__heading}>Application</span>
              <div className={styles.box__list}>
                <ol className={styles.ordered__list} type="1" start={1}>
                  <li>
                    <TextLink
                      text="Access the application form."
                      targetWord="here"
                      link="/pitch-contest"
                    />
                  </li>
                  <li>
                    <TextLink
                      text=" Fill out and submit the application form here."
                      targetWord="here."
                      link="/pitch-contest"
                    />
                  </li>
                  <li>
                    <TextLink
                      text="Feedback will be communicated after the closing date."
                      targetWord="here"
                      link="/pitch-contest"
                    />
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className={styles.pac__middle}>
            <div className={styles.pm__image}>
              <Image fill quality={100} src={IMAGE} alt="Calendar" />
            </div>
          </div>
          <div className={styles.pac__right}>
            <span className={styles.full__date}>March 01-15, 2025</span>
            <div className={styles.pac__box}>
              <span className={styles.box__heading}>Application</span>
              <div className={styles.box__list}>
                <ol className={styles.ordered__list} type="1" start={1}>
                  <li>
                    <TextLink
                      text="Access the application form."
                      targetWord="here"
                      link="/pitch-contest"
                    />
                  </li>
                  <li>
                    <TextLink
                      text=" Fill out and submit the application form here"
                      targetWord="here"
                      link="/pitch-contest"
                    />
                  </li>
                  <li>
                    <TextLink
                      text="Feedback will be communicated after the closing date"
                      targetWord="here"
                      link="/pitch-contest"
                    />
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.pa__indicator}>
        <div className={}></div>
      </div>
    </div>
  );
};

export default PitchApply;
