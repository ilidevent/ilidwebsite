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
      "Participate in the Innovation Lab, pitch your innovative idea, and unlock the opportunity to secure essential funding for its development. Application ends April 12, 2025, at exactly 11:59 pm",
    buttonProps: {
      name: "Apply for Innovation Lab",
      link: "https://shorturl.at/aWyw7",
      target: "_blank"
    },
  };

  const HeroBreakpoints = {
    lg: "82vh",
    nm: "92vh",
    md: "59vh",
    sm: "72vh",
    smm: "85vh",
    smmm: "87vh",
  };

  const pitchContent = {
    header: "About the Lab & Pitch Contest",
    keywords: ["About"],
    text: "Participants are invited to delve deep into the critical areas affecting our communities. Application ends April 12, 2025, at exactly 11:59 pm",
    buttonData: {
      name: "Apply for Innovation Lab",
      link: "https://shorturl.at/UNNe5",
      target: "_blank"
    },
  };

  const whoContent = {
    header: "Who should apply",
    keywords: ["Who"],
    text: "Calling all passionate STEM students ready to drive community transformation. Application ends April 12, 2025, at exactly 11:59 pm",
    buttonData: {
      name: "Apply for Innovation Lab",
      link: "https://shorturl.at/UNNe5",
      target: "_blank"
    },
  };

  const highlight = {
    text: "This year, the Innovation Lab & Pitch Contest shines an even brighter spotlight on groundbreaking innovations and projects at the forefront of sustainable infrastructure development in Cameroon. The Innovation Lab serves as a collaborative hub where STEM students refine their ideas, develop practical skills, and create sustainable solutions to address critical challenges. Embracing the core principles of innovation, sustainability, and community empowerment, the contest serves as a dynamic platform for visionaries and changemakers to present transformative solutions that address the pressing real-world challenges our nation faces today.",
    keyPhrases: ["sustainable infrastructure development in Cameroon"],
  };

  const highlighttwo = {
    text: "The Innovation Lab is for 45 passionate STEM (Science, Technology, Engineering, and Mathematics) with strong dedication to solving real-world problems our communities are facing. The aim is to empower these few to lead the youth involvement in accelerating context-based infrastructure solutions in Cameroon. Application Deadline: April 12, 2025, at exactly 11:59 pm",
    keyPhrases: ["STEM (Science, Technology, Engineering, and Mathematics)", "strong dedication", "Application Deadline:"],
  };

  const benefitContent = {
    header: "Benefits of the Lab",
    keywords: ["Benefits"],
    text: "Be part of ILID 2025. Collaborate, Share insights, and Pitch transformative ideas to drive sustainable development and innovation forward.",
    buttonData: {
      name: "Apply for Innovation Lab",
      link: "https://shorturl.at/UNNe5",
      target: "_blank"
    },
  };

  const whoapplyContent = {
    header: "Eligibility Criteria",
    keywords: ["Eligibility"],
    text: "Discover if you’re ready to join us and reshape Cameroon’s infrastructure landscape with your innovation.",
    buttonData: {
      name: "Apply for Innovation Lab",
      link: "https://shorturl.at/UNNe5",
      target: "_blank"
    },
  };

  const whattoExpectContent = {
    header: "What to expect at the pitch contest",
    keywords: ["What", "to", "expect"],
    text: "Be part of ILID 2025. Collaborate, Share insights, and Pitch transformative ideas to drive sustainable development and innovation forward.",
    buttonData: {
      name: "Apply for Innovation Lab",
      link: "https://shorturl.at/UNNe5",
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
          header={whoContent.header}
          keywords={whoContent.keywords}
          text={whoContent.text}
          textColor="#000000"
          backgroundColor="#FFF6ED"
          buttonData={whoContent.buttonData}
        >
          <div className={styles.about__width}>
            <HighlightedPhrases
              text={highlighttwo.text}
              keyPhrases={highlighttwo.keyPhrases}
            />
          </div>
        </ReusableSection>
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
