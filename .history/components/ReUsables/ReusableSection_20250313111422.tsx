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
  children: React.ReactNode;
}

const ReusableSection = ({
  header,
  keywords,
  text,
  textColor,
  backgroundColor,
  buttonData,
  children,
}: ReusableSectionProps) => {
  return (
    <section className={`section ${styles.rs__section}`} style={{bac: backgroundColor}}>
      <div className={`container ${styles.rs__container}`}>
        <div className={styles.rscontent__header}>
          <HighlightedText
            text={header}
            keywords={keywords}
            color={textColor}
          />
          <p>{text}</p>
        </div>
        <div className={styles.rsmain__content}>{children}</div>
        {buttonData && backgroundColor === "#C24002" ? (
          <Button fill={false} buttonInfo={buttonData} />
        ) : (
          <ButtonTwo buttonInfo={buttonData} />
        )}
      </div>
    </section>
  );
};

export default ReusableSection;
