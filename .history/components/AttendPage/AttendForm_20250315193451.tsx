"use client";

import React, {useState, useRef} from 'react'
import FormInput from '../ReUsables/FormInput'
import styles from "../../styles/AttendPage/attendform.module.scss"

const AttendForm = () => {
  const [buttonText, setButtonText] = useState("Send message");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);
  return (
    <div className={styles.aform__wrapper}>
      <form>

      </form>
    </div>
  )
}

export default AttendForm