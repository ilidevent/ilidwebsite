import React from 'react'

import styles from "./HighlightedText.module.scss";

interface HighlightedTextProps {
  text: string;
  // List of words you want to highlight (in lowercase)
  keywords?: string[];
  color: string;
}

const HighlightedText = ({
  text,
  keywords,
  color
}: HighlightedTextProps) => {
  // Split the text into words
  const words = text.split(" ");

  return (
    <p>
      {words.map((word, index) => {
        // Remove punctuation for matching and convert to lowercase.
        const cleanedWord = word.replace(/[.,!?;:()]/g, "");

        if (keywords?.includes(cleanedWord)) {
          return (
            <span key={index} style={{color: }}>
              {word}{" "}
            </span>
          );
        } else {
          return (
            <span key={index} className={styles.normaltext}>
              {word}{" "}
            </span>
          );
        }
      })}
    </p>
  );
};

export default HighlightedText;