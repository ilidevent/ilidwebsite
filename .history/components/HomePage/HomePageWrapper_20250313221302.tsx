"use client";

import React, { useEffect } from "react";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import Lenis from "lenis";
import ReusableSection from "../ReUsables/ReusableSection";
import SloganBanner from "../ReUsables/SloganBanner";
import PaddingTop from "../ReUsables/PaddingTop";
import AboutboxWrapper from "../ReUsables/AboutboxWrapper";
import SpeakerWrapper from "../ReUsables/SpeakerWrapper";
import OpportunityWrapper from "../ReUsables/OpportunityWrapper";
import VenueWrapper from "../ReUsables/VenueWrapper";

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
    text: "ILID 2025 is a groundbreaking four day event tackling critical infrastructure challenges in our communities. By empowering STEM students and young professionals, ILID fosters innovative solutions for sustainable development and resilience.",
    buttonData: {
      name: "Secure my spot at ILID 2025",
      link: "/attend",
    },
  };

  const opportunityContent = {
    header: "Unlock New Opportunities",
    keywords: ["Unlock"],
    text: "ILID offers a unique opportunity to be part of a transformative initiative aimed at reshaping Cameroon's infrastructure. By attending, you'll gain from:",
    buttonData: {
      name: "Secure my spot at ILID 2025",
      link: "/attend",
    },
  };

  const speakersContent = {
    header: "Unparalleled Perspectives",
    keywords: [],
    text: "Get inspired by emerging voices and industry pioneers as they unite to redefine our community and spark transformative change.",
    buttonData: {
      name: "Secure my spot at ILID 2025",
      link: "/attend",
    },
  };

  const venueContent = {
    header: "ILID 2025 event venue",
    keywords: ["ILID", "2025"],
    text: "Join us at National Advanced School of Public Works for an immersive and transformative ILID experience.",
  };

  return (
    <>
      <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints} />
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
      <ReusableSection
        header={opportunityContent.header}
        keywords={opportunityContent.keywords}
        text={opportunityContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        buttonData={opportunityContent.buttonData}
      >
        <OpportunityWrapper />
      </ReusableSection>
      <PaddingTop backgroundColor="#C24002"/>
      <ReusableSection
        header={speakersContent.header}
        keywords={speakersContent.keywords}
        text={speakersContent.text}
        textColor="#FFF6ED"
        backgroundColor="#C24002"
        buttonData={speakersContent.buttonData}
      >
        <SpeakerWrapper />
      </ReusableSection>
      <PaddingTop backgroundColor="#FFF6ED"/>
      <ReusableSection
        header={venueContent.header}
        keywords={venueContent.keywords}
        text={venueContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
      >
        <VenueWrapper/>
      </ReusableSection>
      <SloganBanner />
      <PaddingTop/>
    </>
  );
};

export default HomePageWrapper;
