"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "../../styles/Navigation/preloader.module.scss";

const AnimatedPhrase = ({ phrase }: { phrase: string }) => {
  const refs = useRef<HTMLSpanElement[]>([]);
  const refsContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createAnimations();
  }, []);

  const createAnimations = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.05,
    });
  };

  const splitWords = () => {
    return phrase.split(" ").map((word, i) => (
      <p key={`word-${i}`} className={styles.word}>
        {splitLetters(word)}
      </p>
    ));
  };

  const splitLetters = (word: string) => {
    return word.split("").map((letter, index) => (
      <span
        key={`letter-${index}`}
        className={styles.letter}
        ref={(el) => {
          if (el && !refs.current.includes(el)) {
            refs.current.push(el);
          }
          // Note: No value is returned from this function.
        }}
      >
        {letter}
      </span>
    ));
  };

  return (
    <div ref={refsContainer} className={styles.animated__phrase}>
      {splitWords()}
    </div>
  );
};

export default AnimatedPhrase;
