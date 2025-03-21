"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
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
    largeText: "Our 2025 speakers & workshop facilitators lineup",
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
        lenis={lenis}
        reference={formRef}
      />
      <VenueBanner />
    </>
  );
};

export default AboutPageWrapper;
