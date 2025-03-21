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

  const partnerContent = {
    header: " Partners & Sponsors",
    keywords: ["Partners", "&", "Sponsors"],
    text: "Showcasing our valued partners and sponsors who play a key role in supporting and enhancing our initiatives.",
    buttonData: {
      name: "Partner with us",
      link: "/partners",
    },
  };

  return (
    <>
      <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints} />
      <VenueBanner />
      <ReusableSection
        header={Content.header}
        keywords={Content.keywords}
        text={Content.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        buttonData={Content.buttonData}
      >
        <HighlightedPhrases />
      </ReusableSection>
    </>
  );
};

export default PitchPageWrapper;
