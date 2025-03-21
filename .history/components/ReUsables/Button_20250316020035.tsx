import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";
import { Span } from "next/dist/trace";

interface ButtonInfo {
  name: string;
  link?: string;
}

const Button = ({
  buttonInfo,
  fill,
  onClick,
}: {
  buttonInfo: ButtonInfo;
  fill: boolean;
  onClick?: () => void;
}) => {
  return (
    <>
      {fill ? (
        <Link className={styles.button__background} href={buttonInfo.link}>
          {buttonInfo.name}
        </Link>
      ) : (
        <Link className={styles.button__stroke} href={buttonInfo.link}>
          {buttonInfo.name}
        </Link>
      )}

      {fill ? (
        <span className={styles.button__background} href={buttonInfo.link}>
          {buttonInfo.name}
        </span>
      ) : (
        <span className={styles.button__stroke} href={buttonInfo.link}>
          {buttonInfo.name}
        </Link>
      )}
    </>
  );
};

export default Button;
