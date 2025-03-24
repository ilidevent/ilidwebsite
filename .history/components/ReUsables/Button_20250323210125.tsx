"use client";

import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

interface ButtonInfo {
  name: string;
  link?: string;
  target?: string
}

interface ButtonProps {
  buttonInfo: ButtonInfo;
  fill: boolean;
  onClick?: () => void;
}

const Button = ({ buttonInfo, fill, onClick }: ButtonProps) => {
  // If a link is provided, render a Link
  if (buttonInfo.link) {
    return fill ? (
      <Link className={styles.button__background} href={buttonInfo.link} target={buttonInfo.target}>
        {buttonInfo.name}
      </Link>
    ) : (
      <Link className={styles.button__stroke} href={buttonInfo.link} target={buttonInfo.target}>
        {buttonInfo.name}
      </Link>
    );
  }

  // If no link is provided but an onClick is available, render a clickable span
  if (onClick) {
    return fill ? (
      <span className={styles.button__background} onClick={onClick}>
        {buttonInfo.name}
      </span>
    ) : (
      <span className={styles.button__stroke} onClick={onClick}>
        {buttonInfo.name}
      </span>
    );
  }

  // Fallback: render a non-clickable span
  return fill ? (
    <span className={styles.button__background}>{buttonInfo.name}</span>
  ) : (
    <span className={styles.button__stroke}>{buttonInfo.name}</span>
  );
};

export default Button;
