import React from 'react'
import Link from 'next/link'

interface ButtonInfo {
  fill: boolean;
  color: string;
  background: string;
}

const Button = ({buttonInfo}: {buttonInfo: ButtonInfo}) => {
  return (
    <div>Button</div>
  )
}

export default Button