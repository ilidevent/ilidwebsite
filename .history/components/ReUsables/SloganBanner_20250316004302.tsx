"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"; // Import the useGSAP hook
import styles from "../../styles/ReUsables/sloganbanner.module.scss";

const SloganBanner = () => {
  const firstSlide = useRef(null);
  const secondSlide = useRef(null);
  const sliderRef = useRef(null);
  const directionRef = useRef(-1); // Use useRef for mutable direction value
  // let xPercent = 0;
  // const speed = 0.1; // Adjust speed of movement

  // // Use useGSAP hook to handle gsap animations
  // useGSAP(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   gsap.to(sliderRef.current, {
  //     scrollTrigger: {
  //       trigger: document.documentElement,
  //       start: 0,
  //       end: window.innerHeight,
  //       scrub: 1,
  //       onUpdate: (e) => (directionRef.current = e.direction * -1), // Update directionRef's current property
  //     },
  //     x: "-150px",
  //   });
  //   requestAnimationFrame(animation);
  // });

  // const animation = () => {
  //   if (xPercent <= -100) xPercent = 0;
  //   if (xPercent > 0) xPercent = -100;
  //   gsap.set(firstSlide.current, { xPercent });
  //   gsap.set(secondSlide.current, { xPercent });
  //   xPercent += speed * directionRef.current; // Use directionRef's current property
  //   requestAnimationFrame(animation);
  // };
    // Create a ScrollTrigger that updates our directionRef based on scroll events.
    const st = ScrollTrigger.create({
      trigger: document.documentElement, // you might restrict this to a particular section
      start: 0,
      end: window.innerHeight,
      scrub: 1,
      onUpdate: (self) => {
        // Multiply by -1 to match your original logic: reverse the scroll direction value.
        directionRef.current = self.direction * -1;
      },
    });

    let xPercent = 0;
    const speed = 0.1;

    // The animation loop continuously updates the xPercent value for each slide.
    const animateSlides = () => {
      // When the translation passes -100 or 0, we reset it to create a looping effect.
      if (xPercent <= -100) xPercent = 0;
      if (xPercent > 0) xPercent = -100;

      // Update the positions of the two slide elements using xPercent.
      gsap.set(firstSlideRef.current, { xPercent });
      gsap.set(secondSlideRef.current, { xPercent });

      // Move the slides using the current scroll direction and our custom speed.
      xPercent += speed * directionRef.current;
      requestAnimationFrame(animateSlides);
    };

    requestAnimationFrame(animateSlides);

    // Cleanup the ScrollTrigger instance on component unmount.
    return () => {
      st.kill();
    };
  }, []);

  return (
    <section className={`${styles.sl__section}`}>
      <div className={styles.slslider__container}>
        <div className={styles.sl__slider} ref={sliderRef}>
          <div className={styles.slider__main} ref={firstSlide}>
            <div className={styles.slslider__content}>
              <div className={styles.slfirst__slide}>
                <p>
                  YOUTH BUILDING RESILIENT COMMUNITIES THROUGH INFRASTRUCTURE
                </p>
                <span className={styles.slspan__button}></span>
              </div>
              <div className={styles.slfirst__slide}>
                <p>
                  YOUTH BUILDING RESILIENT COMMUNITIES THROUGH INFRASTRUCTURE
                </p>
                <span className={styles.slspan__button}></span>
              </div>
            </div>
            <span className={styles.slslider__space}></span>
          </div>
          <div className={styles.slslider__main} ref={secondSlide}>
            <div className={styles.slslider__content}>
              <div className={styles.slfirst__slide}>
                <p>
                  YOUTH BUILDING RESILIENT COMMUNITIES THROUGH INFRASTRUCTURE
                </p>
                <span className={styles.slspan__button}></span>
              </div>
              <div className={styles.slfirst__slide}>
                <p>
                  YOUTH BUILDING RESILIENT COMMUNITIES THROUGH INFRASTRUCTURE
                </p>
                <span className={styles.slspan__button}></span>
              </div>
            </div>
            <span className={styles.slslider__space}></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganBanner;
