"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import Footer from "../Navigation/Footer";
import Preloader from "../Navigation/Preloader";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import SloganBanner from "../ReUsables/SloganBanner";
import ReusableSection from "../ReUsables/ReusableSection";
import AboutboxWrapper from "../ReUsables/AboutboxWrapper";
import DontMissWrapper from "../ReUsables/DontMissWrapper";
import VenueWrapper from "../ReUsables/VenueWrapper";
import QuickStoryWrapper from "./QuickStoryWrapper";
import { AboutData, DontMissData, JoinData } from "@/utils";
import CountDown from "../ReUsables/CountDown";
// import SponsorsWrapper from "../ReUsables/SponsorsWrapper";
import JoinWrapper from "../ReUsables/JoinWrapper";
import Navbar from "../Navigation/Navbar";
import FAQSection from "../ReUsables/FAQSection";
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
      "ILID 2025 brings together visionaries from various sectors to collaborate and create lasting change.",
      buttonProps: {
        name: "Register for summit",
        link: "https://shorturl.at/zfxQQ",
        target: "_blank"
      },
  };

  const HeroBreakpoints = {
    lg: "80vh",
    nm: "90vh",
    md: "55vh",
    sm: "72vh",
    smm: "80vh",
    smmm: "84vh",
  };

  const aboutContent = {
    header: "About ILID 2025",
    keywords: ["About"],
    text: "ILID 2025 is a groundbreaking four day event tackling critical infrastructure challenges in our communities. By empowering STEM students and young professionals, ILID fosters innovative solutions for sustainable development and resilience.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank"
    },
  };

  const quickContent = {
    header: "Quick Story behind ILID",
    keywords: ["Quick", "Story"],
    text: "A movement that engages the innovative spirit and drive of young Cameroonians to produce sustainable and practical solutions for critical problems.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank"
    },
  };

  const missContent = {
    header: "Don't Miss Out on ILID 2025",
    keywords: ["Don't", "Miss", "Out"],
    text: "Gain insights, network with top professionals, and be part of a movement driving sustainable progress.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank"
    },
  };

  const venueContent = {
    header: "ILID 2025 event venue",
    keywords: ["ILID", "2025"],
    text: "The event premieres in Yaoundé, Cameroon. Venue details are yet to be confirmed and will be communicated as soon as possible.",
  };

  const countDownContent = {
    header: "Countdown to ILID 2025",
    keywords: [],
    text: "Stay tuned as we count down to the ILID 2025, where innovation and collaboration meet for impact.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank"
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
        <Navbar animationFinished={animationFinished}/>
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
          <AboutboxWrapper data={AboutData} />
        </ReusableSection>
        <ReusableSection
          header={quickContent.header}
          keywords={quickContent.keywords}
          text={quickContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={quickContent.buttonData}
        >
          <QuickStoryWrapper />
        </ReusableSection>
        <PaddingTop backgroundColor="#FFF6ED" />
        <SloganBanner />
        <PaddingTop backgroundColor="#FFF6ED" />
        <ReusableSection
          header={missContent.header}
          keywords={missContent.keywords}
          text={missContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={missContent.buttonData}
        >
          <DontMissWrapper data={DontMissData} />
        </ReusableSection>
        <ReusableSection
          header={venueContent.header}
          keywords={venueContent.keywords}
          text={venueContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
        >
          <VenueWrapper />
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

export default AboutPageWrapper;
