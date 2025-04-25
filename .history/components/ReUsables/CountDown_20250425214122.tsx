"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/ReUsables/countdown.module.scss";

const CountDown = () => {
  // Helper function to pad numbers less than 10 with a leading zero.
  const padNumber = (num: number) => (num < 10 ? `0${num}` : num);

  // Function to calculate time remaining until April 25th.
  const calculateTimeLeft = () => {
    const now = new Date();
    let targetYear = now.getFullYear();

    // Create a target date: April is month index 3 (0-indexed)
    let targetDate = new Date(targetYear, 3, 25);

    // // If the target date is in the past, set it to April 25th of next year.
    // if (now > targetDate) {
    //   targetYear++;
    //   targetDate = new Date(targetYear, 3, 25);
    // }

    // if past or exactly on the date, return zeros
    if (now > target 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const difference = targetDate.getTime() - now.getTime();

    // Calculate remaining time components
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  // State to hold the time left.
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // State to track if the component is mounted.
  const [mounted, setMounted] = useState(false);

  // Set mounted to true on client mount and update the countdown every second.
  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Render nothing until the component mounts to avoid SSR mismatch.
  if (!mounted) {
    return null;
  }

  return (
    <div className={styles.countdown__wrapper}>
      <div className={styles.count__wrapper}>
        <div className={styles.count__box}>
          <span>{padNumber(timeLeft.days)}</span>
        </div>
        <span className={styles.count__content}>Days</span>
      </div>
      <div className={styles.count__wrapper}>
        <div className={styles.count__box}>
          <span>{padNumber(timeLeft.hours)}</span>
        </div>
        <span className={styles.count__content}>Hours</span>
      </div>
      <div className={styles.count__wrapper}>
        <div className={styles.count__box}>
          <span>{padNumber(timeLeft.minutes)}</span>
        </div>
        <span className={styles.count__content}>Minutes</span>
      </div>
      <div className={styles.count__wrapper}>
        <div className={styles.count__box}>
          <span>{padNumber(timeLeft.seconds)}</span>
        </div>
        <span className={styles.count__content}>Seconds</span>
      </div>
    </div>
  );
};

export default CountDown;
