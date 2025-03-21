import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

interface ButtonInfo {
  color: string;
  background?: string;
  name: string;
  link: string;
}

const Button = ({
  buttonInfo,
  fill,
}: {
  buttonInfo: ButtonInfo;
  fill: boolean;
}) => {
  return (
    <>
      {fill ? (
        <div className={styles.button__background}>
          
        </div>
      ) : (
        <div className={styles.button__stroke}></div>
      )}
    </>
  );
};

export default Button;
