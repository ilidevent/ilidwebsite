"use client";

import React, { useEffect, useState } from "react";
import Navbar from "../Navigation/Navbar";
import HeroSection from "../ReUsables/HeroSection";
import VenueBanner from "../ReUsables/VenueBanner";
import Lenis from "lenis";
import Footer from "../Navigation/Footer";
import ReusableSection from "../ReUsables/ReusableSection";
import SloganBanner from "../ReUsables/SloganBanner";
import PaddingTop from "../ReUsables/PaddingTop";
import AboutboxWrapper from "../ReUsables/AboutboxWrapper";
import SpeakerWrapper from "../ReUsables/SpeakerWrapper";
import OpportunityWrapper from "../ReUsables/OpportunityWrapper";
import VenueWrapper from "../ReUsables/VenueWrapper";
import CountDown from "../ReUsables/CountDown";
import SponsorsWrapper from "../ReUsables/SponsorsWrapper";
import JoinWrapper from "../ReUsables/JoinWrapper";
import FAQSection from "../ReUsables/FAQSection";
import AgendaWrapper from "../ReUsables/AgendaWrapper";
import Preloader from "../Navigation/Preloader";
import { JoinData } from "@/utils";
import { AboutData } from "@/utils";

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
      "ILID helps STEM students to confront real infrastructure problems with sustainable solutions and practical efforts. Together, we are converting ideas into actions that have a lasting effect on our communities.",
    buttonText: "Got an innovative idea to present?",
    buttonProps: {
      name: "Apply for Innovation Lab",
      link: "https://shorturl.at/aWyw7",
      target: "_blank",
    },
  };

  const HeroBreakpoints = {
    lg: "103vh",
    nm: "110vh",
    md: "68vh",
    sm: "90vh",
    smm: "104vh",
    smmm: "113vh",
  };

  //SectionContent
  const aboutContent = {
    header: "About ILID 2025",
    keywords: ["About"],
    text: "ILID 2025 is a groundbreaking four day event tackling critical infrastructure challenges in our communities. By empowering STEM students and young professionals, ILID fosters innovative solutions for sustainable development and resilience.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank",
    },
  };

  const opportunityContent = {
    header: "Unlock New Opportunities",
    keywords: ["Unlock"],
    text: "ILID offers a unique opportunity to be part of a transformative initiative aimed at reshaping Cameroon's infrastructure. By attending, you'll gain from:",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank",
    },
  };

  const speakersContent = {
    header: "Unparalleled Perspectives",
    keywords: [],
    text: "Get inspired by emerging voices and industry pioneers as they unite to redefine our community and spark transformative change.",
    buttonData: {
      name: "See all speakers",
      link: "/speakers",
    },
  };

  const venueContent = {
    header: "ILID 2025 event venue",
    keywords: ["ILID", "2025"],
    text: "The event premieres in Yaoundé, Cameroon. Day One (opening ceremony) and Day Four (closing ceremony) will be held at SINAHA Hotel, while Day Two and Day Three (lab sessions) will take place at MBOA Hub.",
  };

  const agendaContent = {
    header: "ILID 2025 Agenda",
    keywords: ["Agenda"],
    text: "Immerse yourself in four days of learning, innovation, and networking.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank",
    },
  };

  const countDownContent = {
    header: "Countdown to ILID 2025",
    keywords: [],
    // text: "Stick around as we get closer to ILID 2025. A space where bright minds come together, to innovate, collaborate and create lasting change",
    text: "ILID 2025 is now live! Enjoy inspiring sessions, hands-on labs, and networking moments that spark innovative ideas and forge lasting partnerships.",
    buttonData: {
      name: "Register for summit",
      link: "https://shorturl.at/zfxQQ",
      target: "_blank",
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
          overflow: !animationFinished ? "hidden" : "visible",
        }}
      >
        <Navbar animationFinished={animationFinished} />
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
          header={opportunityContent.header}
          keywords={opportunityContent.keywords}
          text={opportunityContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={opportunityContent.buttonData}
        >
          <OpportunityWrapper />
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
          header={agendaContent.header}
          keywords={agendaContent.keywords}
          text={agendaContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={agendaContent.buttonData}
        >
          <AgendaWrapper />
        </ReusableSection>
        <SloganBanner />
        <PaddingTop backgroundColor="#FFF6ED" />
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

export default HomePageWrapper;
