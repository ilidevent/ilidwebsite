import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

interface ButtonInfo {
  name: string;
  link?: string;
}

const Button = ({
  buttonInfo,
  fill,
  onClick
}: {
  buttonInfo: ButtonInfo;
  fill: boolean;
  onClick?: () => void
}) => {
  return (
    <>
      {
        buttonInfo.link ? ()
      }
      {fill ? (
        <Link className={styles.button__background} href={buttonInfo.link}>
          {buttonInfo.name}
        </Link>
      ) : (
        <Link className={styles.button__stroke} href={buttonInfo.link}>
          {buttonInfo.name}
        </Link>
      )}
    </>
  );
};

export default Button;
