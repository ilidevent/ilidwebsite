"use client";

import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import AnimatedPhrase from "../ReUsables/AnimatePhrase";
import styles from "../../styles/Navigation/preloader.module.scss";

const Preloader = ({
  setAnimation,
}: {
  setAnimation: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [finished, setFinished] = useState(false);
  const preloader = useRef(null);
  const pathName = usePathname();

  const pageNames = {}

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

  useEffect(() => {
    if (finished) {
      const timer = setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => setAnimation(true),
        });
        tl.to(preloader.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.7,
          ease: "power2.inOut",
        });
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [finished]);

  return (
    <div className={styles.preloader} ref={preloader}>
      {pathName === "/" ? (
        <div className={styles.preload__home}>
          <div className={styles.ilid}>
            <AnimatedPhrase phrase="Innovation Lab for Infrastructure Development" />
          </div>
          <div className={styles.loader}>
            <span className={styles.percentage}>{currentValue}%</span>
            <div className={styles.loading}>
              <span
                className={styles.inside}
                style={{ width: `${currentValue}%` }}
              ></span>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.preload__other}></div>
      )}
    </div>
  );
};

export default Preloader;
