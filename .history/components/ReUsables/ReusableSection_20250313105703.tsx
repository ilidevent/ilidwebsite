import React from "react";
import HighlightedText from "./HighlighedText";
import Button from "./Button";
import ButtonTwo from "./ButtonTwo";
import styles from "../../styles/ReUsables/reusablesection.module.scss";

interface ReusableSectionProps {
  header: string;
  keywords?: string[];
  text: string;
  textColor: string;
  backgroundColor: string;
  dynamicComponent: React.ReactNode;
  buttonData?: {
    name: string;
    link: string;
  };
}

const ReusableSection = ({
  header,
  keywords,
  text,
  textColor,
  backgroundColor,
  dynamicComponent,
  buttonData,
}: ReusableSectionProps) => {
  return (
    <section className={`section ${styles.rs__section}`}>
      <div className={`container ${styles.rs__container}`}>
        <div className={styles.rscontent__header}>
          <HighlightedText
            text={header}
            keywords={keywords}
            color={textColor}
          />
          <p>{text}</p>
        </div>
        <div className={styles.rsmain__content}>{dynamicComponent}</div>
        {buttonData && backgroundColor==="#C24002" ? <Button/>}
      </div>
    </section>
  );
};

export default ReusableSection;
