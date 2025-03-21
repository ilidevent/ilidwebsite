"use client";

import React, {useEffect} from "react";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import Lenis from "lenis";
import ReusableSection from "../ReUsables/ReusableSection";
import SloganBanner from "../ReUsables/SloganBanner";


const HomePageWrapper = () => {
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
    largeText: "Youth building resilient communities through Infrastructure",
    normalText:
      " ILID empowers STEM students to tackle real-world infrastructure issues through sustainable innovation and practical action. Together, we’re turning ideas into action and creating lasting impact across our communities.",
    buttonText: "Got an innovative solution to present?",
    buttonProps: {
      name: "Pitch your idea",
      link: "/pitch-contest",
    },
  };

  const HeroBreakpoints = {
    lg: "100vh",
    nm: "100vh",
    md: "100vh",
    sm: "100vh",
  };

  //SectionContent
  const aboutContent = {
    header: "About ILID 2025",
    keywords: ["About"],
    text: " ILID 2025 is a groundbreaking four day event tackling critical infrastructure challenges in our communities. By empowering STEM students and young professionals, ILID fosters innovative solutions for sustainable development and resilience.",
    buttonData: {
      name: "Secure my spot at ILID 2025",
      link: "/attend"
    }
  }

  return (
    <>
      <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints}/>
      <VenueBanner/>
      <ReusableSection header={aboutContent.header} keywords={aboutContent.keywords} text={aboutContent.text} textColor="#000000" backgroundColor="#FFF6ED" buttonData={aboutContent.buttonData}>
        <div></div>
      </ReusableSection>
      <SloganBanner/>
    </>
  );
};

export default HomePageWrapper;
