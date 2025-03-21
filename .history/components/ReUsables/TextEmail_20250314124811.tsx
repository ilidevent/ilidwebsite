"use client";

import React from "react";

type TextWithEmailProps = {
  text: string;
};

const TextWithEmail = ({ text }: TextWithEmailProps) => {
  // Regular expression to match emails.
  const emailRegex = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;

  // Split the text into parts based on the email matches.
  const parts = text.split(emailRegex);

  return (
    <p>
      {parts.map((part, index) =>
        emailRegex.test(part) ? (
          <a
            key={index}
            href={`mailto:${part}`}
            style={{ color: "blue", textDecoration: "underline" }}
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

export default TextWithEmail;
