"use client";

import React, { useEffect, useState } from "react";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import Lenis from "lenis";
import Navbar from "../Navigation/Navbar";
import AgendaWrapper from "../ReUsables/AgendaWrapper";
import ReusableSection from "../ReUsables/ReusableSection";
import SloganBanner from "../ReUsables/SloganBanner";
import SponsorsWrapper from "../ReUsables/SponsorsWrapper";
import FAQSection from "../ReUsables/FAQSection";
import Footer from "../Navigation/Footer";
import Preloader from "../Navigation/Preloader";
import JoinWrapper from "../ReUsables/JoinWrapper";
import { JoinData } from "@/utils";
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
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank",
    },
  };

  const HeroBreakpoints = {
    lg: "80vh",
    nm: "90vh",
    md: "58vh",
    sm: "65vh",
    smm: "74vh",
    smmm: "81vh",
  };

  const agendaContent = {
    header: "ILID 2025 Agenda",
    keywords: ["Agenda"],
    text: "Immerse yourself in four days of learning, innovation, and networking for a sustainable future.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank",
    },
  };

  // const partnerContent = {
  //   header: "Partners & Sponsors",
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
        <Navbar animationFinished={animationFinished} />
        <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints} />
        <VenueBanner />
        <ReusableSection
          header={agendaContent.header}
          keywords={agendaContent.keywords}
          text={agendaContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={agendaContent.buttonData}
        >
          <AgendaWrapper />
        </ReusableSection>
        <PaddingTop backgroundColor="#FFF6ED" />
        <SloganBanner />
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
        <ReusableSection
          header={joinContent.header}
          keywords={joinContent.keywords}
          text={joinContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={joinContent.buttonData}
        >
          <JoinWrapper joinData={JoinData} />
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

export default AgendaPageWrapper;
