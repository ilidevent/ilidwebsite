"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

const AttendPageWrapper = () => {
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
    <div>AttendPageWrapper</div>
  )
}

export default AttendPageWrapper