import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/aboutboxwrapper.module.scss"

type TextWithEmailProps = {
  text: string;
  color: string
};

const TextEmail = ({ text, color }: TextWithEmailProps) => {
  // Regular expression to match emails.
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

  // Split the text into parts based on the email matches.
  const parts = text.split(emailRegex);

  return (
    <p style={{color: color}} className={styles.text__email}>
      {parts.map((part, index) =>
        emailRegex.test(part) ? (
          <Link
            key={index}
            href={`mailto:${part}`}
            style={{ color: "#FF5B00", textDecoration: "underline" }}
          >
            {part}
          </Link>
        ) : (
          part
        )
      )}
    </p>
  );
};

export default TextEmail;
