"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
import Footer from "../Navigation/Footer";
import Preloader from "../Navigation/Preloader";
import VenueBanner from "../ReUsables/VenueBanner";
import HighlightedPhrases from "../ReUsables/HighlightedPhrases";
import AboutboxWrapper from "../ReUsables/AboutboxWrapper";
import PitchApply from "./PitchApply";
import SloganBanner from "../ReUsables/SloganBanner";
import DontMissWrapper from "../ReUsables/DontMissWrapper";
import { BenefitsData, WhoApplyData, pitchDataMain } from "@/utils";
import Navbar from "../Navigation/Navbar";
import ReusableSection from "../ReUsables/ReusableSection";
import styles from "../../styles/ReUsables/pitchpage.module.scss";
import PaddingTop from "../ReUsables/PaddingTop";
// import SponsorsWrapper from "../ReUsables/SponsorsWrapper";
import FAQSection from "../ReUsables/FAQSection";
import JoinWrapper from "../ReUsables/JoinWrapper";

const PitchPageWrapper = () => {
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
    largeText: "Unleash your Innovation at ILID 2025",
    normalText:
      "ParticipaPitch your existing idea and stand a chance to secure funding for your innovation.",
    buttonProps: {
      name: "Apply for Innovation Lab",
      link: "https://shorturl.at/UNNe5",
      target: "_blank"
    },
  };

  const HeroBreakpoints = {
    lg: "80vh",
    nm: "90vh",
    md: "55vh",
    sm: "70vh",
    smm: "78vh",
    smmm: "83vh",
  };

  const pitchContent = {
    header: "About the Innovation Lab & Pitch Contest",
    keywords: ["About"],
    text: "Participants are invited to delve deep into the critical areas affecting our communities.",
    buttonData: {
      name: "Apply for Innovation Lab",
      link: "https://shorturl.at/UNNe5",
      target: "_blank"
    },
  };

  const highlight = {
    text: "This year, the ILID Pitch Contest shines an even brighter spotlight on groundbreaking innovations and projects at the forefront of sustainable infrastructure development in Cameroon. Embracing the core principles of innovation, sustainability, and community empowerment, the contest serves as a dynamic platform for visionaries and changemakers to present transformative solutions that address the pressing real-world challenges our nation faces today.",
    keyPhrases: ["sustainable infrastructure development in Cameroon"],
  };

  const benefitContent = {
    header: "Benefits of Pitching",
    keywords: ["Benefits"],
    text: "Be part of ILID 2025. Collaborate, Share insights, and Pitch transformative ideas to drive sustainable development and innovation forward.",
    buttonData: {
      name: "Pitch my idea",
      link: "/pitch-contest",
    },
  };

  const whoapplyContent = {
    header: "Who should Apply",
    keywords: ["Who"],
    text: "We're seeking visionary students, disruptive start-ups, and creative minds ready to reshape Cameroon’s infrastructure landscape. If you have a breakthrough idea and a working prototype, this is your stage.",
    buttonData: {
      name: "Pitch my idea",
      link: "/pitch-contest",
    },
  };

  const whattoExpectContent = {
    header: "What to expect at the pitch contest",
    keywords: ["What", "to", "expect"],
    text: "Be part of ILID 2025. Collaborate, Share insights, and Pitch transformative ideas to drive sustainable development and innovation forward.",
    buttonData: {
      name: "Pitch my idea",
      link: "/pitch-contest",
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
      name: "Secure my spot at ILID 2025",
      link: "/attend",
      buttonText: "Join us to explore, learn, and connect at ILID 2025.",
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
        <Navbar animationFinished={animationFinished} />
        <HeroSection herocontent={HeroContent} breakpoints={HeroBreakpoints} />
        <VenueBanner />
        <ReusableSection
          header={pitchContent.header}
          keywords={pitchContent.keywords}
          text={pitchContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={pitchContent.buttonData}
        >
          <div className={styles.about__width}>
            <HighlightedPhrases
              text={highlight.text}
              keyPhrases={highlight.keyPhrases}
            />
          </div>
        </ReusableSection>
        <ReusableSection
          header={benefitContent.header}
          keywords={benefitContent.keywords}
          text={benefitContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={benefitContent.buttonData}
        >
          <AboutboxWrapper data={BenefitsData} />
        </ReusableSection>
        <ReusableSection
          header={whattoExpectContent.header}
          keywords={whattoExpectContent.keywords}
          text={whattoExpectContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={whattoExpectContent.buttonData}
        >
          <PitchApply />
        </ReusableSection>
        <PaddingTop backgroundColor="#FFF6ED" />
        <SloganBanner />
        <ReusableSection
          header={whoapplyContent.header}
          keywords={whoapplyContent.keywords}
          text={whoapplyContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={whoapplyContent.buttonData}
        >
          <DontMissWrapper data={WhoApplyData} />
        </ReusableSection>
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
          <JoinWrapper joinData={pitchDataMain} />
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

export default PitchPageWrapper;
