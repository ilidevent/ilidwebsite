"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import HighlightedPhrases from "../ReUsables/HighlightedPhrases";
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
    largeText: "Unleash your Innovation at ILID 2025",
    normalText:
      "Pitch your existing idea and stand a chance to secure funding for your innovation.",
    buttonProps: {
      name: "Pitch my idea",
      link: "/pitch-contest",
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
      <ReusableSection
        header={aboutContent.header}
        keywords={aboutContent.keywords}
        text={aboutContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        buttonData={aboutContent.buttonData}
      >
        <AboutboxWrapper />
      </ReusableSection>
    </>
  );
};

export default PitchPageWrapper;
