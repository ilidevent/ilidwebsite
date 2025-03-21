"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import ReusableSection from "../ReUsables/ReusableSection";
import SpeakerForm from "../SpeakerPage/SpeakerForm";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";

const PartnersPageWrapper = () => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const formRef = useRef<HTMLDivElement | null>(null);

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
    largeText: "Sponsor or Partner at ILID 2025",
    normalText:
      "Sponsor or Partner with us to ignite innovation, empower emerging leaders, and create resilient, future-ready communities in Cameroon.",
    buttonProps: {
      name: "Partner with us",
    }
  };

  const formContent = {
    header: "Speak at ILID 2025",
    keywords: ["Speak"],
    text: "Join us by sharing your expertise and inspiring change. Complete the form below to be considered as a speaker at ILID 2025.",
  };

  const HeroBreakpoints = {
    lg: "75vh",
    nm: "85vh",
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
      <ReusableSection
        header={formContent.header}
        keywords={formContent.keywords}
        text={formContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        ref={formRef}
      >
        <SpeakerForm />
      </ReusableSection>
    </>
  )
}

export default PartnersPageWrapper