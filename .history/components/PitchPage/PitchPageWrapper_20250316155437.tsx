"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import HighlightedPhrases from "../ReUsables/HighlightedPhrases";
import SloganBanner from "../ReUsables/SloganBanner";
import ReusableSection from "../ReUsables/ReusableSection";
import styles from "../../styles/ReUsables/pitchpage.module.scss"

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
    header: "About the Pitch Contest",
    keywords: ["About"],
    text: "Participants are invited to delve deep into the critical areas affecting our communities.",
    buttonData: {
      name: "Pitch my idea",
      link: "/pitch-contest",
    },
  };

  const highlight = {
    text: "This year, the ILID Pitch Contest shines an even brighter spotlight on groundbreaking innovations and projects at the forefront of sustainable infrastructure development in Cameroon. Embracing the core principles of innovation, sustainability, and community empowerment, the contest serves as a dynamic platform for visionaries and changemakers to present transformative solutions that address the pressing real-world challenges our nation faces today.",
    keyPhrases: ["sustainable infrastructure development in Cameroon"],
  };

  return (
    <>
      <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints} />
      <VenueBanner />
      <ReusableSection
        header={partnerContent.header}
        keywords={partnerContent.keywords}
        text={partnerContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        buttonData={partnerContent.buttonData}
      >
        <div className={}>
          <HighlightedPhrases
            text={highlight.text}
            keyPhrases={highlight.keyPhrases}
          />
        </div>
      </ReusableSection>
    </>
  );
};

export default PitchPageWrapper;
