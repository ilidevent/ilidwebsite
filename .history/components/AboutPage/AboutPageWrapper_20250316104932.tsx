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
      "Meet the phenomenal speakers who will shape the discussions and drive the quality of talks at ILID 2025.",
    buttonProps: {
      name: "Become a speaker",
    },
    buttonText: "Share your expertise and shape the future at ILID 2025.",
  };

  const HeroBreakpoints = {
    lg: "100vh",
    nm: "100vh",
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
