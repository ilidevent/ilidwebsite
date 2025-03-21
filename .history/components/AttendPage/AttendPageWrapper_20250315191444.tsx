"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import ReusableSection from "../ReUsables/ReusableSection";

const AttendPageWrapper = () => {
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
    largeText: " Attend ILID 2025 and be part of the change",
    normalText:
      " It's where ambitious students, industry experts, visionary leaders, and impactful organizations to create sustainable solutions for our communities.",
    buttonProps: {
      name: "Secure my spot",
      link: "/pitch-contest",
    },
  };

  const HeroBreakpoints = {
    lg: "80vh",
    nm: "90vh",
    md: "100vh",
    sm: "100vh",
  };

  const formContent = {
    header: "ILID 2025 event venue",
    keywords: ["ILID", "2025"],
    text: "Join us at National Advanced School of Public Works for an immersive and transformative ILID experience.",
  };

  return (
    <>
    <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints} />
    <VenueBanner />
    <ReusableSection >

    </ReusableSection>
    </>
  )
}

export default AttendPageWrapper