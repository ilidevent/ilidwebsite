import React from "react";
import styles from "../../styles/ReUsables/highlightedtext.module.scss";

interface HighlightedPhrasesProps {
  text: string;
  keyPhrases: string[];
  defaultColor: string;
  highlightColor: string;
}

// Helper to escape special regex characters
const escapeRegExp = (str: string) => {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
};

const HighlightedPhrases = ({
  text,
  keyPhrases,
}: HighlightedPhrasesProps) => {
  // If no key phrases, simply render the text.
  if (!keyPhrases || keyPhrases.length === 0) {
    return <p style={{ color: defaultColor }}>{text}</p>;
  }

  // Build a regex pattern from the key phrases.
  // The join '|' creates an alternation group for all phrases.
  const pattern = keyPhrases.map(phrase => escapeRegExp(phrase)).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');

  // Split the text by the regex.
  const parts = text.split(regex);

  return (
    <p className={styles.large__text}>
      {parts.map((part, index) => {
        // Reset regex.lastIndex since we're using the same regex instance in global mode.
        regex.lastIndex = 0;
        // If this part matches one of the key phrases, highlight it.
        if (regex.test(part)) {
          return (
            <span key={index} style={{ color: "var(--orange)" }}>
              {part}
            </span>
          );
        }
        return (
          <span key={index} style={{ color: defaultColor }}>
            {part}
          </span>
        );
      })}
    </p>
  );
};

export default HighlightedPhrases;
