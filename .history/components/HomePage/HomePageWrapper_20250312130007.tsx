import React from 'react'
import HeroSection from '../ReUsables/HeroSection'

const HomePageWrapper = () => {
  const HeroContent = {
    largeText: "Youth building resilient communities through Infrastructure",
    normalText: " ILID empowers STEM students to tackle real-world infrastructure issues through sustainable innovation and practical action. Together, we’re turning ideas into action and creating lasting impact across our communities.",
    buttonText: "Got an innovative solution to present?",
    buttonProps: {
      name: "Pitch your idea",
      link: "/pitch-contest"
    }
  }

  const HeroBreakpoints = {
    lg: "100vh";
  nm: string;
  md: string;
  sm: string;
  }
  return (
    <>
      <HeroSection/>
    </>
  )
}

export default HomePageWrapper