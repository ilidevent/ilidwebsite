"use client";

import React, { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import Footer from "../Navigation/Footer";
import Preloader from "../Navigation/Preloader";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import ReusableSection from "../ReUsables/ReusableSection";
// import AttendForm from "./AttendForm";
import Navbar from "../Navigation/Navbar";
import VenueWrapper from "../ReUsables/VenueWrapper";
import OpportunityWrapper from "../ReUsables/OpportunityWrapper";
import SloganBanner from "../ReUsables/SloganBanner";
import PaddingTop from "../ReUsables/PaddingTop";
import CountDown from "../ReUsables/CountDown";
import SponsorsWrapper from "../ReUsables/SponsorsWrapper";
import FAQSection from "../ReUsables/FAQSection";
import JoinWrapper from "../ReUsables/JoinWrapper";
import { JoinData } from "@/utils";

const AttendPageWrapper = () => {
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
    largeText: "Attend ILID 2025 and be part of the change",
    normalText:
      "It's where ambitious students, industry experts, visionary leaders, and impactful organizations to create sustainable solutions for our communities.",
    buttonText: "Fill out this form to register for the summit",
    buttonProps: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank",
    },
  };

  const HeroBreakpoints = {
    lg: "84vh",
    nm: "95vh",
    md: "63vh",
    sm: "81vh",
    smm: "95vh",
    smmm: "97vh",
  };

  // const formContent = {
  //   header: "Secure your spot at ILID 2025",
  //   keywords: ["Secure"],
  //   text: "Join us in reshaping Cameroon's infrastructure for a sustainable future. Fill out the form below to secure your place at ILID 2025.",
  // };

  const opportunityContent = {
    header: "Unlock New Opportunities",
    keywords: ["Unlock"],
    text: "ILID offers a unique opportunity to be part of a transformative initiative aimed at reshaping Cameroon's infrastructure. By attending, you'll gain from:",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank"
    },
  };

  const venueContent = {
    header: "ILID 2025 event venue",
    keywords: ["ILID", "2025"],
    text: "The event premieres in Yaoundé, Cameroon. Day One (opening ceremony) and Day Four (closing ceremony) will be held at SINAHA Hotel, while Day Three and Day Four (lab sessions) will take place at MBOA Hub.",
  };

  const countDownContent = {
    header: "Countdown to ILID 2025",
    keywords: [],
    // text: "Stay tuned as we count down to the ILID 2025, where innovation and collaboration meet for impact.",
    text: "ILID 2025 is now live! Enjoy inspiring sessions, hands-on labs, and networking moments that spark innovative ideas and forge lasting partnerships.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank"
    },
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

  const joinContent = {
    header: "Join the Movement",
    keywords: ["Join"],
    text: "Be part of ILID 2025. Collaborate, Share insights, and Pitch transformative ideas to drive sustainable development and innovation forward.",
    buttonData: {
      name: "About ILID 2025",
      link: "/about",
      // buttonText: "Empowering change through innovation.",
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
        <HeroSection
          herocontent={HeroContent}
          breakpoints={HeroBreakpoints}
          lenis={lenis}
          reference={formRef}
        />
        <VenueBanner />
        {/* <ReusableSection
          header={formContent.header}
          keywords={formContent.keywords}
          text={formContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          ref={formRef}
        >
          <AttendForm />
        </ReusableSection> */}
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
        <PaddingTop backgroundColor="#FFF6ED" />
        <PaddingTop backgroundColor="#C24002" />
        <ReusableSection
          header={countDownContent.header}
          keywords={countDownContent.keywords}
          text={countDownContent.text}
          textColor="#FFF6ED"
          backgroundColor="#C24002"
          buttonData={countDownContent.buttonData}
        >
          <CountDown />
        </ReusableSection>
        <PaddingTop backgroundColor="#FFF6ED" />
        <ReusableSection
          header={venueContent.header}
          keywords={venueContent.keywords}
          text={venueContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
        >
          <VenueWrapper />
        </ReusableSection>
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
          header={joinContent.header}
          keywords={joinContent.keywords}
          text={joinContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={joinContent.buttonData}
        >
          <JoinWrapper joinData={JoinData} />
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

export default AttendPageWrapper;
