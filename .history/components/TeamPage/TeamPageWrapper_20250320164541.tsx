"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import TeamWrapper from "./TeamWrapper";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import ReusableSection from "../ReUsables/ReusableSection";

const TeamPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      duration: 1,
    });

    function raf(time: number) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Store the lenis instance in state
    setLenis(lenisInstance);
  }, []);

  const HeroContent = {
    largeText: "Introducing the creative minds behind ILID 2025",
    normalText:
      "Get to know the team working collaboratively behind the scenes to help overcome infrastructure problems and foster sustainable progress for our communities.",
    buttonProps: {
      name: "Meet the team",
    },
  };

  const HeroBreakpoints = {
    lg: "80vh",
    nm: "90vh",
    md: "60vh",
    sm: "78vh",
    smm: "90vh",
    smmm: "95vh",
  };

  const sectionContent = {
    header: "The Minds behind the Vision",
    keywords: ["Secure"],
    text: "Get to know the team working collaboratively behind the scenes to help overcome infrastructure problems.",
  };

  return (
    <>
      <HeroSection
        herocontent={HeroContent}
        breakpoints={HeroBreakpoints}
        lenis={lenis}
        reference={sectionRef}
      />
      <VenueBanner />
      <ReusableSection
        header={sectionContent.header}
        keywords={sectionContent.keywords}
        text={sectionContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        ref={sectionRef}
      >
        <TeamWrapper/>
      </ReusableSection>
    </>
  );
};

export default TeamPageWrapper;
