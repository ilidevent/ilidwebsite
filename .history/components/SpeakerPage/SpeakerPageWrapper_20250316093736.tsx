"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import ReusableSection from "../ReUsables/ReusableSection";
import SpeakerForm from "../SpeakerPage/SpeakerForm";

const SpeakerPageWrapper = () => {
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
    largeText: "Our 2025 speakers & workshop facilitators lineup",
    normalText:
      "Meet the phenomenal speakers who will shape the discussions and drive the quality of talks at ILID 2025.",
    buttonProps: {
      name: "Become a speaker", 
    },
    buttonText: "Share your expertise and shape the future at ILID 2025.",
  };

  const speakerformContent = {
    header: "Speak at ILID 2025",
    keywords: ["Speak"],
    text: "Join us by sharing your expertise and inspiring change. Complete the form below to be considered as a speaker at ILID 2025.",
  };

  const HeroBreakpoints = {
    lg: "100vh",
    nm: "100vh",
    md: "100vh",
    sm: "100vh",
  };

  return (
    <>
      <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints} />
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

export default SpeakerPageWrapper