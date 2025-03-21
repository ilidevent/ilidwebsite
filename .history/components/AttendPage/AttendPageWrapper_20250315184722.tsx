"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";

const AttendPageWrapper = () => {
  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  const HeroContent = {
    largeText: " Attend ILID 2025 and be part of the change",
    normalText:
      " It's where ambitious students, industry experts, visionary leaders, and impactful organizations to create sustainable solutions for our communities.",
    buttonText: "Got an innovative solution to present?",
    buttonProps: {
      name: "Pitch your idea",
      link: "/pitch-contest",
    },
  };

  const HeroBreakpoints = {
    lg: "100vh",
    nm: "100vh",
    md: "100vh",
    sm: "100vh",
  };

  return (
    <>
    <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints} />
    <VenueBanner />
    </>
  )
}

export default AttendPageWrapper