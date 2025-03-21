"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
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
      "It's where ambitious students, industry experts, visionary leaders, and impactful organizations to create sustainable solutions for our communities.",
    normalText2:
      "united in their efforts to overcome infrastructure challenges and create lasting positive change in our communities.",
    buttonProps: {
      name: "Secure my spot",
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

  return <div>TeamPageWrapper</div>;
};

export default TeamPageWrapper;
