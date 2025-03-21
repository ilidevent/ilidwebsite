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
    buttonText: "Got an innovative solution to present?",
  };

  const HeroBreakpoints = {
    lg: "100vh",
    nm: "100vh",
    md: "100vh",
    sm: "100vh",
  };

  return (
    <>
    
    </>
  )
}

export default SpeakerPageWrapper