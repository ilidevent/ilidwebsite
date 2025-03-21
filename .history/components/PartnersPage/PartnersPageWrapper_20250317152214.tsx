"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import ReusableSection from "../ReUsables/ReusableSection";
import { WhySponsorData } from "@/utils";
import SloganBanner from "../ReUsables/SloganBanner";
import HeroSection from "../ReUsables/HeroSection";
import JoinWrapper from "../ReUsables/JoinWrapper";
import PartnersForm from "./PartnersForm";
import VenueBanner from "../ReUsables/VenueBanner";
import PaddingTop from "../ReUsables/PaddingTop";

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

  const whyContent = {
    header: "Why Sponsor or Partner at ILID 2025?",
    keywords: ["Why"],
    text: "ILID offers a unique opportunity to be part of a transformative initiative aimed at reshaping Cameroon's infrastructure. By sponsoring or partnering, you'll gain from:",
    buttonData: {
      name: "Learn more about ILID 2025",
      link: "/about",
    },
  };


  const formContent = {
    header: "Become a Sponsor or Partner",
    keywords: ["Become"],
    text: "Empower innovation and drive positive change. Fill out the form to become a sponsor or  partner at ILID 2025.",
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
        <PartnersForm />
      </ReusableSection>
      <PaddingTop/>
      <SloganBanner/>
      <ReusableSection
        header={whyContent.header}
        keywords={whyContent.keywords}
        text={whyContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        buttonData={whyContent.buttonData}
      >
        <JoinWrapper joinData={WhySponsorData}/>
      </ReusableSection>
    </>
  )
}

export default PartnersPageWrapper