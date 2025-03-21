import React from 'react'
import Link from 'next/link'
import styles from "../../styles/ReUsables/button.module.scss"

interface ButtonInfo {
  fill: boolean;
  color: string;
  background: string;
}

const Button = ({buttonInfo}: {buttonInfo: ButtonInfo}) => {
  return (
    <div className=''>

    </div>
  )
}

export default Button