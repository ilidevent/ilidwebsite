"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import TeamWrapper from "./TeamWrapper";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import SponsorsWrapper from "../ReUsables/SponsorsWrapper";
import PaddingTop from "../ReUsables/PaddingTop";
import FAQSection from "../ReUsables/FAQSection";
import Preloader from "../Navigation/Preloader";
import Footer from "../Navigation/Footer";
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
      "Get to know the team working collaboratively behind the scenes to help overcome infrastructure problems and foster sustainable progress for our communities.",
    buttonProps: {
      name: "Meet the team",
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

  const sectionContent = {
    header: "The Minds behind the Vision",
    keywords: ["Minds", "Vision"],
    text: "Get to know the team working collaboratively behind the scenes to help overcome infrastructure problems.",
  };

  const partnerContent = {
    header: " Partners & Sponsors",
    keywords: ["Partners", "&", "Sponsors"],
    text: "Showcasing our valued partners and sponsors who play a key role in supporting and enhancing our initiatives.",
    buttonData: {
      name: "Partner with us",
      link: "/partners",
    },
  };


  const faqContent = {
    header: "Frequently Asked Questions",
    keywords: ["Frequently"],
    text: "Explore our FAQ for essential insights to ensure a successful ILID experience. If your questions aren’t answered here, contact us at info@ilidevent.com.",
  };
//Preloader
const [animationFinished, setAnimationFinished] = useState(false);

return (
  <>
    {!animationFinished && <Preloader setAnimation={setAnimationFinished} />}

    <div
      style={{
        height: !animationFinished ? "100vh" : "",
        overflow: !animationFinished ? "hidden" : "",
      }}
    >
      <HeroSection
        herocontent={HeroContent}
        breakpoints={HeroBreakpoints}
        lenis={lenis}
        reference={sectionRef}
      />
      <VenueBanner />
      <ReusableSection
        header={sectionContent.header}
        keywords={sectionContent.keywords}
        text={sectionContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        ref={sectionRef}
      >
        <TeamWrapper/>
      </ReusableSection>
      <PaddingTop backgroundColor="#FFF6ED" />
      <ReusableSection
        header={partnerContent.header}
        keywords={partnerContent.keywords}
        text={partnerContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        buttonData={partnerContent.buttonData}
      >
        <SponsorsWrapper />
      </ReusableSection>
      <ReusableSection
        header={faqContent.header}
        keywords={faqContent.keywords}
        text={faqContent.text}
        textColor="#000000"
        backgroundColor="#FFF6ED"
        textEmail={true}
      >
        <FAQSection />
      </ReusableSection>
      </div>
    </>
  );
};

export default TeamPageWrapper;
