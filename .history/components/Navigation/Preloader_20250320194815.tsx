"use client";

import React, {useState, useEffect} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedPhrase from "../ReUsables/AnimatePhrase";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = ({
  setAnimation,
}: {
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    let timerId: number;

    const updateCounter = () => {
      setCurrentValue((prev) => {
        if (prev < 100) {
          const increment = Math.floor(Math.random() * 10) + 1;
          const newValue = Math.min(prev + increment, 100);
          if (newValue === 100) {
            setFinished(true);
          }
          const delay = Math.floor(Math.random() * 200) + 350;
          timerId = window.setTimeout(updateCounter, delay);
          return newValue;
        }
        return prev;
      });
    };

    updateCounter();

    return () => clearTimeout(timerId);
  }, []);


  useGSAP(() => (
    const tl = gsap.timeline({
      onComplete: () => {
        setAnimation(true);
      },
    });

    tl.to(sloganRef.current, {
      opacity: 1,
      duration: 0.8,
      ease: "power2.in",
    })
  ))

  return (
    <div className={styles.preloader}>
      <div className={styles.preload__home}>
        <div className={styles.ilid}>
          <AnimatedPhrase phrase="Innovation Lab for Infrastructure Development"/>
        </div>
        <div className={styles.loader}>
          <span className={styles.percentage}>{currentValue}%</span>
          <div className={styles.loading}>
            <span className={styles.inside} style={{width: `${currentValue}%`}}></span>
          </div>
        </div>
      </div>
      <div className={styles.preload__other}></div>
    </div>
  );
};

export default Preloader;
