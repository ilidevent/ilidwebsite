"use client";

import React, {useRef, useEffect} from "react";
import Image from "next/image";
import gsap from "gsap";
import IMAGE3 from "../../public/images/bettermarque.jpg";
import IMAGE2 from "../../public/images/bettermarque2.png";
import { betterMarqueAnim } from "@/animations";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "../../styles/Navigation/bettermarque.module.scss"

const BetterMarque = ({activeBetter, setActiveBetter}: {activeBetter: boolean, setActiveBetter: React.Dispatch<React.SetStateAction<boolean>>}) => {
  const betterRef = useRef(null);
  const logoRef = useRef(null);
  const footerRef = useRef(null);
  const refs = useRef<HTMLSpanElement[]>([]);
  const betterText = "The key to Better Marque's success lies in our ability to deliver unique experiences to our end clients. We are committed to helping you leave a lasting impression.";

  const splitwords = () => {
    let body: JSX.Element[] = [];
    betterText.split(" ").forEach((word, i) => {
      body.push(
        <div key={`word-${i}`} className={styles.word__wrapper}>
          <p
            ref={(el) => el && refs.current.push(el)}
            className={`${styles.word} ${
              word === "Better" || word === "Marque" || word === "Marque's"
                ? styles.highlight
                : ""
            }`}
          >
            {word}
          </p>
        </div>
      );
    });

    return body;
  }; 

  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();

    //TL 1
    tl.to(betterRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
      duration: 0.7,
      delay: 0.7,
    }),
      tl.to(
        logoRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
          duration: 0.7,
        },
        ">"
      ),
      tl.to(
        refs.current,
        {
          y: "0%",
          ease: "none",
          stagger: 0.008,
        },
        ">"
      );

    tl.to(
      footerRef.current,
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1,
      },
      ">-0.7"
    );

    //TL 2
    tl2.to(betterRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      duration: 0.7,
    }),
      tl2.to(
        logoRef.current,
        {
          clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          ease: "power4.inOut",
          duration: 0.7,
        },
        "<"
      ),
      tl2.to(
        refs.current,
        {
          y: "-100%",
          ease: "none",
          stagger: 0.008,
        },
        "<"
      );

    tl2.to(
      footerRef.current,
      {
        clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
        ease: "power4.inOut",
        duration: 1,
      },
      "<"
    );

    tl.pause();
    tl2.pause();

    if (activeBetter) {
      tl.restart();
    } else {
      tl2.restart();
    }

    return () => {
      tl.kill();
      tl2.kill();
    };
  }, [activeBetter]);
  
  return (
    <motion.div
      variants={betterMarqueAnim}
      animate={activeBetter ? "open" : "closed"}
      className={styles.better__marque}
    >
      <div
        className={styles.bi__wrapper}
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        ref={betterRef}
      >
        <div className={styles.b__image}>
          <Image
            src={IMAGE3}
            fill
            quality={100}
            alt="Better Marque"
            sizes="(max-width: 600px) 100%, 100%"
          />
        </div>
        <div className={styles.b__contact}>
          <Icon
            icon="fluent-mdl2:cancel"
            onClick={() => setActiveBetter(false)}
          />
            <Link href="https://wa.me/+237693370638">
              {t("Navigation:contact")}
            </Link>
        </div>
      </div>
      <div className={styles.bc__content}>
        <div
          className={styles.logo}
          style={{
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          }}
          ref={logoRef}
        >
          <Image
            src={IMAGE2}
            fill
            alt="Better Marque"
            quality={100}
            sizes="(max-width: 600px) 100%, 100%"
            loading="eager"
          />
        </div>
        <div className={styles.text}>{splitwords()}</div>

        <div
          className={styles.b__footer}
          style={{
            clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
          }}
          ref={footerRef}
        >
          <Link href="https://www.bettermarque.com" className={styles.coming}>
            Website
          </Link>
          <div className={styles.button}>
            <Link href="https://www.instagram.com/bettermarque/">
              Instagram
            </Link>
            <Link href="https://web.facebook.com/profile.php?id=61555159313413">
              Facebook
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BetterMarque;
