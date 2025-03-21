"use client";

import React, {useRef} from "react";
import TextLink from "../ReUsables/TextLink";
import { PitchApplyData } from "@/utils";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import IMAGE from "../../public/svg/calendar.svg";
import styles from "../../styles/ReUsables/pitchapply.module.scss";

const PitchApply = () => {
  const paContainer = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paContainer,
    offset: ["start end", "end end"],
  });

  const heighter = useTransform(scrollYProgress, [0, 1], [0, 100]);

  // Create a new MotionValue that formats the number with a '%' unit.
  const heightPercent = useTransform(heighter, (value) => `${value}%`);

  return (
    <div className={styles.pa__wrapper}>
      <div className={styles.pa__container} ref={paContainer}>
        {PitchApplyData.map((data, i) => (
          <div className={styles.pa__content} key={i}>
            <div className={styles.pac__left}>
              <div className={styles.pac__box}>
                <span className={styles.box__heading}>{data.title}</span>
                <div className={styles.box__list}>
                  <ol
                    className={styles.ordered__list}
                    type="1"
                    start={data.start}
                  >
                    {data.lists.map((info, i) => (
                      <li key={i}>
                        <TextLink
                          text={info}
                          targetWord="here"
                          link="/pitch-contest"
                        />
                      </li>
                    ))}
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
              <span className={styles.full__date}>{data.date}</span>
              <div className={styles.pac__box}>
                <span className={styles.box__heading}>{data.title}</span>
                <div className={styles.box__list}>
                  <ol
                    className={styles.ordered__list}
                    type="1"
                    start={data.start}
                  >
                    {data.lists.map((info, i) => (
                      <li key={i}>
                        <TextLink
                          text={info}
                          targetWord="here"
                          link="/pitch-contest"
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.pa__indicator}>
        <motion.div className={styles.pi__indicator} style={{height: hei}}></motion.div>
      </div>
    </div>
  );
};

export default PitchApply;
