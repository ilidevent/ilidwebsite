"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import ReusableSection from "../ReUsables/ReusableSection";
import Preloader from "../Navigation/Preloader";
import Footer from "../Navigation/Footer";
import { WhySponsorData, JoinDataThree } from "@/utils";
import SloganBanner from "../ReUsables/SloganBanner";
import HeroSection from "../ReUsables/HeroSection";
// import SponsorsWrapper from "../ReUsables/SponsorsWrapper";
import FAQSection from "../ReUsables/FAQSection";
import JoinWrapper from "../ReUsables/JoinWrapper";
import Navbar from "../Navigation/Navbar";
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
    },
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

  // const partnerContent = {
  //   header: " Partners & Sponsors",
  //   keywords: ["Partners", "&", "Sponsors"],
  //   text: "Showcasing our valued partners and sponsors who play a key role in supporting and enhancing our initiatives.",
  // };

  const joinContent = {
    header: "Join the Movement",
    keywords: ["Join"],
    text: "Be part of ILID 2025. Collaborate, Share insights, and Pitch transformative ideas to drive sustainable development and innovation forward.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank",
      buttonText: "Join us to explore, learn, and connect at ILID 2025.",
    },
  };

  const faqContent = {
    header: "Frequently Asked Questions",
    keywords: ["Frequently"],
    text: "Explore our FAQ for essential insights to ensure a successful ILID experience. If your questions aren’t answered here, contact us at ilid.event@gmail.com",
  };

  const formContent = {
    header: "Become a Sponsor or Partner",
    keywords: ["Become"],
    text: "Empower innovation and drive positive change. Fill out the form to become a sponsor or  partner at ILID 2025.",
  };

  const HeroBreakpoints = {
    lg: "80vh",
    nm: "90vh",
    md: "55vh",
    sm: "72vh",
    smm: "83vh",
    smmm: "85vh",
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
          <PartnersForm />
        </ReusableSection>
        <PaddingTop backgroundColor="#FFF6ED" />
        <SloganBanner />
        <ReusableSection
          header={whyContent.header}
          keywords={whyContent.keywords}
          text={whyContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={whyContent.buttonData}
        >
          <JoinWrapper joinData={WhySponsorData} />
        </ReusableSection>
        {/* <ReusableSection
          header={partnerContent.header}
          keywords={partnerContent.keywords}
          text={partnerContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
        >
          <SponsorsWrapper />
        </ReusableSection> */}
        <ReusableSection
          header={joinContent.header}
          keywords={joinContent.keywords}
          text={joinContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={joinContent.buttonData}
        >
          <JoinWrapper joinData={JoinDataThree} />
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
        <Footer />
      </div>
    </>
  );
};

export default PartnersPageWrapper;
