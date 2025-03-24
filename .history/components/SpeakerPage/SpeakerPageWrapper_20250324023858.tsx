"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import PaddingTop from "../ReUsables/PaddingTop";
import SpeakerWrapper from "../ReUsables/SpeakerWrapper";
import VenueBanner from "../ReUsables/VenueBanner";
import SloganBanner from "../ReUsables/SloganBanner";
import ReusableSection from "../ReUsables/ReusableSection";
// import SponsorsWrapper from "../ReUsables/SponsorsWrapper";
import JoinWrapper from "../ReUsables/JoinWrapper";
import FAQSection from "../ReUsables/FAQSection";
import Navbar from "../Navigation/Navbar";
import Footer from "../Navigation/Footer";
import Preloader from "../Navigation/Preloader";
import SpeakerForm from "../SpeakerPage/SpeakerForm";
import { JoinDataTwo } from "@/utils";

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
    buttonText: "Share your expertise and shape the future at ILID 2025.",
  };

  const HeroBreakpoints = {
    lg: "100vh",
    nm: "102vh",
    md: "6vh",
    sm: "86vh",
    smm: "92vh",
    smmm: "104vh",
  };

  const formContent = {
    header: "Speak at ILID 2025",
    keywords: ["Speak"],
    text: "Join us by sharing your expertise and inspiring change. Complete the form below to be considered as a speaker at ILID 2025.",
  };

  const speakersContent = {
    header: "Unparalleled Perspectives",
    keywords: [],
    text: "Get inspired by emerging voices and industry pioneers as they unite to redefine our community and spark transformative change.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/svuGE",
      target: "_blank"
    },
  };

  // const partnerContent = {
  //   header: " Partners & Sponsors",
  //   keywords: ["Partners", "&", "Sponsors"],
  //   text: "Showcasing our valued partners and sponsors who play a key role in supporting and enhancing our initiatives.",
  //   buttonData: {
  //     name: "Partner with us",
  //     link: "/partners",
  //   },
  // };

  const joinContent = {
    header: "Join the Movement",
    keywords: ["Join"],
    text: "Be part of ILID 2025. Collaborate, Share insights, and Pitch transformative ideas to drive sustainable development and innovation forward.",
    buttonData: {
      name: "See the full program",
      link: "/agenda",
      buttonText: "Explore the ILID 2025 agenda and plan your experience.",
    },
  };

  const faqContent = {
    header: "Frequently Asked Questions",
    keywords: ["Frequently"],
    text: "Explore our FAQ for essential insights to ensure a successful ILID experience. If your questions aren’t answered here, contact us at ilid.event@gmail.com",
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
        <Navbar animationFinished={animationFinished}/>
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
          <SpeakerForm />
        </ReusableSection>
        <PaddingTop backgroundColor="#C24002" />
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
        <PaddingTop backgroundColor="#FFF6ED" />
        {/* <ReusableSection
          header={partnerContent.header}
          keywords={partnerContent.keywords}
          text={partnerContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={partnerContent.buttonData}
        >
          <SponsorsWrapper />
        </ReusableSection> */}
        <PaddingTop backgroundColor="#FFF6ED" />
        <ReusableSection
          header={joinContent.header}
          keywords={joinContent.keywords}
          text={joinContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={joinContent.buttonData}
        >
          <JoinWrapper joinData={JoinDataTwo} />
        </ReusableSection>
        <PaddingTop backgroundColor="#FFF6ED" />
        <SloganBanner />
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
        <Footer />
      </div>
    </>
  );
};

export default SpeakerPageWrapper;
