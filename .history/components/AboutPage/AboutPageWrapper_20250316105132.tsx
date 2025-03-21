"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import PaddingTop from "../ReUsables/PaddingTop";

const AboutPageWrapper = () => {
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
    largeText: "Connecting, Innovating and Creating",
    normalText:
      " ILID 2025 brings together visionaries from various sectors to collaborate and create lasting change.",
    buttonProps: {
      name: "Secure my spot",
      link: "/attend"
    },
  };

  const HeroBreakpoints = {
    lg: "80vh",
    nm: "85vh",
    md: "100vh",
    sm: "100vh",
  };

  return (
    <>
      <HeroSection
        herocontent={HeroContent}
        breakpoints={HeroBreakpoints}
      />
      <VenueBanner />
    </>
  );
};

export default AboutPageWrapper;
