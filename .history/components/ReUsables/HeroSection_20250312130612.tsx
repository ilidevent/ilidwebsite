import React from "react";
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
}: {
  herocontent: HeroContent;
  breakpoints: HeroBreakpoints;
}) => {
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
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.content__wrapper}>
          <div className={styles.large__text}>
            <h1>{herocontent.largeText}</h1>
          </div>
          <div className={styles.normal__text}>
            <p>{herocontent.normalText}</p>
          </div>
          <div className={styles.hbutton__wrapper}>
            {herocontent.buttonText && <p className={styles.}>{herocontent.buttonText}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
