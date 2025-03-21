import React from "react";
import Link from "next/link";
import styles from "../../styles/ReUsables/button.module.scss";

interface ButtonInfo {
  name: string;
  link: string;
}

const ButtonTwo = ({ buttonInfo }: { buttonInfo: ButtonInfo }) => {
  return (
    {buttonInfo &&}
    
  );
};

export default ButtonTwo;
