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
  const [twoFinished, set2Finished] = useState(false);
  const preloader = useRef(null);
  const pathname = usePathname();
  const [pageName, setPageName] = useState<string>("");
  console.log(pageName);

  useEffect(() => {
    if (!pathname) return;

    // Determine the page name based on the pathname
    switch (pathname) {
      case "/attend":
        setPageName("Attend ILID 2025");
        break;
      case "/about":
        setPageName("About ILID 2025");
        break;
      case "/pitch-contest":
        setPageName("Pitch Contest");
        break;
      case "/partners":
        setPageName("Partners & Sponsors");
        break;
      case "/speakers":
        setPageName("ILID 2025 Speakers");
        break;
      case "/agenda":
        setPageName("ILID 2025 Agenda");
        break;
      case "/team":
        setPageName("Our Team");
        break;
      case "/":
      case "/home":
        setPageName("Home");
        break;
      default:
        setPageName("Unknown");
    }
  }, [pathname]);

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

  // GSAP animation: conditionally run for the home page; for other pages, just complete immediately
  useEffect(() => {
    if (pathname ===)
    if (finished && twoFinished) {
      const timer = setTimeout(() => {
        const tl = gsap.timeline({
          onComplete: () => setAnimation(true),
        });
        tl.to(preloader.current, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 0.7,
          ease: "power2.inOut",
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [finished, twoFinished]);

  return (
    <div className={styles.preloader} ref={preloader}>
      {pathname === "/" ? (
        <div className={styles.preload__home}>
          <div className={styles.ilid}>
            <AnimatedPhrase set2Finished={set2Finished} phrase="Innovation Lab for Infrastructure Development" />
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
        <div className={styles.preload__other}>
          <div className={styles.otext}>
            <AnimatedPhrase set2Finished={set2Finished} phrase={pageName} key={pageName} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Preloader;
