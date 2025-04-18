import React from "react";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

type TextWithLinkProps = {
  text: string;
  color: string;
  targetWord: string;
  link: string;
};

const TextLink = ({ text, color, targetWord, link }: TextWithLinkProps) => {
  // Escape special characters in the target word for regex
  const escapedTarget = targetWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const targetRegex = new RegExp(`(${escapedTarget})`, "gi");

  // Split the text into parts based on the target word
  const parts = text.split(targetRegex);

  return (
    <p style={{ color: color }} className={styles.text__email}>
      {parts.map((part, index) =>
        part.toLowerCase() === targetWord.toLowerCase() ? (
          <a
            key={index}
            href={link}
            style={{ color: "#FF5B00", textDecoration: "underline" }}
          >
            {part}
          </a>
        ) : (
          part
        )
      )}
    </p>
  );
};

export default TextLink;
