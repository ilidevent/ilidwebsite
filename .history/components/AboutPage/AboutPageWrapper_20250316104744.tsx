"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import HeroSection from "../ReUsables/HeroSection";
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
  
  return (
    <div>AboutPageWrapper</div>
  )
}

export default AboutPageWrapper