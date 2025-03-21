import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/button.module.scss"

interface ButtonInfo {
  color: string;
  background?: string;
}

const Button = ({buttonInfo, fill}: {buttonInfo: ButtonInfo, fill: boolean}) => {
  return (
    <div className={styles.button__wrapper}>

    </div>
  )
}

export default Button