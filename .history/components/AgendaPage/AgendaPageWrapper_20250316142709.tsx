"use client";

import React, { useEffect } from "react";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import Lenis from "lenis";
import ReusableSection from "../ReUsables/ReusableSection";
import SloganBanner from "../ReUsables/SloganBanner";
import PaddingTop from "../ReUsables/PaddingTop";

const AgendaPageWrapper = () => {
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
    largeText: "ILID 2025 event schedule",
    normalText:
      " Experience a dynamic four-day event filled with summits, labs, and pitch contests for transformative ideas",
    buttonProps: {
      name: "Pitch your idea",
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
    <div>AgendaPageWrapper</div>
  )
}

export default AgendaPageWrapper