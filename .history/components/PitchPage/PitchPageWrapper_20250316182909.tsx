"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import HighlightedPhrases from "../ReUsables/HighlightedPhrases";
import AboutboxWrapper from "../ReUsables/AboutboxWrapper";
import SloganBanner from "../ReUsables/SloganBanner";
import DontMissWrapper from "../ReUsables/DontMissWrapper";
import { BenefitsData, WhoApplyData } from "@/utils";
import ReusableSection from "../ReUsables/ReusableSection";
import styles from "../../styles/ReUsables/pitchpage.module.scss"
import PaddingTop from "../ReUsables/PaddingTop";

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

  const pitchContent = {
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

  const aboutContent = {
    header: "Benefits of Pitching",
    keywords: ["Benefits"],
    text: "Be part of ILID 2025. Collaborate, Share insights, and Pitch transformative ideas to drive sustainable development and innovation forward.",
    buttonData: {
      name: "Pitch my idea",
      link: "/pitch-contest",
    },
  };

  const missContent = {
    header: "Who should Apply",
    keywords: ["Who"],
    text: "We’re seeking visionary students, disruptive start-ups, and creative minds ready to reshape Cameroon’s infrastructure landscape. If you have a breakthrough idea and a working prototype, this is your stage.",
    buttonData: {
      name: "Pitch my idea",
      link: "/pitch-contest",
    },
  };

  return (
    <>
      <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints} />
      <VenueBanner />
      <ReusableSection
        header={pitchContent.header}
        keywords={pitchContent.keywords}
        text={pitchContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        buttonData={pitchContent.buttonData}
      >
        <div className={styles.about__width}>
          <HighlightedPhrases
            text={highlight.text}
            keyPhrases={highlight.keyPhrases}
          />
        </div>
      </ReusableSection>
      <ReusableSection
        header={aboutContent.header}
        keywords={aboutContent.keywords}
        text={aboutContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        buttonData={aboutContent.buttonData}
      >
        <AboutboxWrapper data={BenefitsData} />
      </ReusableSection>
      <PaddingTop backgroundColor="#FFF6ED"/>
      <SloganBanner/>
      <ReusableSection
        header={missContent.header}
        keywords={missContent.keywords}
        text={missContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        buttonData={missContent.buttonData}
      >
        <DontMissWrapper data={DontMissData} />
      </ReusableSection>
    </>
  );
};

export default PitchPageWrapper;
