import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

interface ButtonInfo {
  name: string;
  link: string;
  target:
}

const ButtonTwo = ({ buttonInfo }: { buttonInfo?: ButtonInfo }) => {
  if (!buttonInfo) return null; // or handle the undefined case as needed
  
  return (
    <>
      {buttonInfo && (
        <Link className={styles.button__strokeTwo} href={buttonInfo.link}>
          {buttonInfo.name}
        </Link>
      )}
    </>
  );
};

export default ButtonTwo;
