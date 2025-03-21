import React from "react";
import Button from "./Button";
import Image from "next/image";
import Lenis from "lenis";
import HEROBACK from "../../public/svg/heroback.svg"
import styles from "../../styles/ReUsables/herosection.module.scss";

interface HeroContent {
  largeText: string;
  normalText: string;
  buttonText?: string;
  buttonProps: {
    name: string;
    link: string;
  };
}

interface HeroBreakpoints {
  lg: string;
  nm: string;
  md: string;
  sm: string;
}

const HeroSection = ({
  herocontent,
  breakpoints,
  lenis,
  reference,
}: {
  herocontent: HeroContent;
  breakpoints: HeroBreakpoints;
  lenis?: Lenis | null;
  reference?: React.RefObject<HTMLDivElement | null>;
}) => {

  const buttonData = {
    name: "Pitch your idea",
    link: "/pitch-contest",
  }

  

  return (
    <section
      className={styles.hero__section}
      style={
        {
          "--lg": breakpoints.lg,
          "--nm": breakpoints.nm,
          "--md": breakpoints.md,
          "--sm": breakpoints.sm,
        } as React.CSSProperties
      }
    >
      <div className={styles.hero__container}>
        <div className={styles.content__wrapper}>
          <div className={styles.large__text}>
            <h1>{herocontent.largeText}</h1>
          </div>
          <div className={styles.normal__text}>
            <p>{herocontent.normalText}</p>
          </div>
          <div className={styles.hbutton__wrapper}>
            {herocontent.buttonText && <p className={styles.button__text}>{herocontent.buttonText}</p>}
            <Button fill={false} buttonInfo={buttonData} />
          </div>
        </div>
      </div>
      <div className={styles.hero__image}>
        <Image fill quality={100} alt="ILID Pattern" src={HEROBACK}/>
      </div>
    </section>
  );
};

export default HeroSection;
