"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import SloganBanner from "../ReUsables/SloganBanner";
import ReusableSection from "../ReUsables/ReusableSection";
import AboutboxWrapper from "../ReUsables/AboutboxWrapper";
import PaddingTop from "../ReUsables/PaddingTop";

const AboutPageWrapper = () => {
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
    largeText: "Connecting, Innovating and Creating",
    normalText:
      " ILID 2025 brings together visionaries from various sectors to collaborate and create lasting change.",
    buttonProps: {
      name: "Secure my spot",
      link: "/attend"
    },
  };

  const HeroBreakpoints = {
    lg: "75vh",
    nm: "85vh",
    md: "100vh",
    sm: "100vh",
  };

  const aboutContent = {
    header: "About ILID 2025",
    keywords: ["About"],
    text: "ILID 2025 is a groundbreaking four day event tackling critical infrastructure challenges in our communities. By empowering STEM students and young professionals, ILID fosters innovative solutions for sustainable development and resilience.",
    buttonData: {
      name: "Secure my spot at ILID 2025",
      link: "/attend",
    },
  };

  return (
    <>
      <HeroSection
        herocontent={HeroContent}
        breakpoints={HeroBreakpoints}
      />
      <VenueBanner />
      <ReusableSection
        header={aboutContent.header}
        keywords={aboutContent.keywords}
        text={aboutContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        buttonData={aboutContent.buttonData}
      >
        <AboutboxWrapper />
      </ReusableSection>
      <SloganBanner />
      
    </>
  );
};

export default AboutPageWrapper;
