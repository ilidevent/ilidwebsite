"use client";

import React, { useState, useRef } from "react";
import FormInput from "../ReUsables/FormInput";
import FormSelector from "../ReUsables/FormSelector";
import { AttendFormFields } from "@/utils";
import styles from "../../styles/AttendPage/attendform.module.scss";


const AttendForm = () => {
  const [buttonText, setButtonText] = useState("Secure my spot at ILID 2025");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeBox, setActiveBox] = useState(false);
  const [tickError, setTickError] = useState(false);

  const formRef = useRef<HTMLFormElement | null>(null);

  //FormSelect
  const [selectedItem, setSelectedItem] = useState("Please select")
   const selections = [
    "Please select",
    "Social Media",
    "University Announcement",
    "Word of mouth",
    "Other"
  ]
  const [selectError, setSelectError] = useState(false);

  const toggleSelectedItem = (selection: string) => {
    const newSelection = selection;
    setSelectedItem(newSelection);

    // If the user ticks the box, remove any error
    if (newSelection !== "Please select") {
      setSelectError(false);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // If checkbox is not ticked, show error and stop submission
    if (!activeBox) {
      setTickError(true);
      return;
    }
    setTickError(false);

    //Form Data
    const formData = new FormData(event.currentTarget);

    // Retrieve form fields
    const firstname = formData.get("fullname") as string | null;
    const lastname = formData.get("phone") as string | null;
    const email = formData.get("email") as string | null;
    const affiliation = formData.get("affiliation") as string | null;
    const additionalinfo = formData.get("additionalinfo") as string | null;

    // Change button text and show "Submitting..."
    setButtonText("Securing your spot...");
    setIsSubmitting(true);
  };

  const toggleCheckbox = () => {
    const newActiveBox = !activeBox;
    setActiveBox(newActiveBox);

    // If the user ticks the box, remove any error
    if (newActiveBox) {
      setTickError(false);
    }
  };

  return (
    <div className={styles.aform__wrapper}>
      <form onSubmit={handleSubmit} ref={formRef} className={styles.form}>
        <div className={styles.form__top}>
          <div className={styles.form__forms}>
            {AttendFormFields.map((data, i) => (
              <div className={styles.abox__wrap}>

                <FormInput data={data} isSubmitting={isSubmitting} />
              </div>
            ))}
            <div className={styles.form__selectorr}>
            <FormSelector selections={selections} selectedItem={selectedItem} labeler="How did you hear about ILID 2025?*" errorMessage="Please select an option." selectError={selectError} toggleSelectedItem={toggleSelectedItem}/>
            </div>
          </div>
          <div className={styles.checkbox__wrapper}>
            <div className={styles.cw__top}>
              <div
                className={`${styles.checkbox} ${
                  activeBox ? styles.active__box : ""
                }`}
                onClick={toggleCheckbox}
              >
                <div className={styles.checkbox__content}>
                  <span className={styles.svg}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        fill="#fff"
                        d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z"
                      ></path>
                    </svg>
                  </span>
                </div>
              </div>
              <span className={styles.checkbox__text}>
                To keep you informed about the latest updates on ILID 2025,
                please agree to receive information about our events by ticking
                this box.
              </span>
            </div>
            {tickError && (
              <span className={styles.checkbox__error}>
                Please check this box to receive event updates.
              </span>
            )}
          </div>
        </div>
        <button
          className={styles.submit}
          type="submit"
          disabled={isSubmitting} // Disable button while submitting
        >
          <span>{buttonText}</span>
          {isSubmitting && (
            <div className={styles.sub__right}>
              <span className={styles.spinner}></span>
            </div>
          )}
        </button>
      </form>
    </div>
  );
};

export default AttendForm;
