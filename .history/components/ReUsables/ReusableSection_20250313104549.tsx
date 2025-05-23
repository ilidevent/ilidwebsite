import React from 'react'
import HighlightedText from './HighlighedText'
import styles from "../../styles/ReUsables/reusablesection.module.scss"


interface ReusableSectionProps {
  header: string;
  keywords?: string[];
  text: string;
  textColor: string;
  dynamicComponent: React.ReactNode;
  buttonData?: {
    name: string;
    link: string;
  };
}

const ReusableSection = ({header, keywords, text, textColor, dynamicComponent, buttonData} : ) => {
  return (
    <section className={`section ${styles.rs__section}`}>
      <div className={`container ${styles.rs__container}`}>
        <div className={styles.rscontent__header}>
          <HighlightedText/>
          <p></p>
        </div>
      </div>
    </section>
  )
}

export default ReusableSection