"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import ReusableSection from "../ReUsables/ReusableSection";
import AttendForm from "./AttendForm";
import OpportunityWrapper from "../ReUsables/OpportunityWrapper";
import SpeakerForm from "../SpeakerPage/SpeakerForm";

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
    header: "Secure your spot at ILID 2025",
    keywords: ["Secure"],
    text: "Join us in reshaping Cameroon's infrastructure for a sustainable future. Fill out the form below to secure your place at ILID 2025.",
  };

  const opportunityContent = {
    header: "Unlock New Opportunities",
    keywords: ["Unlock"],
    text: "ILID offers a unique opportunity to be part of a transformative initiative aimed at reshaping Cameroon's infrastructure. By attending, you'll gain from:",
    buttonData: {
      name: "Get to know the agenda",
      link: "/agenda",
    },
  };

  const speakerformContent = {
    header: "Speak at ILID 2025",
    keywords: ["Speak"],
    text: "Join us by sharing your expertise and inspiring change. Complete the form below to be considered as a speaker at ILID 2025.",
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
      >
        <AttendForm />
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
      {/* <ReusableSection
        header={speakerformContent.header}
        keywords={speakerformContent.keywords}
        text={speakerformContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
      >
        <SpeakerForm />
      </ReusableSection> */}
    </>
  );
};

export default AttendPageWrapper;
