import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss";

type LinkItem = {
  targetWord: string;
  link: string;
};

type TextWithLinksProps = {
  text: string;
  links: LinkItem[];
};

const DoubleTextLink = ({ text, links }: TextWithLinksProps) => {
  if (!links.length) return <p className={styles.dtext__link}>{text}</p>;

  // Create a regex that matches any of the target words
  const escapedWords = links.map(({ targetWord }) => targetWord.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const targetRegex = new RegExp(`(${escapedWords.join("|")})`, "gi");

  // Split the text and replace matches with links
  const parts = text.split(targetRegex);

  return (
    <p style={{ color: "var(--text-color-light)" }} className={styles.dtext__link}>
      {parts.map((part, index) => {
        const matchingLink = links.find(({ targetWord }) => part.toLowerCase() === targetWord.toLowerCase());

        return matchingLink ? (
          <Link key={index} href={matchingLink.link} style={{ color: "#FF5B00", textDecoration: "underline" }}>
            {part}
          </Link>
        ) : (
          part
        );
      })}
    </p>
  );
};

export default DoubleTextLink;
