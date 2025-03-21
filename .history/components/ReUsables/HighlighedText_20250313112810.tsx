import React from 'react'
import styles from "../../styles/ReUsables/h";

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
            <span key={index} style={{color: "var(--orange)"}}>
              {word}{" "}
            </span>
          );
        } else {
          return (
            <span key={index} style={{color: color}}>
              {word}{" "}
            </span>
          );
        }
      })}
    </p>
  );
};

export default HighlightedText;