"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import SloganBanner from "../ReUsables/SloganBanner";
import ReusableSection from "../ReUsables/ReusableSection";

const PitchPageWrapper = () => {
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
    largeText: "Unleash your Idea at ILID 2025",
    normalText:
      "ILID 2025 brings together visionaries from various sectors to collaborate and create lasting change.",
    buttonProps: {
      name: "Secure my spot",
      link: "/attend",
    },
  };

  const HeroBreakpoints = {
    lg: "75vh",
    nm: "85vh",
    md: "100vh",
    sm: "100vh",
  };
  return (
    <>
      <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints} />
      <VenueBanner />
    </>
  );
};

export default PitchPageWrapper;
