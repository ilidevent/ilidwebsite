"use client";

import React, { useState, useEffect } from "react";

const CountDown = () => {
  // Function to calculate time remaining until April 25th.
  const calculateTimeLeft = () => {
    const now = new Date();
    let targetYear = now.getFullYear();
    
    // Create a target date: April is month index 3 (0-indexed)
    let targetDate = new Date(targetYear, 3, 25);
    
    // If the target date is in the past, set it to April 25th of next year.
    if (now > targetDate) {
      targetYear++;
      targetDate = new Date(targetYear, 3, 25);
    }
    
    const difference = targetDate.getTime() - now.getTime();
    
    // Calculate remaining time components
    let timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
    
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Update the countdown every second.
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component unmounts.
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ fontSize: "1.5rem", textAlign: "center" }}>
      <h2>Countdown to April 25th</h2>
      <div>
        <span>{timeLeft.days} days </span>
        <span>{timeLeft.hours} hours </span>
        <span>{timeLeft.minutes} minutes </span>
        <span>{timeLeft.seconds} seconds</span>
      </div>
    </div>
  );
};

export default CountDown;
