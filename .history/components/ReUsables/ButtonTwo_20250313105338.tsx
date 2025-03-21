import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

interface ButtonInfo {
  name: string;
  link: string;
}

const Button = ({ buttonInfo }: { buttonInfo: ButtonInfo }) => {
  return (
    <Link className={styles.button__stroke} href={buttonInfo.link}>
      {buttonInfo.name}
    </Link>
  );
};

export default Button;
