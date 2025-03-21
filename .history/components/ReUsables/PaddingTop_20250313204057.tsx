import React from 'react'
import styles from "../../styles/ReUsables/paddingtop.module.scss"

const PaddingTop = ({backgroundColor} : {backgroundColor: string}) => {
  return (
    <div className={styles.paddingtop} style={{backgroundColor: backgroundColor}}></div>
  )
}

export default PaddingTop